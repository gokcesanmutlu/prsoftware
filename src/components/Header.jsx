import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <>
      <header className="max-w-[1440px] h-[80px] items-center ">
        <div className="nav py-[16px] px-[80px] border-b-[1px] border-[#F2F4F7] border-solid flex justify-between items-center xs:flex-col  ">
          <div className="min-w-[128px] min-h-[26.32px]">
            <img src="logo.png"></img>
          </div>

          <div className="flex justify-center items-center gap-[32px] max-w-[952px] h-[24px] text-gray-500 xs:hidden">
            <Link to="/">Home</Link>
            <Link
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="flex justify-center items-center gap-[8px]"
            >
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
      {isResourcesOpen ? (
        <div className="out w-full h-auto">
          <div className="flex gap-12 m-auto items-center max-w-[1216px] h-[156px] ">
            <div className="flex gap-2">
              <div className="left">
                <img src="/featuredicon3.png" alt="" />
              </div>
              <div className="right">
                <h3 className="font-medium">About us</h3>
                <p className="text-sm">Learn about our story and our mission statement.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="left">
                <img src="/featuredicon2.png" alt="" />
              </div>
              <div className="right">
                <h3 className="font-medium">Press</h3>
                <p className="text-sm">News and writings, press releases, and resources</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="left">
                <img src="/featuredicon1.png" alt="" />
              </div>
              <div className="right">
                <h3 className="font-medium">Careers</h3>
                <p className="text-sm">We’re always looking for talented people. Join us!</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="left">
                <img src="/featuredicon4.png" alt="" />
              </div>
              <div className="right">
                <h3 className="font-medium">Legal</h3>
                <p className="text-sm">All the boring stuff that we Dan from legal made us add.</p>
              </div>
            </div>
          </div>
          <div className="py-[20px] bg-[#F9F5FF] w-full h-auto flex items-center justify-center ">
            <a className=" text-[#7F56D9]" href="/">Looking for a new career? Get in touch</a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;