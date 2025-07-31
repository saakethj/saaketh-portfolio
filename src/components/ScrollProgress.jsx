"use client";
import { motion, useScroll } from "framer-motion";
import React from "react";

// Simple cn utility function (you can also create this in a separate utils file)
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const ScrollProgress = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";