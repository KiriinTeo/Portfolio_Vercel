"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";

export type MarqueeItem = {
  name: string;
  icon: React.ReactNode;
  color?: string;
};

export const Marquee = ({
  items,
  direction = "left",
  speed = 40,
  className,
}: {
  items: MarqueeItem[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex shrink-0 gap-24 md:gap-28 py-4 w-max items-center" // Aumentei o GAP absurdamente aqui
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }} // Ajuste da matemática do loop
        // ... resto do transition e style
        >
        {[...items, ...items].map((item, index) => ( // Apenas 1 clone em vez de 2
            <div key={index} className="flex flex-col items-center justify-center gap-3 group cursor-default">
            {/* O Ícone agora recebe a cor dinâmica */}
            <div className={cn("text-5xl transition-all duration-300 group-hover:scale-110", item.color)}>
                {item.icon}
            </div>
            <span className="text-xs text-zinc-500 font-mono group-hover:text-slate-300 transition-colors">
                {item.name}
            </span>
            </div>
        ))}
        </motion.div>
    </div>
  );
};