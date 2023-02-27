import React from "react";
import logo from "../assets/nefertiti.png";
import queen from "../assets/queen.png";
import Slide from "react-reveal/Slide";

const Tokenomics = () => {
  return (
    <main
      id="tokenomics"
      className="md:h-[100vh] relative w-full bg-primary-bg py-5"
    >
      <div className="max-w-[90%] h-full mx-auto flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <Slide left>
            <div className="flex flex-col justify-center items-center p-4 bg-white gap-5 text-primary-bg rounded-md drop-shadow-xl">
              <img src={logo} alt="logo" className="w-[100px]" />
              <h3 className="text-xl font-bold tracking-wide">Nefertiti</h3>
              <p className="text-lg">- Taxes -</p>
              <div className="flex justify-center items-center gap-5">
                <ul className="">
                  Buy 6%
                  <li>2% LP</li>
                  <li>3% Marketing</li>
                  <li>1% Development</li>
                </ul>
                <ul className="">
                  Sell 6%
                  <li>2% LP</li>
                  <li>3% Marketing</li>
                  <li>1% Development</li>
                </ul>
              </div>
              <div>
                <p className="text-center">Max Wallet 3%</p>
                <p className="text-center">Sell 1%</p>
                <p className="text-center">Buy 1%</p>
              </div>
            </div>
          </Slide>
          <Slide right>
            <img src={queen} alt="queen" className="w-[300px] drop-shadow-xl" />
          </Slide>
        </div>
      </div>
    </main>
  );
};

export default Tokenomics;
