import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="xs:h-[328px] flex justify-between w-full  bg-[#fff] py-[48px] px-[80px]">
      <Link to={"/"}>
        <img src="/logo.png" alt="Logo" />
      </Link>

      <ul className="flex flex-wrap px-12 gap-6 text-[#344054] text-xs font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
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

      <p className="text-gray-600 font-medium text-xs">
        © 2023 PR Yazılım. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
