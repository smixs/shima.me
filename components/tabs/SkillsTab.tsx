"use client";

import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/lib/data";

export function SkillsTab() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[500px] md:max-w-none mx-auto">
          {skills.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>{item.name}</span>
                <span>{item.level}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div 
                  className="h-full bg-gray-800 rounded-full transition-all duration-500"
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}