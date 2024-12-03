"use client";

import { Card, CardContent } from "@/components/ui/card";
import { PersonalInfo } from "@/types";
import { motion } from "framer-motion";

interface PersonalTabProps {
  info: PersonalInfo;
}

export function PersonalTab({ info }: PersonalTabProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h3 className="font-semibold mb-3">Background</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              41, born in Minsk, Belarus, now redefining creativity in Tashkent. 
              An ENTP-A with a knack for turning chaos into genius. 
              Fluent in Russian, English, and Belarusian.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left"
          >
            <h3 className="font-semibold mb-3">Education</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              History and English graduate from Belarusian State Pedagogical 
              University (2000–2005). I studied the past to shape the future
            </p>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}