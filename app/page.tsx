"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { TabNavigation, TabValue } from "@/components/TabNavigation";
import { PersonalTab } from "@/components/tabs/PersonalTab";
import { CareerTab } from "@/components/tabs/CareerTab";
import { AchievementsTab } from "@/components/tabs/AchievementsTab";
import { SkillsTab } from "@/components/tabs/SkillsTab";
import { TimelineTab } from "@/components/tabs/TimelineTab";
import { MusicTab } from "@/components/tabs/MusicTab";
import { personalInfo, careerData, musicCareer, timelineData } from "@/lib/data";
import Link from "next/link";
import { CompanyLogo } from "@/components/CompanyLogo";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabValue>("personal");

  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      {/* Noise overlay */}
      <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4">
        {/* Header with contact info */}
        <div className="relative bg-white rounded-b-[32px] mb-8 md:mb-16">
          <div className="w-full px-4 py-4">
            <div className="flex flex-row justify-between items-center">
              <div className="pl-4">
                <Link 
                  href="https://t.me/shimaoz" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Telegram
                </Link>
              </div>
              <div className="flex items-center gap-6 pr-4">
                <Link href="https://www.linkedin.com/in/sergeshima/" target="_blank" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="https://www.instagram.com/serge.shima/" target="_blank" className="text-gray-600 hover:text-gray-900">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-white rounded-[32px] mb-8 md:mb-16 overflow-hidden min-h-[400px]">
          <AnimatedBackground />
          <div className="relative w-full px-4 py-12 md:py-20 text-center">
            <div className="mb-8">
              <Avatar 
                src="/avatar.png" 
                alt="Serge Shima"
                size="custom" 
                className="w-20 h-20 mx-auto mb-4 border-2 border-white shadow-lg"
              />
              <h1 className="text-4xl font-bold mb-2">Serge Shima</h1>
              <p className="text-gray-600">Chief AI Officer @ TDI Group</p>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold mb-8 flex flex-col items-center leading-relaxed">
              <span>Driving</span>
              <span>creativity</span>
              <span>with AI</span>
            </h2>
            
            <Button variant="default" size="lg" className="rounded-full px-8">
              Latest Work
            </Button>
          </div>
        </div>

        {/* Logos Section */}
        <div className="relative bg-white rounded-[32px] mb-8 md:mb-16">
          <div className="w-full px-4 py-8 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
              <CompanyLogo src="/logos/BNB.png" alt="BNB Bank" />
              <CompanyLogo src="/logos/Unilayer.png" alt="UniLayer" />
              <CompanyLogo src="/logos/kemliva.png" alt="Kemliva" />
              <CompanyLogo src="/logos/eurotorg.png" alt="Eurotorg" />
              <CompanyLogo src="/logos/aida.png" alt="AIDA" />
              <CompanyLogo src="/logos/bbdo.png" alt="BBDO" />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-8">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === "personal" && <PersonalTab info={personalInfo} />}
          {activeTab === "career" && <CareerTab careers={careerData} />}
          {activeTab === "achievements" && <AchievementsTab />}
          {activeTab === "skills" && <SkillsTab />}
          {activeTab === "timeline" && <TimelineTab data={timelineData} />}
          {activeTab === "music" && <MusicTab music={musicCareer} />}
        </div>
      </div>
    </main>
  );
}