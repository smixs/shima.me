"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CardSpotlight } from './ui/card-spotlight';

interface CompanyLogoProps {
  src: string;
  alt: string;
  description: string;
}

export function CompanyLogo({ src, alt, description }: CompanyLogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-pointer h-full"
    >
      <CardSpotlight className="h-full rounded-2xl p-6 flex items-center justify-center bg-white border-neutral-100 hover:border-neutral-200 shadow-sm hover:shadow-md transition-all">
        <div className="relative z-10 w-full h-12 grayscale group-hover:grayscale-0 transition-all duration-300">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
          />
        </div>

        {/* Modern Speech Bubble Tooltip */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 pointer-events-none z-20 w-max">
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
            <div className="relative bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl border border-neutral-200 max-w-[200px] whitespace-normal">
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[95%] w-0 h-0 
                border-l-[6px] border-l-transparent 
                border-t-[8px] border-t-white/90
                border-r-[6px] border-r-transparent"
              />
              <p className="text-xs font-medium text-neutral-600 text-center leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        </div>
      </CardSpotlight>
    </motion.div>
  );
} 