"use client";

import { Card, CardContent } from "@/components/ui/card";

export function AchievementsTab() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="border rounded-lg p-4 text-center">
            <h3 className="font-semibold text-gray-900">$21M</h3>
            <p className="text-sm text-gray-600">Revenue generated through gamification projects</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <h3 className="font-semibold text-gray-900">Halva Brand Creation</h3>
            <p className="text-sm text-gray-600">Most popular BNPL card in Belarus and Russia</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <h3 className="font-semibold text-gray-900">Published Author</h3>
            <p className="text-sm text-gray-600">&ldquo;Effective Branding&rdquo; - Guide on innovative branding strategies</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}