"use client";

import { CustomTooltipProps } from "@/types/chart";
import { motion, AnimatePresence } from "framer-motion";

export function TimelineTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white p-4 shadow-lg rounded-lg border"
        >
          <p className="font-bold text-sm">{data.year}</p>
          <p className="text-xs">{data.role}</p>
          <p className="text-gray-600 text-xs">{data.company}</p>
        </motion.div>
      </AnimatePresence>
    );
  }
  return null;
}