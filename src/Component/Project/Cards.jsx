/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import { useEffect, useRef } from "react";

function Cards({ img, name, desc, Glink }) {
  const videoRef = useRef(null);
  useEffect(() => {
    // Automatically play the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle any errors if the autoplay policy blocks play
        console.error("Autoplay error: ", error);
      });
    }
  }, []);

  return (
    <div className=" grid w-1/11  mr-auto ml-auto overflow-hidden  gap-4 place-items-center  border-2 border-yellow-300  bg-dark dark:bg-white mt-5 mb-1 rounded shadow-md cursor-pointer   hover:-translate-y-1  transition ">
      <div className=" grid w-full  place-items-center relative   flex-col justify-center ">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className=" w-[30vm]  p-2  items-center object-cover"
          src={img}
          alt="video"
        />
        <div className="w-full flex flex-col  justify-start  dark:bg-white bg-black rounded p-2 leading-snug">
          <h3 className="text-start text-night-text dark:text-day-text text-2xl">
            {name}
          </h3>
          <span className="text-night-text dark:text-day-text items-start">
            {desc}
          </span>
          <div className="flex w-fit my-2 items-center border-2  py-1 px-3 rounded gap-2 border-yellow-300 bg-yellow-50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="w-2 h-2 mr-auto bg-yellow-500  border-yellow-600 rounded-full "></div>
            <a
              href={Glink}
              target="blank"
              className="flex gap-2 items-center text-base text-yellow-800"
            >
              <span>#Github</span>
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/?size=100&id=20675&format=png&color=000000"
                alt="github"
              />
            </a>
            <span className="text-yellow-800 font-bold group-hover:translate-x-2 transition">
              {"->"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
