"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CareerEntry } from "@/types";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Briefcase, GraduationCap, Lightbulb, Trophy } from "lucide-react";

interface CareerTabProps {
  careers: CareerEntry[];
}

export function CareerTab({ careers }: CareerTabProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-8 max-w-4xl mx-auto">
          {careers.map((role, index) => (
            <div key={index} className="relative pl-6 border-l-2 border-gray-300">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-300 rounded-full" />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{role.title}</h3>
                  <p className="text-lg text-gray-700">{role.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">{role.period}</p>
                  <p className="text-sm text-gray-500">{role.location}</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-gray-600" />
                  <h4 className="text-sm font-semibold text-gray-700">Responsibilities</h4>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {role.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed">{resp}</li>
                  ))}
                </ul>
              </div>

              {role.achievements && role.achievements.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-4 h-4 text-gray-600" />
                    <h4 className="text-sm font-semibold text-gray-700">Key Achievements</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {role.achievements.map((achievement, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm bg-gray-100 text-gray-800 hover:bg-gray-200">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {role.skills && role.skills.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-gray-600" />
                    <h4 className="text-sm font-semibold text-gray-700">Key Skills</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-sm text-gray-700 border-gray-300 hover:bg-gray-50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {role.teachingExperience && role.teachingExperience.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-4 h-4 text-gray-600" />
                    <h4 className="text-sm font-semibold text-gray-700">Teaching Experience</h4>
                  </div>
                  {role.teachingExperience.map((exp, idx) => (
                    <div key={idx} className="text-sm text-gray-600 mb-2">
                      <p className="font-medium">{exp.course}</p>
                      <p>{exp.role} • {exp.period}</p>
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                  ))}
                </div>
              )}

              {role.publications && role.publications.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-gray-600" />
                    <h4 className="text-sm font-semibold text-gray-700">Publications</h4>
                  </div>
                  {role.publications.map((pub, idx) => (
                    <div key={idx} className="text-sm text-gray-600 mb-2">
                      <p className="font-medium">{pub.title}</p>
                      <p className="text-gray-500">{pub.type} • {pub.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {role.projectHighlights && role.projectHighlights.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-gray-600" />
                    <h4 className="text-sm font-semibold text-gray-700">Project Highlights</h4>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    {role.projectHighlights.map((highlight, idx) => (
                      <li key={idx} className="leading-relaxed">{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}