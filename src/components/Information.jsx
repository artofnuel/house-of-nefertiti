import React from "react";
import male from "../assets/male.png";
import female from "../assets/female.png";
import Shake from "react-reveal/Shake";
import Fade from "react-reveal/Fade";

const Information = () => {
  return (
    <main
      id="about"
      className="md:h-[100vh] relative w-full bg-primary-bg py-5"
    >
      {/* <div className="absolute w-full h-full inset-0 bg-black/10 z-[1]"></div> */}
      <div className="max-w-[90%] mx-auto h-full w-full py-4 flex flex-col md:flex-row justify-between items-center gap-5 relative z-[10]">
        <Fade left>
          <img
            src={male}
            alt="male-pharoah"
            className="p-5 bg-white/75 rounded-xl border-t-8 border-t-secondary-bg"
          />
        </Fade>
        <div className="h-full flex flex-col gap-5 justify-center items-center text-white">
          <h2 className="uppercase text-3xl md:text-5xl font-bold">
            What is Nefertiti 3333?
          </h2>
          <p className="font-semibold md:text-xl">
            We are here to change the BSC Space with a Bullish name.
            <br /> A real Long term project with hard working Dev and real
            utilities:
            <ul>
              <li>🔷 Staking </li>
              <li>🔷 Nefertiti Swap </li>
              <li>🔷 NFT </li>
              <li>🔷 P2E Game (War of Empires)</li>
            </ul>
          </p>
          <Shake duration={10000}>
            <a
              href="https://t.me/House_of_Nefertiti"
              className="p-3 px-5 border-2 border-white rounded-full hover:bg-white hover:text-primary-bg drop-shadow-md"
            >
              Connect on Telegram
            </a>
          </Shake>
        </div>
        <Fade right>
          <img
            src={female}
            alt="female-pharoah"
            className="p-5 bg-white/75 rounded-xl border-b-8 border-b-secondary-bg"
          />
        </Fade>
      </div>
    </main>
  );
};

export default Information;
