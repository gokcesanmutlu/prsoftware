import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const StepOne = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Seçeneklerin tıklanması durumunda çağrılacak fonksiyon
  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center mt-[-100px]">
      <div className="flex justify-center items-center flex-col gap-10">
        
        {/* STEP BUTTONS */}
        <div className="steps flex justify-center gap-1 rounded-[16px] bg-[#F9F5FF] py-1 px-[10px]">
          <Link
            to={"/contact/step1"}
            className="py-[2px] px-[10px] bg-purpleo text-[#fff] rounded-[16px]"
          >
            Step 1
          </Link>
          <Link
            to={"/contact/step2"}
            className="py-[2px] px-[10px] text-[#7F56D9] bg-[#fff] rounded-[16px]"
          >
            Step 2
          </Link>
          <Link className="py-[2px] px-[10px] text-[#7F56D9] bg-[#fff] rounded-[16px]">
            Step 3
          </Link>
        </div>

        {/* ARA FORM */}
        <div className="araform w-[406px]">
          <p className="font-medium text-[#344054] mb-5">
            What kind of plan is most suitable for you?
          </p>
          {/* şıklar */}
          <ul className="flex flex-col gap-3">
            {/* 1. şık */}
            <li
              className={`flex  gap-3 p-2 rounded-[8px] border-[1px] gri-border  ${
                selectedOption === 0 ? "purple-border" : "gri-border"
              } ${
                selectedOption === 0 ? "bg-[#F9F5FF]" : ""
              }`}
              onClick={() => handleOptionClick(0)}
            >
              <div className="left w-6 h-6">
                <img
                  className="w-full"
                  src={`${
                    selectedOption === 0 ? "/person.png" : "/frame1.svg"
                  } `}
                  alt=""
                />
              </div>

              <div className="right ">
                <p
                  className={`font-medium ${
                    selectedOption === 0 ? "text-[#7F56D9]" : "text-[#344054]"
                  }`}
                >
                  Individual
                </p>
                <p className="text-base">
                  For individual designer and developer.
                </p>
              </div>
            </li>

            {/* 2. şık */}
            <li
              className={`flex gap-3 p-2 rounded-[8px] border-[1px] gri-border  ${
                selectedOption === 1 ? "purple-border" : "gri-border"
              } ${
                selectedOption === 1 ? "bg-[#F9F5FF]" : ""
              }`}
              onClick={() => handleOptionClick(1)}
            >
              <div className="left w-6 h-6">
                <img
                  className="w-full"
                  src={`${selectedOption === 1 ? "/three.png" : "/frame.svg"} `}
                  alt=""
                />
              </div>

              <div className="right">
                <p
                  className={`font-medium ${
                    selectedOption === 1 ? "text-[#7F56D9]" : "text-[#344054]"
                  }`}
                >
                  Team
                </p>
                <p className="text-base">
                  For small team of designers and developers.
                </p>
              </div>
            </li>

            {/* 3. şık */}
            <li
              className={`flex gap-3 p-2 rounded-[8px] ${
                selectedOption === 2 ? "purple-border" : "gri-border"
              } ${
                selectedOption === 2 ? "bg-[#F9F5FF]" : ""
              }`}
              onClick={() => handleOptionClick(2)}
            >
              <div className="left w-6 h-6">
                <img
                  className="w-full "
                  src={`${
                    selectedOption === 2 ? "/building.png" : "/frame3.svg"
                  } `}
                  alt=""
                />
              </div>

              <div className="right ">
                <p
                  className={`font-medium ${
                    selectedOption === 2 ? "text-[#7F56D9]" : "text-[#344054]"
                  }`}
                >
                  Corporate
                </p>
                <p className="text-base">
                  For larger design and development teams.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <Link className="w-full" to={"/contact/step2"}>
          <button className="text-[#fff] bg-purpleo py-[10px] px-[18px] rounded-lg h-[44px] w-full">
            Next Step
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StepOne;
