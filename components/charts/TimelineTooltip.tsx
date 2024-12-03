"use client";

import { CustomTooltipProps } from "@/types/chart";

export function TimelineTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-2 shadow-lg rounded-lg border">
        <p className="font-bold">{data.year}</p>
        <p>{data.role}</p>
        <p className="text-gray-600">{data.company}</p>
      </div>
    );
  }
  return null;
}