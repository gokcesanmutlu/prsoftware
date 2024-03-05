import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] h-[128px] px-[80px] py-[48px] top-[146px] left-[3102px] flex justify-between items-center xs:flex-col ">
      <div className="min-w-[128px] min-h-[26.32px]">
        <img src="logo.png"></img>
      </div>

      <ul className="flex gap-[1.5rem] text-[#344054] font-medium xs:flex-col xs:hidden  ">
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/press">Press</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
      </ul>

      <p className="text-[#667085]">© 2023 PR Yazılım. All rights reserved</p>
    </footer>
  );
};

export default Footer;
