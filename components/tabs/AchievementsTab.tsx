"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Rocket, MessageSquare, Lightbulb, Cog, Palette } from "lucide-react";

export function AchievementsTab() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gray-50 rounded-lg">
                <GraduationCap className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900">AI in Business Education</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Creator and lead instructor of the "Smart Marketing with AI" MBA course, helping businesses integrate AI to boost productivity and creativity.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gray-50 rounded-lg">
                <Rocket className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900">AI-Powered Product Development</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Designed and launched AI-driven solutions for marketing, branding, and business growth, including predictive analytics tools and personalized chatbot systems.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gray-50 rounded-lg">
                <MessageSquare className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900">AI Content Creation</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Founder of a Telegram channel focused on AI applications in marketing, branding, and strategy, providing cutting-edge insights to over 2,000 subscribers.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gray-50 rounded-lg">
                <Lightbulb className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900">AI in Creative Strategy</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Integrated AI tools into marketing campaigns and R&D processes, generating innovative concepts and measurable results for clients across various industries.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gray-50 rounded-lg">
                <Cog className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Business Transformation with AI</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Developed practical frameworks to teach companies how to use AI for scaling creative and strategic processes, saving time and resources.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gray-50 rounded-lg">
                <Palette className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900">AI for Branding</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pioneered the use of AI to enhance brand storytelling and communication strategies, delivering memorable experiences and impactful results.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}