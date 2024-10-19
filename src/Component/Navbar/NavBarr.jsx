/* eslint-disable react/prop-types */
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import resuem from "../../assets/Resume.pdf";

function NavBarr({ toggleDarkMode, darkMode }) {
  return (
    <div className="flex sticky  top-5 z-10  justify-between px-[10%] mt-10">
      <div>
        <a
          href="#"
          className="text-night-text dark:text-day-text py-1 text-2xl"
        >
          Shahid
          <span className="animate-ping text-night-text dark:text-day-text">
            _
          </span>
        </a>
      </div>
      <div className="flex justify-between gap-5 sm:gap-10 ">
        <h1 className="text-white py-1  text-base " onClick={toggleDarkMode}>
          <div className="py-1">
            {darkMode ? (
              <MdOutlineWbSunny className="text-black sm:text-3xl text-xl cursor-pointer" />
            ) : (
              <IoMoonOutline className="text-white sm:text-3xl text-xl cursor-pointer" />
            )}
          </div>
        </h1>
        <div className="flex items-center border-2  py-1 px-3 rounded gap-2 border-yellow-300 bg-yellow-50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
          <div className="w-2 h-2 mr-auto bg-yellow-500  border-yellow-600 rounded-full "></div>
          <a
            href={resuem}
            download="Resume.pdf"
            className=" text-base text-yellow-800"
          >
            #Resume
          </a>
          <span className="text-yellow-800 font-bold group-hover:translate-x-2 transition">
            {"->"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBarr;
