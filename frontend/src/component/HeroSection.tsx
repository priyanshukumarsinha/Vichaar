import React from "react";
import Heading from "./ui/Heading";

const HeroSection = () => {
  return (
    <section className="w-full  h-full flex justify-between items-center relative">
      <div className="w-[750px] sm:w-screen min-w-[65%]  h-full ml-5 sm:mx-14 md:ml-18 lg:ml-26 flex flex-col justify-center">
        <Heading>
          <span className=" tracking-tight text-[80px] sm:text-[90px] md:text-[100px] lg:text-[110px] leading-[80px] lg:leading-[100px] opacity-85 ">
            Human <br></br> stories & ideas
          </span>
        </Heading>
        <p className="text-md lg:text-xl font-medium py-10">
          A place to read, write, and deepen your understanding
        </p>
        <div>
          <button className="bg-green-600 opacity-90 hover:opacity-100  lg:bg-black text-white font-medium px-7 py-2 text-md lg:text-xl rounded-full">
            Start Reading
          </button>
        </div>
      </div>
      <img
        className="h-[600px] -ml-26  -mb-16 -mt-8 hidden lg:block"
        src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
        alt=""
      />
    </section>
  );
};

export default HeroSection;
