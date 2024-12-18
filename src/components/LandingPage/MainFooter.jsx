import React from "react";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <footer className="flex px-5 md:justify-center w-full items-center border-t border-black py-[25px] bg-white">
      <ul className="flex flex-col md:flex-row gap-4 text-xs text-gray-600">
        <li className="cursor-pointer hover:text-black">Help</li>
        <li className="cursor-pointer hover:text-black">Status</li>
        <li className="cursor-pointer hover:text-black">
          <Link to="/about">About</Link>
        </li>
        <li className="cursor-pointer hover:text-black">Careers</li>
        <li className="cursor-pointer hover:text-black">Press</li>
        <li className="cursor-pointer hover:text-black">Blog</li>
        <li className="cursor-pointer hover:text-black">Privacy</li>
        <li className="cursor-pointer hover:text-black">Terms</li>
        <li className="cursor-pointer hover:text-black">Text to speech</li>
        <li className="cursor-pointer hover:text-black">Teams</li>
      </ul>
    </footer>
  );
};

export default MainFooter;
