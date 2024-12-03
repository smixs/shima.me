"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MusicCareer } from "@/types";
import { Badge } from "@/components/ui/badge";

interface MusicTabProps {
  music: MusicCareer;
}

export function MusicTab({ music }: MusicTabProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">DJ Career ({music.period})</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {music.roles.map((role, index) => (
                <Badge key={index} variant="secondary">{role}</Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Music Style</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {music.genres.map((genre, index) => (
                <Badge key={index} variant="outline">{genre}</Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Key Achievements</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              {music.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-4 text-sm text-gray-600 italic">
            {music.currentActivity}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}