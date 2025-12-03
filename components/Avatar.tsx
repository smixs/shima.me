"use client";

import { Avatar as AvatarUI, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "custom";
  className?: string;
  priority?: boolean;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-24 w-24",
  custom: "",
};

export function Avatar({ src, alt = "Avatar", size = "md", className, priority = false }: AvatarProps) {
  const initials = alt
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <AvatarUI className={cn(sizeClasses[size], className)}>
      {src && (
        <AvatarImage asChild src={src} alt={alt}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={size === 'custom' ? '(max-width: 768px) 100vw, 33vw' : size === 'lg' ? '96px' : size === 'md' ? '48px' : '32px'}
            className="object-cover"
          />
        </AvatarImage>
      )}
      <AvatarFallback className="bg-gray-100 text-gray-600">
        {initials}
      </AvatarFallback>
    </AvatarUI>
  );
} 