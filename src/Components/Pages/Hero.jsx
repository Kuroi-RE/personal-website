const Hero = ({ LinkToGo, ButtonName }) => {
  return (
    <section className="w-screen h-screen">
      <div className="flex flex-row">
        <div className="absolute w-[70%] bg-gray-400 h-screen">
          <nav className="flex flex-row justify-between">
            <div className="flex ml-4 mt-4">
              <h1>SRAMADHAN</h1>
            </div>
            <div className="flex flex-row gap-4 mr-4 mt-4 bebas-neue-regular">
              <a
                className="hover:text-blue-500 hover:scale-125 transform-gpu transition-all"
                href=""
              >
                About
              </a>
              <a
                className="hover:text-blue-500 hover:scale-125 transform-gpu transition-transform"
                href=""
              >
                Knowledge
              </a>
              <a
                className="hover:text-blue-500 hover:scale-125 transform-gpu transition-transform"
                href=""
              >
                Project
              </a>
            </div>
          </nav>
        </div>
        <div className="absolute w-[30%] h-screen bg-red-400 right-0">
          <img src="/images/bg.jpg" alt="bg" className="w-full h-full " />
        </div>
      </div>

      <div className="flex flex-row justify-center items-center h-full">
        <div className="z-10 flex flex-col gap-6">
          <span className="fira-sans-reguler text-sm text-blue-600 uppercase">
            Programmer | Photography
          </span>
          <h1 className="fira-sans-bold text-4xl">Hi, i am Ramadhan!</h1>
          <div className="flex flex-col gap-4">
            <p className="max-w-lg fira-sans-reguler text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              natus quaerat? Illum veniam quis suscipit quod, ratione dicta
              natus adipisci.
            </p>
            <div className="flex gap-3">
              <a className="btn btn-wide " href={LinkToGo}>
                {ButtonName}
              </a>
              <a className="btn " href={"#"}>
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="z-10">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="w-[400px] h-full rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
