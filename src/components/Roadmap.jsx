import React from "react";
import Slide from "react-reveal/Slide";

const Roadmap = () => {
  return (
    <main id="roadmap" className="relative w-full bg-primary-bg py-5">
      <div className="absolute w-full h-full inset-0 bg-black/10 z-[1]"></div>
      <h1 className="text-center text-2xl font-bold text-white pb-5">
        The Road Map
      </h1>
      <div className="mx-auto max-w-[750px] p-6 timeline">
        {/* Phase 1 */}
        <div className="timeline__componet">
          <div className="timeline__date timeline__date--right uppercase pr-4 text-white text-xl">
            Phase 1
          </div>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <Slide right>
          <div className="timeline__component flex flex-col gap-2 p-6 bg-white/20 rounded-xl">
            <ul className="text-white flex flex-col gap-2">
              <li className="list-disc">Deploy the contract</li>
              <li className="list-disc">Launch on PCS </li>
              <li className="list-disc">Working on community</li>
              <li className="list-disc">Establish Socials</li>
              <li className="list-disc">Website Launch</li>
              <li className="list-disc">Whitepaper released</li>
              <li className="list-disc">Phase 1 Marketing</li>
              <li className="list-disc">NefertitiSwap</li>
            </ul>
          </div>
        </Slide>
        {/* Phase 2 */}
        <Slide left>
          <div className="timeline__component flex flex-col gap-2 p-6 bg-white/20 rounded-xl">
            <ul className="text-white">
              <li>Building a strong community</li>
              <li>Phase 2 Marketing</li>
              <li>Raising awareness using Ads</li>
              <li>Working with influencers</li>
              <li>NFT</li>
            </ul>
          </div>
        </Slide>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__componet">
          <div className="timeline__date uppercase text-white text-xl pl-4">
            Phase 2
          </div>
        </div>
        {/* Phase 3 */}
        <div className="timeline__componet">
          <div className="timeline__date uppercase text-right text-white pr-4 text-xl">
            Phase 3
          </div>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <Slide right>
          <div className="timeline__component flex flex-col gap-2 p-6 bg-white/20 rounded-xl">
            <ul className="text-white">
              <li>Listings</li>
              <li>CoinMarketCap</li>
              <li>Coingecko</li>
              <li>BitMart</li>
              <li>Hotbit</li>
              <li>ProBit</li>
              <li>Phase 3 marketing</li>
              <li>P2E Game (War of Empires)</li>
            </ul>
          </div>
        </Slide>
      </div>
    </main>
  );
};

export default Roadmap;
