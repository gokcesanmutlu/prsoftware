import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="max-w-[1440px] h-[80px] items-center relative">
        <div className="nav py-[16px] px-[80px] menu-breakmax:px-[40px] xs:px-[12px] border-b-[1px] border-[#F2F4F7] border-solid flex justify-between items-center   ">
          <div className="min-w-[128px] min-h-[26.32px]">
            <img src="logo.png"></img>
          </div>

          <div className="flex justify-center items-center gap-[32px] max-w-[952px] h-[24px] text-gray-500 menu-breakmax:hidden">
            <Link to="/">Home</Link>
            <Link
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className={`flex justify-center items-center p-2 rounded-md gap-[8px] ${
                isResourcesOpen ? "bg-[#F2F4F7]" : ""
              }`}
            >
              Resources
              <span>
                <img src={isResourcesOpen ? "up.png" : "Icon.png"} />
              </span>
            </Link>
            <Link to="/pricing">Pricing</Link>
          </div>

          {/* 960 PX'DEN KÜÇÜK EKRANLAR İÇİN */}
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="menu-breakmin:hidden"
          >
            <img src={isModalOpen ? "/close.png" : "/menubutton.png"} />
          </button>

          {/* Tam ekran HEADER CONTACT */}
          <button className="menu-breakmax:hidden h-[44px] w-[122px] xs:hidden text-[#fff] font-medium bg-purpleo rounded-[8px]">
            Contact Us
          </button>
        </div>
      </header>

      {/* FOR SCREEN THAT <960PX , TOGGLE MENU*/}
      {isModalOpen ? (
        <div className="py-6 w-[375px] flex flex-col gap-1 menu-breakmin:hidden fixed top-[72px] bg-[#fff] z-[80px] right-0">
          <Link to="/" className="py-2 px-4 font-medium">
            Home
          </Link>
          <Link
            to="/"
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            className="flex items-center py-2 px-4 font-medium"
          >
            Resources
            <span>
              <img src={isResourcesOpen ? "up.png" : "Icon.png"} />
            </span>
          </Link>

          {/* KÜÇÜK EKRANDA RESOURCES menüsünün açıldığı durum */}
          {isResourcesOpen ? (
            <div className="out px-2 w-full h-auto menu-breakmin:hidden   ">
              <div
                className={`flex flex-col gap-8 m-auto items-center w-full h-[auto]`}
              >
                <div className="flex gap-2">
                  <div className="left">
                    <img src="/featuredicon3.png" alt="" />
                  </div>
                  <div className="right">
                    <h3 className="font-medium">About us</h3>
                    <p className="text-sm">
                      Learn about our story and our mission statement.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="left">
                    <img src="/featuredicon2.png" alt="" />
                  </div>
                  <div className="right">
                    <h3 className="font-medium">Press</h3>
                    <p className="text-sm">
                      News and writings, press releases, and resources
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="left">
                    <img src="/featuredicon1.png" alt="" />
                  </div>
                  <div className="right">
                    <h3 className="font-medium">Careers</h3>
                    <p className="text-sm">
                      We’re always looking for talented people. Join us!
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="left">
                    <img src="/featuredicon4.png" alt="" />
                  </div>
                  <div className="right">
                    <h3 className="font-medium">Legal</h3>
                    <p className="text-sm">
                      All the boring stuff that we Dan from legal made us add.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-[20px] bg-[#F9F5FF] w-full h-auto flex flex-col items-center justify-center ">
                <a className=" text-[#7F56D9]" href="/">
                  Looking for a new career? Get in touch
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
          <Link className="py-3 px-4 font-medium" to="/">
            Pricing
          </Link>
          <div className="w-full flex justify-center ">
            <button className="menu-breakmin:hidden h-[44px] w-[122px] xs:hidden text-[#fff] font-medium bg-purpleo px-[18px] py-[10px] rounded-[8px]">
              Contact Us
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* BÜYÜK EKRANDA RESOURCES */}
      {isResourcesOpen ? (
  
          <div className="out w-full h-auto menu-breakmax:hidden fixed bg-[#fff] z-[80px] top-[72px] right-0 ">
            <div
              className={`flex gap-12 m-auto items-center max-w-[1216px] h-[156px]`}
            >
              <div className="flex gap-2">
                <div className="left">
                  <img src="/featuredicon3.png" alt="" />
                </div>
                <div className="right">
                  <h3 className="font-medium">About us</h3>
                  <p className="text-sm">
                    Learn about our story and our mission statement.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="left">
                  <img src="/featuredicon2.png" alt="" />
                </div>
                <div className="right">
                  <h3 className="font-medium">Press</h3>
                  <p className="text-sm">
                    News and writings, press releases, and resources
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="left">
                  <img src="/featuredicon1.png" alt="" />
                </div>
                <div className="right">
                  <h3 className="font-medium">Careers</h3>
                  <p className="text-sm">
                    We’re always looking for talented people. Join us!
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="left">
                  <img src="/featuredicon4.png" alt="" />
                </div>
                <div className="right">
                  <h3 className="font-medium">Legal</h3>
                  <p className="text-sm">
                    All the boring stuff that we Dan from legal made us add.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[20px] bg-[#F9F5FF] w-full h-auto flex items-center justify-center ">
              <a className=" text-[#7F56D9]" href="/">
                Looking for a new career? Get in touch
              </a>
            </div>
          </div>
      
      ) : (
        ""
      )}
    </>
  );
};

export default Header;