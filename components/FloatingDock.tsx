"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Briefcase,
  Clock,
  Code,
  Music,
  Sparkles,
  User,
} from "lucide-react";
import { useRef, useState } from "react";
import { TabValue } from "./TabNavigation";

interface FloatingDockProps {
  activeTab: TabValue;
  onTabChange: (value: TabValue) => void;
  className?: string;
}

export const FloatingDock = ({
  activeTab,
  onTabChange,
  className,
}: FloatingDockProps) => {
  const items = [
    { title: "About", icon: <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />, value: "personal" as TabValue },
    { title: "AI", icon: <Sparkles className="h-full w-full text-neutral-500 dark:text-neutral-300" />, value: "achievements" as TabValue },
    { title: "Skills", icon: <Code className="h-full w-full text-neutral-500 dark:text-neutral-300" />, value: "skills" as TabValue },
    { title: "Music", icon: <Music className="h-full w-full text-neutral-500 dark:text-neutral-300" />, value: "music" as TabValue },
    { title: "Career", icon: <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />, value: "career" as TabValue },
    { title: "Timeline", icon: <Clock className="h-full w-full text-neutral-500 dark:text-neutral-300" />, value: "timeline" as TabValue },
  ];

  let mouseX = useMotionValue(Infinity);

  return (
    <div className={cn("fixed bottom-8 left-1/2 -translate-x-1/2 z-50", className)}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-14 gap-4 items-center rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 px-4 shadow-xl"
      >
        {items.map((item) => (
          <IconContainer
            mouseX={mouseX}
            key={item.title}
            {...item}
            isActive={activeTab === item.value}
            onClick={() => onTabChange(item.value)}
          />
        ))}
      </motion.div>
    </div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  value,
  isActive,
  onClick,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  value: TabValue;
  isActive: boolean;
  onClick: () => void;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    if (val === Infinity) return 0;
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [36, 56, 36], { clamp: true });
  let heightTransform = useTransform(distance, [-150, 0, 150], [36, 56, 36], { clamp: true });

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <div onClick={onClick} className="cursor-pointer">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "aspect-square rounded-full flex items-center justify-center relative transition-all duration-200",
          isActive
            ? "bg-neutral-200/50 dark:bg-neutral-800/50 backdrop-blur-md border border-neutral-300/50 dark:border-neutral-700/50 shadow-inner scale-105"
            : "bg-white/10 border-transparent border hover:bg-white/20"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-neutral-800 border-neutral-900 text-white absolute left-1/2 -translate-x-1/2 -top-10 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className={cn("flex items-center justify-center w-5 h-5 transition-colors", isActive ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-500")}>{icon}</div>
      </motion.div>
      {isActive && (
        <motion.div
          layoutId="active-dot"
          className="w-1 h-1 bg-neutral-900 dark:bg-neutral-100 rounded-full mx-auto mt-1"
        />
      )}
    </div>
  );
}
