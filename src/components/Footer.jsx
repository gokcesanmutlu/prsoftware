import React from "react";
import { Link } from "react-router-dom";



function Footer() {
  return (

    <footer className="flex justify-between w-full bg-[#fff] py-[48px] px-[80px] menu-breakmax:py-[24px] menu-breakmax:px-[40px]">
      <Link to={"/"}>
        <img src="/logo.png" alt="Logo" />
      </Link>

      <ul className="flex flex-wrap px-12 bg:px-0 gap-6 text-[#344054] text-xs font-medium">
        <li className="bg:pr-12 ">
          <Link to="/">Home</Link>
        </li>
        <li className="bg:pr-12 ">
          <Link to="/about">About Us</Link>
        </li>
        <li className="bg:pr-12 ">
          <Link to="/press">Press</Link>
        </li >
        <li className="bg:pr-16">
          <Link to="/career">Career</Link>
        </li>
        <li className="bg:pr-12 ">
          <Link to="/help">Help</Link>
        </li>
        <li className="bg:pr-12 ">
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
