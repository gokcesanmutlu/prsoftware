import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContact = () => {
    setIsResourcesOpen(false);
    navigate("/contact/step1");
  };

  const handleHome = () => {
    setIsResourcesOpen(false);
    navigate("/");
  };
  const handlePricing = () => {
    setIsResourcesOpen(false);
    navigate("/pricing");
  };

  useEffect(() => {
    // isResourcesOpen durumu değiştiğinde, handleClick olayını ekleyin veya kaldırın
    if (isResourcesOpen) {
      const backlayer = document.querySelector(".backlayer");
      if (backlayer) {
        backlayer.addEventListener("click", handleClick);
      }
    } else {
      const backlayer = document.querySelector(".backlayer");
      if (backlayer) {
        backlayer.removeEventListener("click", handleClick);
      }
    }

    // Cleanup işlevi - bileşen unmount edildiğinde olay dinleyicisini kaldır
    return () => {
      const backlayer = document.querySelector(".backlayer");
      if (backlayer) {
        backlayer.removeEventListener("click", handleClick);
      }
    };
  }, [isResourcesOpen]);

  const handleClick = () => {
    setIsResourcesOpen(false);
  };

  return (
    <>
      <header className="max-w-[1440px] h-[80px] items-center relative z-[100]  border-b-[1px] border-[#F2F4F7] border-solid">
        <div className="w-screen h-[79px] fixed py-[16px] px-[80px] menu-breakmax:px-[40px] xs:px-[12px] bg-[#fff] z-index: 80 flex justify-between items-center">
          <div className="min-w-[128px] min-h-[26.32px]">
            <Link to={"/"}>
              <img src="/logo.png"></img>
            </Link>
          </div>

          <div className="flex justify-center items-center gap-[32px] max-w-[952px] h-[24px] text-[#667085] font-medium font-inter menu-breakmax:hidden">
            <button onClick={() => handleHome()}>Home</button>
            <Link
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className={`flex justify-center items-center p-2 rounded-md gap-[8px] ${
                isResourcesOpen ? "bg-[#F2F4F7]" : ""
              }`}
            >
              Resources
              <span >
                <img src={isResourcesOpen ? "/up.png" : "/down.png"} />
              </span>
            </Link>
            <button onClick={() => handlePricing()}>Pricing</button>
          </div>

          {/* 960 PX'DEN KÜÇÜK EKRANLAR İÇİN */}
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="menu-breakmin:hidden"
          >
            <img
              src={isModalOpen ? "/close.png" : "/menubutton.png"}
              className="absolute right-10 top-5"
            />
          </button>

          {/* Tam ekran HEADER CONTACT */}

          <button
            onClick={() => handleContact()}
            className="menu-breakmax:hidden h-[44px] w-[122px] text-[#fff] font-medium bg-purpleo rounded-[8px]"
          >
            Contact Us
          </button>
        </div>
      </header>

      {/* FOR SCREEN THAT <960PX , TOGGLE MENU*/}
      {isModalOpen ? (
        <div className="fixed top-[53px] right-0 z-[90] bg-[#fff] py-6 xs:w-full w-[375px] menu-breakmin:hidden">
          <Link to="/" className="py-2 px-4 font-medium text-base text-gray-500">
            Home
          </Link>
          <Link
            to="/"
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            className="flex items-center py-2 px-4 font-medium"
          >
            Resources
            <span>
              <img src={isResourcesOpen ? "/up.png" : "/down.png"} />
            </span>
          </Link>

          {/* KÜÇÜK EKRANDA RESOURCES menüsünün açıldığı durum */}
          {isResourcesOpen ? (
            <div className="out px-2 w-full h-auto menu-breakmin:hidden">
              <div
                className={`flex flex-col gap-8 m-auto items-center w-full h-[auto]`}
              >
                <Link to={"/about"}>
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
                </Link>
                <Link to={"/press"}>
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
                </Link>
                <Link to={"/career"}>
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
                </Link>
                <Link to={"/legal"}>
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
                </Link>
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
          <Link to={"/pricing"} className="py-3 px-4 font-medium">
            Pricing
          </Link>
          <div className="w-full flex justify-center ">
            <Link to={"/contact/step1"}>
              <button className="menu-breakmin:hidden h-[44px] w-[122px] xs:hidden text-[#fff] font-medium bg-purpleo px-[18px] py-[10px] rounded-[8px]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* BÜYÜK EKRANDA RESOURCES */}
      {isResourcesOpen ? (
        // en dıştaki div bir katman olarak oluşturulu bu katmana tıklayınca resources kapanıyor
        <div className="backlayer z-[20] px-8">
          <div className="w-full h-auto menu-breakmax:hidden fixed bg-[#fff] z-[80] top-[72px] right-0 ">
            <div
              className={`flex gap-12 m-auto items-center max-w-[1070px] h-[156px]`}
            ><Link to={"/about"}>click </Link>
              <Link to="/about">
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
              </Link>

              <Link to="/press">
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
              </Link>

              <Link to="/career">
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
              </Link>

              <Link to="/legal">
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
              </Link>

            </div>
            <div className="py-[20px] bg-[#F9F5FF] w-full h-auto flex items-center justify-center ">
              <a className=" text-[#7F56D9]" href="/">
                Looking for a new career? Get in touch
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
