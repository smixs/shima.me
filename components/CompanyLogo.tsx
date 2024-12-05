"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CompanyLogoProps {
  src: string;
  alt: string;
  description: string;
}

export function CompanyLogo({ src, alt, description }: CompanyLogoProps) {
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
      
      {/* Modern Speech Bubble Tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { duration: 0.2 }
          }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="hidden group-hover:block"
        >
          <div className="relative bg-gradient-to-br from-white to-gray-50/90 backdrop-blur-sm px-3.5 py-1.5 rounded-lg shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15)] border border-white/20 min-w-[160px] max-w-[200px]">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[95%] w-0 h-0 
              border-l-[4px] border-l-transparent 
              border-t-[6px] border-t-white/90
              border-r-[4px] border-r-transparent" 
            />
            <p className="text-[11px] font-normal text-gray-600 text-center leading-snug">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 