import img from "../../assets/9434619.jpg";
import { PiArrowBendRightDownFill } from "react-icons/pi";
import { PiArrowBendLeftDownFill } from "react-icons/pi";

function About() {
  return (
    <div className="mt-[15%]">
      <div className="flex   justify-center items-center  flex-col p-4">
        <div className="flex flex-row">
          <PiArrowBendLeftDownFill className="text-night-text dark:text-day-text mt-[15%] text-2xl  sm:mt-[14%]" />
          <h1 className="text-night-text text-2xl font-bold mt-[15%]  lg:text-5xl dark:text-day-text">
            About
          </h1>
          <PiArrowBendRightDownFill className="text-night-text dark:text-day-text mt-[15%] text-2xl  sm:mt-[14%]" />
        </div>

        <div className=" mt-16">
          <h3 className="text-night-text p-5 font-bold text-xl lg:text-4xl dark:text-day-text">
            Get to Know me!
          </h3>
          <div className="flex">
            <p className="text-gray-400 lg:text-2xl p-5 flex-1  dark:text-gray-600 mt-2 tracking-tight text-justify ">
              I am a recent graduate with a strong passion for technology and
              <strong> software development</strong>. With a background in
              <strong> full-stack</strong> and
              <strong> Android development</strong>, I have honed my skills in
              creating dynamic and responsive web applications. My experience
              includes working with modern tools and frameworks like ReactJS and
              Tailwind CSS, allowing me to build clean, efficient, and
              user-friendly interfaces. I am eager to apply my knowledge and
              skills to real-world projects, continuously learning and growing
              in the field of software developmen
            </p>
            <div className="hidden overflow-hidden w-full  p-5 lg:flex flex-1  content-center justify-center  items-center mr-auto ml-auto text-night-text">
              <div className="flex overflow-hidden w-60  cursor-pointer h-60 justify-center items-center bg-green-900 border-2 border-red-900 rounded-full animate-[float_3s_ease-in-out_infinite]">
                <img src={img} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
