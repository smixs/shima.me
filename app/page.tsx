"use client";

import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { PersonalTab } from "@/components/tabs/PersonalTab";
import { CareerTab } from "@/components/tabs/CareerTab";
import { AchievementsTab } from "@/components/tabs/AchievementsTab";
import { SkillsTab } from "@/components/tabs/SkillsTab";
import { TimelineTab } from "@/components/tabs/TimelineTab";
import { MusicTab } from "@/components/tabs/MusicTab";
import { TabNavigation, TabValue } from "@/components/TabNavigation";
import { personalInfo, careerData, musicCareer } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Copy, Linkedin, Instagram } from "lucide-react";
import { Avatar } from "@/components/Avatar";

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
              src="/avatar.png" 
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
            <img src="/logos/bnb.png" alt="BNB Bank" className="h-6 md:h-8 w-auto object-contain grayscale mx-auto" />
            <img src="/logos/unilayer.png" alt="UniLayer" className="h-6 md:h-8 w-auto object-contain grayscale mx-auto" />
            <img src="/logos/kemliva.png" alt="Kemliva" className="h-6 md:h-8 w-auto object-contain grayscale mx-auto" />
            <img src="/logos/eurotorg.png" alt="Eurotorg" className="h-6 md:h-8 w-auto object-contain grayscale mx-auto" />
            <img src="/logos/aida.png" alt="AIDA" className="h-6 md:h-8 w-auto object-contain grayscale mx-auto" />
            <img src="/logos/bbdo.png" alt="BBDO" className="h-6 md:h-8 w-auto object-contain grayscale mx-auto" />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative bg-white rounded-[32px] mb-8 md:mb-16">
        <div className="w-full px-4 py-12 md:py-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Collaborate with brands and agencies<br className="hidden md:block" />
              to create impactful results.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[500px] md:max-w-none mx-auto">
            <div className="p-4 md:p-6 text-center md:text-left">
              <div className="mb-4 flex justify-center md:justify-start">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16H3V8h9m0 8h9V8h-9m0 8V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
              <p className="text-gray-600">Integrating AI solutions into creative processes and product development.</p>
            </div>

            <div className="p-4 md:p-6 text-center md:text-left">
              <div className="mb-4 flex justify-center md:justify-start">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic Leadership</h3>
              <p className="text-gray-600">Leading teams and projects with innovative approaches and clear vision.</p>
            </div>

            <div className="p-4 md:p-6 text-center md:text-left">
              <div className="mb-4 flex justify-center md:justify-start">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19l7-7-7-7M5 19l7-7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Management</h3>
              <p className="text-gray-600">Managing creative teams and developing innovative solutions.</p>
            </div>

            <div className="p-4 md:p-6 text-center md:text-left">
              <div className="mb-4 flex justify-center md:justify-start">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Development</h3>
              <p className="text-gray-600">Creating and scaling digital products with focus on user experience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-white rounded-[32px]">
        <div className="w-full px-4 py-8">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabValue)} className="w-full">
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            
            <div className="mt-8">
              <TabsContent value="personal">
                <PersonalTab info={personalInfo} />
              </TabsContent>
              
              <TabsContent value="career">
                <CareerTab careers={careerData} />
              </TabsContent>
              
              <TabsContent value="achievements">
                <AchievementsTab />
              </TabsContent>
              
              <TabsContent value="skills">
                <SkillsTab />
              </TabsContent>
              
              <TabsContent value="timeline">
                <TimelineTab />
              </TabsContent>
              
              <TabsContent value="music">
                <MusicTab music={musicCareer} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </main>
  );
}