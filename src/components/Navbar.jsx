import React, { useState } from "react";
import logo from "../assets/nefertiti.png";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="bg-[#936f24] text-white w-full fixed z-20 drop-shadow-md">
        <nav className="max-w-[90%] mx-auto py-5 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Nefertiti-logo" className="w-6 md:w-10" />
            <p className="uppercase text-sm">Nefertiti 3333</p>
          </a>
          <ul className="lg:flex gap-5 hidden">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#why">Why</a>
            </li>
            <li>
              <a href="#contract">Contract</a>
            </li>
            <li>
              <a href="#tokenomics">Token Sale</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#community">Community</a>
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="block justify-center items-center md:hidden"
          >
            {!nav ? (
              <BiMenuAltRight size={20} className="m-1" />
            ) : (
              <IoIosClose size={20} className="m-1" />
            )}
          </div>
          <div className={nav ? "fixed top-20 left-0 right-0" : "hidden"}>
            <ul className="flex md:hidden w-[90%] gap-2 mx-auto bg-white text-primary-bg p-2 flex-col justify-center items-center rounded-md">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#why">Why</a>
              </li>
              <li>
                <a href="#contract">Contract</a>
              </li>
              <li>
                <a href="#tokenomics">Token Sale</a>
              </li>
              <li>
                <a href="#roadmap">Roadmap</a>
              </li>
              <li>
                <a href="#community">Community</a>
              </li>
              <div className="flex gap-5 uppercase md:hidden">
                <a
                  className="p-1 px-3 md:p-3 md:px-6 bg-white text-[#a47a28] rounded-full drop-shadow-md text-sm md:text-md font-semibold"
                  href="#"
                >
                  Presale
                </a>
                <a
                  className="p-1 px-3 md:p-3 md:px-6 bg-white text-[#a47a28] rounded-full drop-shadow-md text-sm md:text-md font-semibold"
                  href="#"
                >
                  WhitePaper
                </a>
              </div>
            </ul>
          </div>
          <div className="md:flex gap-5 uppercase hidden">
            <a
              className="p-1 px-3 md:p-3 md:px-6 bg-white text-[#a47a28] rounded-full drop-shadow-md text-sm md:text-md font-semibold"
              href="#"
            >
              Presale
            </a>
            <a
              className="p-1 px-3 md:p-3 md:px-6 bg-white text-[#a47a28] rounded-full drop-shadow-md text-sm md:text-md font-semibold"
              href="#"
            >
              WhitePaper
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
