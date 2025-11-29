"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { PersonalInfo } from "@/types";
import { Bot, Music2, Rocket, Trophy } from "lucide-react";

interface AboutTabProps {
  info: PersonalInfo;
}

export function AboutTab({ info }: AboutTabProps) {
  const items = [
    {
      title: "The Visionary",
      description: "Hi, I'm Serge Shima. For 20 years, I've been helping brands grow and stand out by combining creativity and cutting-edge technology.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100" />,
      icon: <Bot className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
    },
    {
      title: "Impact & Results",
      description: "Projects like 'Halva' (top BNPL), EUROTORG ($21M profit), and UniLayer.io blockchain solutions.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100" />,
      icon: <Trophy className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      title: "AI & Innovation",
      description: "Specializing in AI marketing, R&D, and gamification. Created AR/VR projects generating millions in revenue.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100" />,
      icon: <Rocket className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Electronic Music",
      description: "Passionate DJ and musician since 1998. Performing in clubs and creating electronic music.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100" />,
      icon: <Music2 className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
    },
  ];

  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}