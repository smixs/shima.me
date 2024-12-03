"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CompanyLogoProps {
  src: string;
  alt: string;
}

export function CompanyLogo({ src, alt }: CompanyLogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-pointer"
    >
      <motion.div
        className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      <div className="relative z-10 w-full h-8 grayscale group-hover:grayscale-0 transition-all duration-300">
        <Image 
          src={src} 
          alt={alt} 
          fill
          className="object-contain"
        />
      </div>
    </motion.div>
  );
} 