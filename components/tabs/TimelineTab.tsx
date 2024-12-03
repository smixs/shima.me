"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TimelineChart } from "../TimelineChart";

export function TimelineTab() {
  return (
    <Card>
      <CardContent className="p-6">
        <TimelineChart />
      </CardContent>
    </Card>
  );
}