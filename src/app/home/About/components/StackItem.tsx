import { Stacks } from "@/constant/stacks";
import { useTheme } from "next-themes";
import React, { useState } from "react";

export default function StackItem({ skill }: { skill: string }) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };
  return (
    <div className="w-8">
      <div
        style={{
          filter: isHovered
            ? "grayscale(0%)"
            : theme === "dark"
            ? "grayscale(100%) brightness(100%)"
            : "grayscale(100%) brightness(48%)",
          transition: "0.3s ease-in-out",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {Stacks[skill]}
      </div>
    </div>
  );
}
