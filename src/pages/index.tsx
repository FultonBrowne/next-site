import React, { useRef } from "react"; // Import useRef
import Image from "next/image";
import {
  FaArrowDown,
  FaGithubAlt,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Kanit } from "next/font/google";

const kantit = Kanit({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  const nextPaneRef = useRef(null); // Create a ref for the next pane

  const scrollToNextPane = () => {
    // Scroll to the next pane using the ref
    window.scrollTo({
      top: nextPaneRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <main className={`${kantit.className}`}>
      <div
        className={`flex min-h-screen items-center p-4 md:justify-start md:p-24`}
      >
        <div className="w-full md:w-1/3">
          <div className="text-7xl md:text-9xl">
            Hello <br /> there,
          </div>
          <div className="mt-4 text-xl">I{"'"}m Fulton Browne</div>
          <div className="mt-4 flex gap-2 text-xl">
            <FaGithubAlt
              onClick={() => window.open("https://github.com/FultonBrowne")}
            />
            <FaTwitter
              onClick={() => window.open("https://twitter.com/BrowneFulton")}
            />
            <FaLinkedin
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/fulton-browne-925a20245/",
                )
              }
            />
          </div>
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowDown
            className="animate-bounce text-3xl"
            onClick={scrollToNextPane}
          />
        </div>
      </div>
      <div
        ref={nextPaneRef}
        className={`flex min-h-screen w-full content-center justify-center p-4 md:p-24`}
      >
        <div className="flex flex-col content-center justify-center gap-4 md:gap-16">
          <div className="w-full justify-center text-5xl md:text-7xl">
            I{"'"}m passionate <br />
            about...{" "}
          </div>
          <div className="text-lg md:text-lg">
            All things tech - from software development to hardware hacking.{" "}
            <br />
            Particularly I work enjoy systems programming and low-level <br />
            development, AI development, and web development. I{"'"}ve worked on{" "}
            <br />
            several open source projects in those spaces and between that and my
            <br />
            professional work I{"'"}ve gained a lot of experience in variety of
            <br />
            areas and technolgies. Specifically:
            <ul className="list-inside list-disc pt-8">
              <li>Systems Programming: with C, Rust, Go, and Ocaml</li>
              <li>AI: with Python, pytorch, LlamaCPP and the HF framework</li>
              <li>
                Web Dev: in countless frameworks including Django, <br />
                Axum, Spring, and flask
              </li>
              <li>A bit of frontend: with NextJS, remix and react</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white font-sans text-black">
        not much of a designer tho
      </div>
    </main>
  );
}
