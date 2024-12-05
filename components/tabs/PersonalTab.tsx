"use client";

import { Card, CardContent } from "@/components/ui/card";
import { PersonalInfo } from "@/types";
import { motion } from "framer-motion";
import { Bot, Music2, Rocket } from "lucide-react";

interface AboutTabProps {
  info: PersonalInfo;
}

export function AboutTab({ info }: AboutTabProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 bg-gray-50 rounded-xl">
                <Bot className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-extralight text-gray-600 leading-relaxed">
                  Hi, I'm Serge Shima. For 20 years, I've been helping brands grow and stand out by combining creativity and cutting-edge technology. My portfolio includes projects like "Halva," one of the most popular brands in its market, innovative programs for EUROTORG that delivered $21M in profit, and blockchain solutions development for UniLayer.io.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 bg-gray-50 rounded-xl">
                <Rocket className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-extralight text-gray-600 leading-relaxed">
                  I specialize in integrating AI into marketing, strategic planning, R&D, and crafting unconventional solutions. My expertise in gamification has led to the creation of successful AR and VR projects, generating millions in revenue and engaging millions of users.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 bg-gray-50 rounded-xl">
                <Music2 className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-extralight text-gray-600 leading-relaxed">
                  Outside of work, I'm passionate about electronic music. Since 1998, I've performed in clubs as a DJ and musician. For more details, check out the Music section.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}