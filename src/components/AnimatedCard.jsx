"use client";
import { ArrowUpRight } from "lucide-react";
import { useMouse } from "./hooks/useMouse";

// Simple cn utility function
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const AnimatedCard = ({
  title,
  description,
  withArrow = false,
  circleSize = 400,
  className,
  children,
  onClick
}) => {
  const [mouse, parentRef] = useMouse();
  
  return (
    <div
      className="group relative transform-gpu overflow-hidden rounded-[20px] bg-white/10 p-2 transition-transform hover:scale-[1.01] active:scale-90 cursor-pointer h-full flex flex-col"
      ref={parentRef}
      onClick={onClick}
    >
      {withArrow && (
        <ArrowUpRight className="absolute right-2 top-2 z-10 size-5 translate-y-4 text-neutral-700 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 dark:text-neutral-300" />
      )}
      <div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100",
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background:
            "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
        }}
      />
      <div className="absolute inset-px rounded-[19px] bg-neutral-100/80 dark:bg-neutral-900/80" />
      {children && (
        <div
          className={cn(
            "relative h-40 overflow-hidden rounded-[15px] border-white bg-white/70 dark:border-neutral-950 dark:bg-black/50",
            className,
          )}
        >
          {children}
        </div>
      )}
      <div className="relative px-4 pb-2 pt-4 flex-1">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300 mb-2">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};