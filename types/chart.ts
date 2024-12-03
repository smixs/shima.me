export interface TimelineDataPoint {
  year: number;
  role: string;
  company: string;
  value: number;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: TimelineDataPoint;
  }>;
}