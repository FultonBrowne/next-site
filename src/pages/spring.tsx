import React, { useRef } from "react"; // Import useRef
import Image from "next/image";
import {
  FaArrowDown,
  FaGithubAlt,
  FaLinkedin,
  FaRss,
  FaTwitter,
} from "react-icons/fa";
import { Kanit, Open_Sans } from "next/font/google";
import { FaBlog } from "react-icons/fa6";

const kantit = Kanit({
  subsets: ["latin"],
  weight: "700",
});
const openSans = Open_Sans({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className={`${openSans.className} bg-[#44AEA2]`}>
      <div
        className={`flex min-h-screen items-center p-4 justify-center md:p-24`}
      >
        <div className="w-full text-center lg:text-start lg:w-1/2">
          <div className={`text-7xl md:text-9xl ${kantit.className}`}>
            Ring by <br className="hidden lg:block" />{" "}
            <span className="italic animate-fadeIn">Spring</span>
          </div>
          <div className="mt-4 text-xs md:text-xl">
            The dating app for{" "}
            <a
              href="https://samford.edu"
              className="underline hover:italic text-[#B2FFF6]"
            >
              Samford
            </a>{" "}
            students. Coming soon to iOS.
          </div>
          <div className="mt-4 flex justify-center lg:justify-start">
            <button
              onClick={() => {
                window.location.href =
                  "https://mailchi.mp/10f1bed03294/spring-site";
              }}
              className=" bg-[#B2FFF6] text-[#44AEA2] p-2 rounded-lg"
            >
              Get updates
            </button>
            <button
              className="ml-4 bg-[#B2FFF6] text-[#44AEA2] p-2 rounded-lg"
              onClick={() => {
                window.location.href =
                  "https://efficacious-fiber-f3e.notion.site/Ring-By-Spring-the-app-65e872ad38904c7bbb1c7fd9bb3022ad?pvs=4";
              }}
            >
              Follow along
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
