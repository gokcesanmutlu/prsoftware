import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full fixed bottom-0 left-0 bg-[#fff] py-6 px-[75px]">
      <Link to={"/"}>
        <img src="/logo.png" alt="Logo" />
      </Link>

      <ul className="flex gap-8 text-gray-600 font-medium">
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

      <p className="text-gray-600">© 2023 PR Yazılım. All rights reserved</p>
    </footer>
  );
};

export default Footer;
