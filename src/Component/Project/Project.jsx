import { PiArrowBendRightDownFill } from "react-icons/pi";
import { PiArrowBendLeftDownFill } from "react-icons/pi";
import Cards from "./Cards";
import videop from "../../assets/project1.mp4";
import videop2 from "../../assets/project2.mp4";
import videop3 from "../../assets/project3.mp4";

function Project() {
  const ProjectData = [
    {
      img: videop,
      name: "URL SHOTHER",
      Glink: "https://github.com/shahid056/URL_SHORTNER",
      desc: "Designed and developed a URL shortener application, implementing custom aliasing and user-friendly interface using React.js and Tailwind CSS.• Utilized Node.js and MongoDB for backend processing, achieving efficient URL mapping and storage.  • Enhanced security by integrating validation and sanitation mechanisms to prevent malicious URL entries",
    },
    {
      img: videop2,
      name: "Foodi",
      Glink: "https://github.com/shahid056/Foodi",
      desc: "Foodi is a sleek ReactJS-based app that helps you find the perfect recipe in seconds. With real-time data from a powerful recipe API, you can search for meals by ingredients or cuisine, get personalized recommendations, and plan your weekly meals. Enjoy a smooth and engaging experience as you explore a wide variety of recipes, all tailored to your taste.",
    },
    {
      img: videop3,
      name: "Netflix Clone",
      Glink: "https://github.com/shahid056/NetFlixClone",
      desc: "Developed a Netflix-like UI with features for browsing and playing movies, using React.js and the MovieDB API. Integrated Firebase for authentication and database management, handling over 100,000 active users.",
    },
  ];

  return (
    <div id="project">
      <div className="flex justify-center">
        <PiArrowBendLeftDownFill className="text-night-text dark:text-day-text mt-[15%] text-2xl  sm:mt-[14%]" />
        <h3 className="text-2xl mt-[15%] text-night-text  dark:text-day-text  font-bold ">
          Projects
        </h3>
        <PiArrowBendRightDownFill className="text-night-text dark:text-day-text mt-[15%] text-2xl  sm:mt-[14%]" />
      </div>
      <div className="mt-20 grid lg:grid-cols-3 p-4 gap-4">
        {ProjectData.map((data, index) => {
          return (
            <Cards
              key={index}
              img={data.img}
              name={data.name}
              desc={data.desc}
              Glink={data.Glink}
            />
          );
        })}
      </div>
      <div className="flex justify-center p-5">
        <div className="flex w-fit my-2 items-center border-2  py-1 px-3 rounded gap-2 border-yellow-300 bg-yellow-50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
          <div className="w-4 h-4 mr-auto bg-yellow-500  border-yellow-600 rounded-full "></div>
          <a
            href="https://github.com/shahid056?tab=repositories"
            target="blank"
            className="flex gap-2 items-center text-base text-yellow-800"
          >
            <span>#More</span>
          </a>
          <span className="text-yellow-800 font-bold group-hover:translate-x-2 transition">
            {"->"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;
