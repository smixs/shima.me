"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type TabValue = "personal" | "career" | "achievements" | "skills" | "timeline" | "music";

interface TabNavigationProps {
  activeTab: TabValue;
  onTabChange: (value: TabValue) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex justify-center w-full">
      <Tabs value={activeTab} onValueChange={(value) => onTabChange(value as TabValue)} className="w-full">
        <TabsList className="w-full bg-white rounded-[32px] p-0">
          <div className="inline-flex h-10 items-center justify-center rounded-[24px] bg-white p-1 text-gray-500 border border-gray-200 w-full">
            <TabsTrigger 
              value="personal"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-[clamp(6px,1vw,12px)] py-1.5 text-[clamp(11px,1vw,14px)] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-sm hover:text-gray-900"
            >
              About
            </TabsTrigger>
            <TabsTrigger 
              value="career"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-[clamp(6px,1vw,12px)] py-1.5 text-[clamp(11px,1vw,14px)] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-sm hover:text-gray-900"
            >
              Career
            </TabsTrigger>
            <TabsTrigger 
              value="achievements"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-[clamp(6px,1vw,12px)] py-1.5 text-[clamp(11px,1vw,14px)] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-sm hover:text-gray-900"
            >
              Achievements
            </TabsTrigger>
            <TabsTrigger 
              value="skills"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-[clamp(6px,1vw,12px)] py-1.5 text-[clamp(11px,1vw,14px)] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-sm hover:text-gray-900"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger 
              value="timeline"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-[clamp(6px,1vw,12px)] py-1.5 text-[clamp(11px,1vw,14px)] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-sm hover:text-gray-900"
            >
              Timeline
            </TabsTrigger>
            <TabsTrigger 
              value="music"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-[clamp(6px,1vw,12px)] py-1.5 text-[clamp(11px,1vw,14px)] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-sm hover:text-gray-900"
            >
              Music
            </TabsTrigger>
          </div>
        </TabsList>
      </Tabs>
    </div>
  );
}