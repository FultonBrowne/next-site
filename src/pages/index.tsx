import React, { useState, useEffect } from "react";
import { Inter, Darker_Grotesque } from "next/font/google";
import Image from "next/image";
import svgFile from "../comps/me.svg";
import {
  FaGithubAlt,
  FaLinkedin,
  FaRss,
  FaTwitter,
  FaUnsplash,
} from "react-icons/fa6";
import { MeIcon } from "@/comps/me";

const inter = Inter({
  subsets: ["latin"],
});

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
});

export default function Home(): JSX.Element {
  const [displayText, setDisplayText] = useState<string>("Hiker🚶‍♂️");
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

  useEffect(() => {
    const items: string[] = [
      "Hiker🚶‍♂️",
      "Software Engineer 👨‍💻",
      "Photographer 📸",
      "Designer 🎨",
      "Student 📓",
      "Nerd 🤓",
    ];
    const transitionToNextItem = (): void => {
      const nextItemIndex = (currentItemIndex + 1) % items.length;
      const nextItem = items[nextItemIndex];
      animateTextChange(displayText, nextItem, setDisplayText);
      setCurrentItemIndex(nextItemIndex);
    };

    const interval = setInterval(() => {
      transitionToNextItem();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentItemIndex, displayText]);

  const animateTextChange = (
    from: string,
    to: string,
    updateText: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    const maxLength = Math.max(from.length, to.length);
    let currentText = from;
    let animationFrame = 0;

    // Define the characters to use for the random effect
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";

    const interval = setInterval(() => {
      let newText = "";
      for (let i = 0; i < maxLength; i++) {
        if (i < animationFrame) {
          newText += to[i] || ""; // Keep the final character if animationFrame exceeds length
        } else {
          // Get a random character from the chars string
          newText += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      animationFrame++;
      if (animationFrame > maxLength) {
        clearInterval(interval);
        updateText(to); // Finalize with the target text
      } else {
        updateText(newText);
      }
    }, 50);
  };

  return (
    <main
      className={`${inter.className} w-full min-h-screen flex items-center justify-center relative`}
    >
      {/* Foreground Content */}
      <div className="flex flex-col items-center gap-4">
        {/* Card */}
        <div
          className="p-6 bg-white shadow-lg flex flex-col rounded-lg border accent-border text-center items-center md:min-w-[600px] m-4"
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: `rgba(var(--background-start), 0.8)`,
          }}
        >
          <div
            className="w-32 h-32 rounded-full shadow-lg overflow-hidden border-2 bf-1 text-[rgb(var(--accent-rgb))] mb-4"
            style={{
              backgroundColor: `rgba(var(--background-start), 0.8)`,
              color: `rgb(var(--accent-rgb))`, // This will control the SVG color
            }}
          >
            <MeIcon />
          </div>
          <h1 className="text-2xl font-bold">I{"'"}m Fulton Browne</h1>
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
                  "https://www.linkedin.com/in/fulton-browne-925a20245/"
                )
              }
            />
            <FaRss
              className="cursor-pointer"
              onClick={() =>
                window.open("https://fultonsramblings.substack.com/")
              }
            />
            <FaUnsplash
              className="cursor-pointer"
              onClick={() => window.open("https://unsplash.com/@fultonbrowne")}
            />
          </div>
          <h1
            className="text-lg"
            style={{ color: "rgb(var(--foreground-rgb))" }}
          >
            {displayText}
          </h1>
          <div className="md:max-w-[400px]">
            My goal is to build a better world using creativity and code. My
            interests and skills are mostly low level, AI, full-stack web, and
            computer architecture. My past and current work includes{" "}
            <a href="https://shurburt.com" className="font-bold">
              Running all things tech at Shurburt
            </a>
            ,{" "}
            <a href="https://bankerbounty.com" className="font-bold">
              Building backend at BankerBounty
            </a>
            ,{" "}
            <a href="https://healthindustries.com/" className="font-bold">
              Cofounding Health Industries
            </a>
            ,{" "}
            <a
              href="https://github.com/FultonBrowne/LiDAR-Depth-Map-Capture-for-iOS"
              className="font-bold"
            >
              Building LIDAR systems for bike safety
            </a>
            , and{" "}
            <a
              href="https://github.com/FultonBrowne/aiserv"
              className="font-bold"
            >
              Building an ai server in rust
            </a>
            . I{"'"}ve worked on dozens of other projects that are all on my{" "}
            <a href="https://github.com/FultonBrowne/" className="font-bold">
              Github
            </a>
            . If you like what you see you can reach me{" "}
            <a href="mailto:fultonbrowne@pm.me" className="font-bold">
              over email
            </a>
            .
          </div>
        </div>
      </div>
    </main>
  );
}
