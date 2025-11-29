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
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-16 gap-4 items-end rounded-2xl bg-white border border-neutral-200 px-4 pb-3 shadow-lg"
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
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

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
          "aspect-square rounded-full flex items-center justify-center relative transition-colors",
          isActive ? "bg-neutral-100 border-neutral-300 border" : "bg-neutral-50 border-neutral-200 border hover:bg-neutral-100"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-neutral-800 border-neutral-900 text-white absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex items-center justify-center w-5 h-5">{icon}</div>
      </motion.div>
      {isActive && (
        <div className="w-1 h-1 bg-neutral-500 rounded-full mx-auto mt-1" />
      )}
    </div>
  );
}
