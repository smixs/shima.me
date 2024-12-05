"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MusicCareer } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Headphones, Music2, Radio } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface MusicTabProps {
  music: MusicCareer;
}

export function MusicTab({ music }: MusicTabProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Info */}
          <div className="space-y-6">
            <div className="text-left">
              <h3 className="font-semibold mb-3">DJ Career ({music.period})</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {music.roles.map((role, index) => (
                  <Badge key={index} variant="secondary">{role}</Badge>
                ))}
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="font-semibold mb-3">Music Style</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {music.genres.map((genre, index) => (
                  <Badge key={index} variant="outline">{genre}</Badge>
                ))}
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="font-semibold mb-3">Key Achievements</h3>
              <ul className="list-none space-y-2 text-sm text-gray-600">
                {music.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4 text-sm text-gray-600 italic text-left">
              {music.currentActivity}
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-3">Listen & Follow</h3>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="https://t.me/taxiaudio" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Headphones className="w-4 h-4" />
                  Taxi Audio
                </Link>
                <Link 
                  href="https://t.me/shimamuzik" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Radio className="w-4 h-4" />
                  Shima Muzik
                </Link>
                <Link 
                  href="https://open.spotify.com/playlist/7C7g8dPXdgzMuBbxDL4YYI?si=8e2643ec0ab74b57" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Music2 className="w-4 h-4" />
                  Spotify Playlist
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/dj-shima.jpg"
              alt="DJ Shima performing"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}