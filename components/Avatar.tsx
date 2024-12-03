"use client";

import { Avatar as AvatarUI, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "custom";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-24 w-24",
  custom: "",
};

export function Avatar({ src, alt = "Avatar", size = "md", className }: AvatarProps) {
  const initials = alt
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <AvatarUI className={cn(sizeClasses[size], className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className="bg-gray-100 text-gray-600">
        {initials}
      </AvatarFallback>
    </AvatarUI>
  );
} 