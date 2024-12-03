"use client";

import { Card, CardContent } from "@/components/ui/card";
import { PersonalInfo } from "@/types";

interface PersonalTabProps {
  info: PersonalInfo;
}

export function PersonalTab({ info }: PersonalTabProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Background</h3>
            <ul className="space-y-2 text-sm">
              <li>Age: {info.age}</li>
              <li>Originally from {info.origin.city}, {info.origin.country}</li>
              <li>{info.personality.mbti} Personality Type</li>
              <li>Languages: {info.languages.map(l => l.name).join(", ")}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Education</h3>
            <p className="text-sm">
              {info.education.degree}<br />
              {info.education.university}<br />
              {info.education.period}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}