import React, { useState } from "react";
import { Inter, Darker_Grotesque } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
});

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const spotlightRadius = 200; // Radius of the spotlight

  // Update mouse position on mousemove
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className={`${inter.className} w-full min-h-screen flex items-center justify-center relative`}
    >
      {/* Background Text */}
      <div
        className={`-z-10 absolute text-zinc-400 font-black text-[30vh] leading-none text-left w-full ${darkerGrotesque.className}`}
        style={{
          WebkitMaskImage: `radial-gradient(circle ${spotlightRadius}px at ${
            mousePos.x
          }px ${mousePos.y - spotlightRadius / 2}px, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%)`,
          maskImage: `radial-gradient(circle ${spotlightRadius}px at ${
            mousePos.x
          }px ${mousePos.y - spotlightRadius / 2}px, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%)`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        Hello <br /> There
      </div>

      {/* Foreground Content */}
      <div>I{"'"}m Fulton Browne</div>
    </main>
  );
}
