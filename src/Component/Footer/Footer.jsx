function Footer() {
  return (
    <div className=" flex  bg-black flex-col justify-between p-5">
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:p-5">
        <div className="text-xl lg:flex  lg:flex-1 lg:justify-center lg:items-center lg:flex-col  text-night-text p-2">
          <div>
            <h3>Social Media</h3>
          </div>

          <div className="w-20 p-2 flex  cursor-pointer">
            <a href="https://github.com/shahid056" className="w-16 ">
              <img
                src="https://img.icons8.com/?size=100&id=118557&format=png&color=000000"
                alt="github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shahid-shaikh-432498255/"
              className="w-16"
            >
              <img
                src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                alt="linkdin"
              />
            </a>
          </div>
        </div>
        <div className="text-2xl p-2 flex-1 ">
          <h3 className=" text-night-text"> Shahid Shaikh</h3>
          <p className=" text-night-text text-sm">
            Passionate Full-Stack and Android Developer crafting seamless web
            and mobile solutions. I blend technical skill with creativity to
            deliver standout user experiences.
          </p>
        </div>
      </div>
      <div className="pt-2">
        <h4 className="text-center  text-night-text">
          Made with 😊 ❤️ by Shahid Shaikh.
        </h4>
      </div>
    </div>
  );
}

export default Footer;
