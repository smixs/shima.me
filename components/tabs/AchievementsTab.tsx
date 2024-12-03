"use client";

import { Card, CardContent } from "@/components/ui/card";

export function AchievementsTab() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800">$21M</h3>
            <p className="text-sm text-green-600">Revenue generated through gamification projects</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800">Halva Brand Creation</h3>
            <p className="text-sm text-blue-600">Most popular BNPL card in Belarus and Russia</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800">Published Author</h3>
            <p className="text-sm text-purple-600">"Effective Branding" - Guide on innovative branding strategies</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}