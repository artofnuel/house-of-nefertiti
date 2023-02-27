import React from "react";
import whitepaper from "../assets/whitepaper.png";
import Slide from "react-reveal/Slide";
import Shake from "react-reveal/Shake";

const Community = () => {
  return (
    <main
      id="community"
      className="md:h-[100vh] relative w-full bg-primary-bg py-5"
    >
      <div className="mx-auto max-w-[750px] h-full flex flex-col md:flex-row justify-center items-center p-3 gap-5">
        <Slide left>
          <img src={whitepaper} alt="whitepaper" className="w-[300px]" />
        </Slide>
        <Slide right>
          <div className="flex flex-col justify-center items-center gap-5">
            <h3 className="text-secondary-bg text-3xl font-bold">
              Looking for Documentation?
            </h3>
            <p className="text-secondary-bg text-lg text-center md:text-left">
              In this whitepaper, you can learn more about Nefertiti 3333 and
              follow us on our journey to change the BSC Space!!
            </p>
            <Shake duration={10000}>
              <a
                className="mt-5 p-3 px-12 bg-white text-[#a47a28] rounded-full drop-shadow-md text-sm md:text-md font-semibold"
                href="#"
              >
                WHITEPAPER
              </a>
            </Shake>
          </div>
        </Slide>
      </div>
    </main>
  );
};

export default Community;
