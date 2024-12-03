"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { TabNavigation, TabValue } from "@/components/TabNavigation";
import { PersonalTab } from "@/components/tabs/PersonalTab";
import { CareerTab } from "@/components/tabs/CareerTab";
import { AchievementsTab } from "@/components/tabs/AchievementsTab";
import { SkillsTab } from "@/components/tabs/SkillsTab";
import { TimelineTab } from "@/components/tabs/TimelineTab";
import { MusicTab } from "@/components/tabs/MusicTab";
import { personalInfo, careers, musicCareer, timelineData } from "@/lib/data";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabValue>("personal");

  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      {/* Noise overlay */}
      <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Header with contact info */}
      <div className="relative bg-white rounded-b-[32px] mb-8 md:mb-16">
        <div className="w-full px-4 py-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 whitespace-nowrap">serge@shima.me</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-white rounded-[32px] mb-8 md:mb-16">
        <div className="w-full px-4 py-12 md:py-20 text-center">
          <div className="mb-8">
            <Avatar 
              src="/shima.me/avatar.png" 
              alt="Serge Shima" 
              size="custom" 
              className="w-20 h-20 mx-auto mb-4 border-2 border-white shadow-lg"
            />
            <h1 className="text-4xl font-bold mb-2">Serge Shima</h1>
            <p className="text-gray-600">Chief AI Officer @ TDI Group</p>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Driving creativity and innovations with AI
          </h2>
          
          <Button variant="default" size="lg" className="rounded-full px-8">
            Latest Work
          </Button>
        </div>
      </div>

      {/* Logos Section */}
      <div className="relative bg-white rounded-[32px] mb-8 md:mb-16">
        <div className="w-full px-4 py-8 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-50">
            <img src="/shima.me/logos/bnb.png" alt="BNB Bank" className="h-6 md:h-8 w-auto object-contain grayscale mx-auto" />
            <img src="/shima.me/logos/unilayer.png" alt="UniLayer" className="h-6 md:h-8 w-auto object-contain grayscale mx-auto" />
            <img src="/shima.me/logos/kemliva.png" alt="Kemliva" className="h-6 md:h-8 w-auto object-contain grayscale mx-auto" />
            <img src="/shima.me/logos/eurotorg.png" alt="Eurotorg" className="h-6 md:h-8 w-auto object-contain grayscale mx-auto" />
            <img src="/shima.me/logos/aida.png" alt="AIDA" className="h-6 md:h-8 w-auto object-contain grayscale mx-auto" />
            <img src="/shima.me/logos/bbdo.png" alt="BBDO" className="h-6 md:h-8 w-auto object-contain grayscale mx-auto" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mb-8">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Tab Content */}
      <div className="px-4 mb-8">
        {activeTab === "personal" && <PersonalTab info={personalInfo} />}
        {activeTab === "career" && <CareerTab careers={careers} />}
        {activeTab === "achievements" && <AchievementsTab />}
        {activeTab === "skills" && <SkillsTab />}
        {activeTab === "timeline" && <TimelineTab data={timelineData} />}
        {activeTab === "music" && <MusicTab music={musicCareer} />}
      </div>
    </main>
  );
}