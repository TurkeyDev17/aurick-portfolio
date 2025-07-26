"use client";

import * as FramerMotion from "framer-motion";
import { Skill } from "@/data/skills";
import Image from "next/image";

const motion = FramerMotion.motion;

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      className="bg-zinc-900 rounded-xl p-6 shadow-md transition-transform duration-300 delay-100 hover:scale-105 hover:shadow-red-500 h-full min-h-[180px] flex flex-col justify-start"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.08,
            duration: 0.4,
            ease: "easeOut",
          },
        }),
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={skill.index}
    >
      <div className="flex flex-col items-center space-y-3">
        {skill.icon ? (
          skill.icon
        ) : skill.image ? (
          <Image
            src={skill.image}
            alt={skill.name}
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
        ) : null}

        <h4 className="text-white text-lg font-semibold text-center">
          {skill.name}
        </h4>
        <p className="text-sm text-gray-300 text-center">{skill.description}</p>
      </div>
    </motion.div>
  );
}
