"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full mx-auto h-full", className)}
      style={{ scrollbarWidth: "none" }}
    >
      <style>
        {`
          ::-webkit-scrollbar {
            width: 0px;
            height: 0px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: transparent;
          }
        `}
      </style>
      <div style={{ position: "absolute", right: "6px", top: "4px", zIndex: "1000" }}>
        {/* This div is a circular element that follows the scroll progress */}
        <motion.div
          transition={{
            duration: 0.2, // duration of the animation
            delay: 0.5, // delay before the animation starts
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none" // if the scroll progress is greater than 0, there is no box shadow
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px", // else it has a box shadow with a specific style
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-500)",
              borderColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-600)",
            }}
            className="h-2 w-2  rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}  // Define the coordinate system for the SVG
          width="20"  // Set the width of the SVG
          height={svgHeight}  // Set the height of the SVG
          className="ml-0 block"  // Add some CSS classes for styling
          aria-hidden="true"  // Mark the SVG as hidden from screen readers (no need to read it)
        >
          {/* This is a motion.path element that represents a path in an SVG. It's used to create a "tracing beam" effect. 
          
           - d attribute: Defines the path of the SVG. It's a string that describes the shape of the path using SVG path commands. In this case, it's creating a path that starts at point (1,0), goes vertically down to -36, then diagonally to (29,40), then again diagonally to (1,svgHeight*0.8), and finally back up to (1,svgHeight).
           - fill attribute: Sets the color used to fill the shape. We set it to "none" so that the shape is not filled with a color.
           - stroke attribute: Sets the color used to draw the shape's outline. We set it to "#9091A0" which is a light grey color.
           - strokeOpacity attribute: Sets the opacity of the color used to draw the shape's outline. We set it to 0.16, which makes the outline slightly transparent.
           - transition attribute: Defines the animation properties for this element. In this case, we set the duration to 10, which means that the animation will take 10 seconds to complete.
          */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
