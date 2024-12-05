"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { TabNavigation, TabValue } from "@/components/TabNavigation";
import { AboutTab } from "@/components/tabs/PersonalTab";
import { CareerTab } from "@/components/tabs/CareerTab";
import { AchievementsTab } from "@/components/tabs/AchievementsTab";
import { SkillsTab } from "@/components/tabs/SkillsTab";
import { TimelineTab } from "@/components/tabs/TimelineTab";
import { MusicTab } from "@/components/tabs/MusicTab";
import { personalInfo, careerData, musicCareer, timelineData } from "@/lib/data";
import Link from "next/link";
import { CompanyLogo } from "@/components/CompanyLogo";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedTabContent } from "@/components/AnimatedTabContent";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabValue>("personal");

  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      {/* Noise overlay */}
      <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 min-h-screen flex flex-col">
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
          <div className="relative w-full px-4 py-12 md:py-24 text-center">
            <style jsx>{`
              @keyframes floatBubble {
                0%, 100% {
                  transform: translateY(2px) rotate(-4deg);
                }
                50% {
                  transform: translateY(-4px) rotate(-7deg);
                }
              }
            `}</style>
            <div className="mb-8 relative inline-block">
              <Avatar 
                src="/avatar.png" 
                alt="Serge Shima"
                size="custom" 
                className="w-40 h-40 mx-auto border-2 border-white shadow-lg"
              />
              <div className="absolute -right-28 top-12 bg-white px-4 py-3 rounded-[20px] shadow-md" style={{ animation: 'floatBubble 4s ease-in-out infinite' }}>
                <h1 className="text-base font-light whitespace-nowrap">Serge Shima 👋</h1>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold mb-8 flex flex-col items-center leading-relaxed">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 inline-block text-transparent bg-clip-text">Babai of creative AI</span>
              <span className="bg-gradient-to-r from-gray-600 to-gray-900 inline-block text-transparent bg-clip-text">Turning ideas into impact</span>
            </h2>
            
            <Button variant="default" size="lg" className="rounded-full px-6">
              <Link href="https://t.me/aimastersme" target="_blank" className="relative">
                <div className="absolute inset-0 bg-black/2 hover:bg-black/10 transition-colors rounded-full" />
                @aimastersme
              </Link>
            </Button>
          </div>
        </div>

        {/* Logos Section */}
        <div className="relative bg-white rounded-[32px] mb-8 md:mb-16">
          <div className="w-full px-4 py-8 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
              <CompanyLogo 
                src="/logos/BNB.png" 
                alt="BNB Bank" 
                description="Developed and launched the most successful BNPL product in Belarus and Russia - Halva Card"
              />
              <CompanyLogo 
                src="/logos/Unilayer.png" 
                alt="UniLayer" 
                description="Bonsticks — children's loyalty promo campaigns in Euroopt retail chain brought $21M"
              />
              <CompanyLogo 
                src="/logos/kemliva.png" 
                alt="Kemliva" 
                description="Created HR Brand for the largest international IT company"
              />
              <CompanyLogo 
                src="/logos/eurotorg.png" 
                alt="Eurotorg" 
                description="Created digital platform for Philip Morris brands communication in Central Asia"
              />
              <CompanyLogo 
                src="/logos/aida.png" 
                alt="AIDA" 
                description="Brand and communication strategy for PariMatch betting in Belarus"
              />
              <CompanyLogo 
                src="/logos/bbdo.png" 
                alt="BBDO" 
                description="Developed brand strategy for Exponenta protein dairy cocktails. Grand Prix Effie 2018"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-8">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          <AnimatedTabContent isSelected={activeTab === "personal"}>
            <AboutTab info={personalInfo} />
          </AnimatedTabContent>

          <AnimatedTabContent isSelected={activeTab === "achievements"}>
            <AchievementsTab />
          </AnimatedTabContent>

          <AnimatedTabContent isSelected={activeTab === "skills"}>
            <SkillsTab />
          </AnimatedTabContent>

          <AnimatedTabContent isSelected={activeTab === "music"}>
            <MusicTab music={musicCareer} />
          </AnimatedTabContent>

          <AnimatedTabContent isSelected={activeTab === "career"}>
            <CareerTab careers={careerData} />
          </AnimatedTabContent>

          <AnimatedTabContent isSelected={activeTab === "timeline"}>
            <TimelineTab data={timelineData} />
          </AnimatedTabContent>
        </div>

        {/* Footer */}
        <div className="relative bg-white rounded-t-[32px] mt-auto">
          <div className="w-full px-4 py-8">
            <div className="flex flex-row justify-between items-center">
              <div className="pl-4">
                <p className="text-xs font-extralight text-gray-500">© 2024 This site was created entirely using AI. Honestly, I donn't code.</p>
              </div>
              <div className="pr-4 text-xs font-extralight">
                <Link href="https://t.me/shimaoz" target="_blank" className="text-gray-500 hover:text-gray-900">
                  telegram
                </Link>
                <span className="text-gray-300 mx-2">/</span>
                <Link href="https://www.instagram.com/serge.shima/" target="_blank" className="text-gray-500 hover:text-gray-900">
                  instagram
                </Link>
                <span className="text-gray-300 mx-2">/</span>
                <Link href="https://www.linkedin.com/in/sergeshima/" target="_blank" className="text-gray-500 hover:text-gray-900">
                  linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}