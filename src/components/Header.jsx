import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="max-w-[1440px] h-[80px] items-center">
      <div className="nav py-[16px] px-[80px] border-b-[1px] border-[#F2F4F7] border-solid  flex justify-between items-center xs:flex-col  ">
        <div className="min-w-[128px] min-h-[26.32px]">
          <img src="logo.png"></img>
        </div>

        <div className="flex justify-center items-center gap-[32px] max-w-[952px] h-[24px] text-gray-500 xs:hidden">
          <Link to="/">Home</Link>
          <Link className="flex justify-center items-center gap-[8px]">
            Resources
            <span>
              <img src="Icon.png" />
            </span>
          </Link>
          <Link to="/pricing">Pricing</Link>
        </div>

        <button className="h-[44px] w-[122px] xs:hidden text-[#fff] font-medium bg-purpleo  rounded-[8px]">
          Contact Us
        </button>
      </div>
      <ul className="hidden">
        <li>Seçenek 1</li>
        <li>Seçenek 2</li>
        <li>Seçenek 3</li>
      </ul>
    </header>
  );
};

export default Header;
