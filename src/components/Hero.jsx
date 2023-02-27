import React from "react";
import logo from "../assets/nefertiti.png";
import Fade from "react-reveal/Fade";
import { MdDoubleArrow } from "react-icons/md";

const Hero = () => {
  return (
    <Fade top cascade>
      <main className="md:h-[100vh] h-[600px] relative w-full">
        <div className="hero-content w-full h-full p-2 flex flex-col justify-center items-center gap-5">
          <img src={logo} alt="logo" className="w-[200px]" />
          <h1 className="text-2xl md:text-4xl text-secondary-bg font-bold drop-shadow-xl">
            Not an Ordinary Defi Token
          </h1>
          <p className="text-lg text-secondary-bg font-semibold">
            Changing the BSC Space
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="flex items-center p-1 md:p-2 pl-3 md:pl-5 gap-5 bg-white font-semibold text-primary-bg rounded-full"
            >
              Buy Now
              <span className="bg-primary-bg text-white p-1 md:p-2 ml-5 md:ml-5 rounded-full">
                <MdDoubleArrow />
              </span>
            </a>
            <a
              href="#"
              className="flex items-center p-1 md:p-2 pl-3 md:pl-5 gap-5 bg-white font-semibold text-primary-bg rounded-full"
            >
              Chart
              <span className="bg-primary-bg text-white p-1 md:p-2 ml-5 md:ml-5 rounded-full">
                <MdDoubleArrow />
              </span>
            </a>
          </div>
        </div>
      </main>
    </Fade>
  );
};

export default Hero;
