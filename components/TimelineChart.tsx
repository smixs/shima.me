"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TimelineTooltip } from '@/components/charts/TimelineTooltip';
import { timelineData } from '@/lib/data';

export function TimelineChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <LineChart 
          data={timelineData} 
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            type="number"
            domain={['dataMin', 'dataMax']}
            tickCount={5}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis 
            type="number"
            domain={[0, 10]}
            hide
          />
          <Tooltip content={<TimelineTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 4, fill: "#8884d8" }}
            activeDot={{ r: 6, fill: "#6366F1" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}