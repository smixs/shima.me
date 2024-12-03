"use client";

import { PersonalInfo } from "@/types";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProfileHeaderProps {
  info: PersonalInfo;
}

export function ProfileHeader({ info }: ProfileHeaderProps) {
  return (
    <Card className="w-full bg-gradient-to-r from-purple-50 to-blue-50 p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-purple-200 to-blue-200 flex items-center justify-center">
          <span className="text-4xl font-bold text-white">{info.name[0]}</span>
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2">{info.name}</h1>
          <p className="text-lg text-gray-700 mb-2">Chief AI Officer at TDI Group</p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{info.currentLocation.city}, {info.currentLocation.country}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}