"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TimelineChart } from "../TimelineChart";
import { TimelineDataPoint } from "@/types";

interface TimelineTabProps {
  data: TimelineDataPoint[];
}

export function TimelineTab({ data }: TimelineTabProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <TimelineChart data={data} />
      </CardContent>
    </Card>
  );
}