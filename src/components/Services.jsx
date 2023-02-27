import React from "react";
import goddess from "../assets/goddess.jpg";
import logo from "../assets/nefertiti.png";
import Slide from "react-reveal/Slide";

const Services = () => {
  return (
    <main id="why" className="md:h-[100vh] relative w-full bg-primary-bg py-5">
      <div className="absolute w-full h-full inset-0 bg-black/10 z-[1]"></div>
      <div className="max-w-[90%] h-full mx-auto flex flex-col-reverse md:flex-row justify-center items-center relative z-[10]">
        {/* Text */}
        <Slide top>
          <div className="w-full flex flex-col justify-center items-start gap-5">
            <div className="flex flex-col gap-2 text-secondary-bg">
              <h3 className="text-3xl font-bold tracking-wide">Our Vision</h3>
              <p className="text-lg">
                We have designed and built NEFERTITI 3333 with a vision <br />
                to bring a successful platform were a user can freely use it
                <br /> anytime and that is directly be in their wallet and also
                their
                <br /> medium of exchange that is based on Binance Smart Chain
                Network.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-secondary-bg">
              <p className="text-3xl font-bold tracking-wide">
                Our Partnership
              </p>
              <p className="text-lg">
                NEFERTITI 3333 Is ready to expand to any kind of partnerships
                <br />
                needed at any given moment for us to achieve a successtul
                <br /> project ,we will always sort and make movements and
                <br />
                applications for lots of promotions and strategic partnerships,
                <br />
                including listing on tier 1 and 2 exchanges ,as a tribute to
                <br />
                investors, with guranteed assurance that we continue to grow
                <br /> and expand based on the growing demand of the blockchain.
              </p>
            </div>
          </div>
        </Slide>
        {/* image */}
        <Slide right>
          <div className="w-full flex justify-center items-center drop-shadow-xl relative">
            <img src={goddess} alt="goddess" className="w-full rounded-md" />
            <img
              src={logo}
              alt="logo"
              className="w-[130px] absolute top-[1%]"
            />
          </div>
        </Slide>
      </div>
    </main>
  );
};

export default Services;
