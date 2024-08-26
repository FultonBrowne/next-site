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
    <main className={`${openSans.className}`}>
      <div
        className={`flex min-h-screen items-center p-4 justify-center md:justify-start md:p-24`}
      >
        <div className="w-full text-center lg:text-start lg:w-1/3">
          <div className={`text-7xl md:text-9xl ${kantit.className}`}>
            Hello <br className="hidden lg:block" /> there,
          </div>
          <div className="mt-4 text-xs md:text-xl">
            I{"'"}m <span className="title italic">Fulton Browne,</span>
            <br /> A student and software engineer looking to make the world a
            better place
          </div>
          <div className="mt-4 flex gap-2  text-xl">
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
        </div>
      </div>
    </main>
  );
}
