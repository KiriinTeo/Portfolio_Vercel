"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto p-4 md:auto-rows-[12rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.99 }}
      className={cn(
        "row-span-1 rounded-2xl group/bento transition duration-200 p-6 flex flex-col",
        "bg-zinc-900/40 border border-white/10 backdrop-blur-md relative overflow-hidden",
        "hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
        className
      )}
    >
      {header}
      <div className="flex flex-col mt-auto z-10">
        <div className="font-sans font-bold text-slate-100 mb-2 text-2xl tracking-tight">
          {title}
        </div>
        <div className="font-sans font-normal text-slate-400 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};