// Grey grain field for the greeting hero: slow drifting light over toner grain.
// Pauses offscreen and in hidden tabs; draws one still frame under reduced motion.

const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;

const FRAG = `precision mediump float;
uniform vec2 r;uniform float t;
float h(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int k=0;k<5;k++){v+=a*n(p);p*=2.02;a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/r;vec2 q=uv*vec2(r.x/r.y,1.);
  float s=t*.035;
  float w=fbm(q*1.6+vec2(s,-s*.7)+fbm(q*2.3-s));
  float glow=smoothstep(.95,.05,length(uv-vec2(.5+.18*sin(s*2.1),.42+.12*cos(s*1.7))));
  float tone=mix(.80,.985,clamp(w*.85+glow*.55,0.,1.));
  float g=h(gl_FragCoord.xy+fract(t*7.)*97.)-.5;
  float dens=mix(.16,.05,glow);
  tone+=g*dens;
  gl_FragColor=vec4(vec3(tone)*vec3(.992,.994,1.),1.);
}`;

export function mountGrain(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });
  if (!gl) return;

  const sh = (type: number, src: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  };
  const prog = gl.createProgram()!;
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "p");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uR = gl.getUniformLocation(prog, "r");
  const uT = gl.getUniformLocation(prog, "t");

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(width * dpr));
    canvas.height = Math.max(1, Math.round(height * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uR, canvas.width, canvas.height);
  };

  const draw = (time: number) => {
    gl.uniform1f(uT, time / 1000);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  let visible = true;
  let raf = 0;
  let last = 0;
  const frame = (time: number) => {
    raf = requestAnimationFrame(frame);
    if (time - last < 1000 / 30) return;
    last = time;
    draw(time);
  };
  const sync = () => {
    cancelAnimationFrame(raf);
    if (reduce.matches || !visible || document.hidden) {
      draw(12000);
      return;
    }
    raf = requestAnimationFrame(frame);
  };

  new ResizeObserver(() => {
    resize();
    draw(performance.now());
  }).observe(canvas);
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    sync();
  }).observe(canvas);
  document.addEventListener("visibilitychange", sync);
  reduce.addEventListener("change", sync);

  resize();
  draw(12000);
  canvas.classList.add("is-live");
  sync();
}
