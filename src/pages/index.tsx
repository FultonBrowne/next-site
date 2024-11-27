import React, { useState, useEffect } from "react";
import { Inter, Darker_Grotesque } from "next/font/google";
import Image from "next/image";
import { FaGithubAlt, FaLinkedin, FaRss, FaTwitter } from "react-icons/fa6";

const inter = Inter({
  subsets: ["latin"],
});

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
});

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const spotlightRadius = 200;

  const items = [
    "Hiker🚶‍♂️",
    "Software Engineer👨‍💻",
    "Photographer📸",
    "Designer🎨",
  ];

  const [displayText, setDisplayText] = useState(items[0]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const transitionToNextItem = () => {
      const nextItemIndex = (currentItemIndex + 1) % items.length;
      const nextItem = items[nextItemIndex];
      animateTextChange(displayText, nextItem, setDisplayText);
      setCurrentItemIndex(nextItemIndex);
    };

    const interval = setInterval(() => {
      transitionToNextItem();
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [currentItemIndex, items, displayText]);

  const animateTextChange = (from, to, updateText) => {
    const maxLength = Math.max(from.length, to.length);
    let currentText = from;
    let animationFrame = 0;

    const interval = setInterval(() => {
      let newText = "";
      for (let i = 0; i < maxLength; i++) {
        if (i < animationFrame) {
          newText += to[i] || ""; // Keep the final character if animationFrame exceeds length
        } else if (i < from.length) {
          newText += String.fromCharCode(Math.floor(Math.random() * 94) + 33); // Random ASCII characters for effect
        } else {
          newText += String.fromCharCode(Math.floor(Math.random() * 94) + 33); // Random ASCII characters
        }
      }

      animationFrame++;
      if (animationFrame > maxLength) {
        clearInterval(interval);
        updateText(to); // Finalize with the target text
      } else {
        updateText(newText);
      }
    }, 50); // Speed of the animation
  };

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
      <div className="flex flex-col items-center gap-4">
        {/* Card */}
        <div
          className="p-6 bg-white shadow-lg flex flex-col rounded-lg border border-zinc-200 text-center items-center min-w-[600px]"
          style={{ backdropFilter: "blur(5px)" }}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-200">
            <Image
              src="/me.svg"
              alt="Me"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-zinc-800">
            I{"'"}m Fulton Browne
          </h1>
          <div className="flex gap-2">
            <FaGithubAlt
              className="cursor-pointer"
              onClick={() => window.open("https://github.com/FultonBrowne")}
            />
            <FaTwitter
              className="cursor-pointer"
              onClick={() => window.open("https://twitter.com/BrowneFulton")}
            />
            <FaLinkedin
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/fulton-browne-925a20245/",
                )
              }
            />
            <FaRss
              className="cursor-pointer"
              onClick={() =>
                window.open("https://fultonsramblings.substack.com/")
              }
            />
          </div>
          <h1 className="text-lg text-zinc-800">{displayText}</h1>
        </div>
      </div>
    </main>
  );
}
