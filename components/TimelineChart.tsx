"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TimelineTooltip } from '@/components/charts/TimelineTooltip';
import { TimelineDataPoint } from '@/types';

interface TimelineChartProps {
  data: TimelineDataPoint[];
}

export function TimelineChart({ data }: TimelineChartProps) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <LineChart 
          data={data} 
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
          <Tooltip 
            content={<TimelineTooltip />}
            animationDuration={300}
            animationEasing="ease-out"
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#9CA3AF"
            strokeWidth={2}
            dot={{ r: 6, fill: "#9CA3AF" }}
            activeDot={{ r: 8, fill: "#4B5563" }}
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}