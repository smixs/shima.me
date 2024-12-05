"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

const skills = [
  { name: "AI Integration", level: 82 },
  { name: "Team Leadership", level: 76 },
  { name: "Marketing", level: 90 },
  { name: "Communication Strategy", level: 95 },
  { name: "Gamification", level: 65 },
  { name: "Creativity", level: 72 }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function SkillsTab() {
  return (
    <Card>
      <CardContent className="p-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[500px] md:max-w-none mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="space-y-2"
              variants={item}
            >
              <div className="flex justify-between text-sm text-gray-600">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gray-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1, 
                    ease: "easeOut",
                    delay: index * 0.1 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}