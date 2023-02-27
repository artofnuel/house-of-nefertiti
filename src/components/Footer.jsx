import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-[#936E24] relative py-5">
      <h1 className="text-3xl text-secondary-bg font-bold">Connect With Us</h1>
      <p className="text-center text-secondary-bg text-lg">
        One of our biggest priorites is to create a community driven token.
        <br />
        Feel free to follow us on Telegram and our other social media
        <br />
        to stay up-to-date and give us feedback for the future.
      </p>
      <div className="text-secondary-bg flex gap-5 py-5">
        <a href="#">
          <FaTelegram size={30} />
        </a>
        <a href="#">
          <FaTwitter size={30} />
        </a>
      </div>
      <p className="text-white">Copyright &#169; 2023. NEFERTITI 3333.</p>
    </footer>
  );
};

export default Footer;
