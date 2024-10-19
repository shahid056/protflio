import { PiArrowBendRightDownFill } from "react-icons/pi";
import { PiArrowBendLeftDownFill } from "react-icons/pi";
import Card from "./Card";
import Marquee from "react-fast-marquee";

function Technology() {
  const AllTechnology = [
    {
      id: "1",
      img: "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000",
      name: "Rect Js",
    },

    {
      id: "3",
      img: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
      name: "MongoDB",
    },
    {
      id: "3",
      img: "https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000",
      name: "Express",
    },
    {
      id: "2",
      img: "https://img.icons8.com/?size=100&id=45057&format=png&color=000000",
      name: "Api",
    },
    {
      id: "3",
      img: "https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000",
      name: "PostMan",
    },
    {
      id: "3",
      img: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
      name: "tailwind css",
    },
    {
      id: "2",
      img: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
      name: "Node JS",
    },
    {
      id: "3",
      img: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
      name: "MongoDB",
    },
    {
      id: "3",
      img: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
      name: "Java",
    },
    {
      id: "2",
      img: "https://img.icons8.com/?size=100&id=Oz14KBnT7lnn&format=png&color=000000",
      name: "API",
    },
    {
      id: "3",
      img: "https://img.icons8.com/?size=100&id=Lk9yC4HS5r3p&format=png&color=000000",
      name: "SQL",
    },
    {
      id: "3",
      img: "https://img.icons8.com/?size=100&id=laVIsJnTtYoj&format=png&color=000000",
      name: "JavaScript",
    },
    {
      id: "2",
      img: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
      name: "Bootstrap",
    },

    {
      id: "2",
      img: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
      name: "Node JS",
    },

    {
      id: "3",
      img: "https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000",
      name: "Express",
    },
    {
      id: "3",
      img: "  https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
      name: "Figma",
    },
  ]; 

  return (
    <div>
      <div className="flex w-full justify-center dark:text-day-text gap-4">
        <PiArrowBendLeftDownFill className="text-night-text dark:text-day-text mt-[15%] text-2xl  sm:mt-[14%]" />
        <h1 className="text-night-text dark:text-day-text font-bold  mt-[15%]  text-2xl  sm:text-4xl  sm:mt-[14%]">
          Skils
        </h1>
        <PiArrowBendRightDownFill className="text-night-text dark:text-day-text mt-[15%] text-2xl  sm:mt-[14%]" />
      </div>
      <div className="flex w-full mt-10 sm:mt-20 justify-center  flex-wrap gap-1 flex-row  mask-gradient  ">
        <Marquee autoFill pauseOnClick pauseOnHover direction="right">
          {AllTechnology.map((data, index) => (
            <Card key={index} img={data.img} name={data.name} />
          ))}
        </Marquee>
        <Marquee autoFill pauseOnClick pauseOnHover direction="left">
          {AllTechnology.map((data, index) => (
            <Card key={index} img={data.img} name={data.name} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Technology;
