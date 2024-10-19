/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap/dist/gsap";

function Hero() {
  return (
    <div className="flex flex-col w-11/12 sm:w-full  dark:text-day-text  max-w-[95%] ml-auto mr-auto mt-[28%] sm:mt-[10%] ">
      <div className="w-full dark:text-day-text">
        <h2 className="text-3xl sm:text-6xl text-center uppercase text-night-text dark:text-day-text font-bold text-pretty ">
          Hello, I'M Shahid Shaikh
        </h2>
        <p className="text-xs text-night-text dark:text-day-text  sm:text-sm sm:w-[50%] w-[95%]  leading-snug text-center  mr-auto ml-auto font-extralight  tracking-wide text-pretty mt-[8%]  sm:mt-[2%]  ">
          Passionate Full-Stack and Android Developer, creating seamless web and
          mobile solutions that elevate user experience. I combine technical
          expertise with creative problem-solving to build impactful products
          that stand out.
        </p>
      </div>
      <div className="flex justify-center gap-8 mt-[15%] sm:mt-[5%]">
        <Link
          to="project"
          spy={true}
          smooth={true}
          offset={200}
          duration={2000}
          className="text-white cursor-pointer border-blue-600 border-2 px-4 py-2 sm:px-10 font-medium text-xl rounded bg-blue-600 hover:bg-white hover:text-black hover:-translate-y-1 transition shadow-sm hover:shadow-md "
        >
          Project
        </Link>
        <a
          href="mailto:shaikhshahid2956@gamil.com"
          target="_blank"
          className=" border-2  px-4 py-2  text-xl rounded bg-white font-bold sm:px-10 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition"
        >
          Say Hi..
        </a>
      </div>
    </div>
  );
}

export default Hero;
