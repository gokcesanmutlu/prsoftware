import React from "react";
import { Link } from "react-router-dom";

const StepOne = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center mt-[-100px]">
      <div className="flex justify-center items-center flex-col gap-10">
        {/* STEP BUTTONS */}
        <div className="steps flex justify-center gap-1 rounded-[16px] bg-[#F9F5FF] py-1 px-[10px]">
          <button className="py-[2px] px-[10px] bg-purpleo text-[#fff] rounded-[16px]">
            Step 1
          </button>
          <button className="py-[2px] px-[10px] text-[#7F56D9] bg-[#fff] rounded-[16px]">
            Step 2
          </button>
          <button className="py-[2px] px-[10px] text-[#7F56D9] bg-[#fff] rounded-[16px]">
            Step 3
          </button>
        </div>

        {/* ARA FORM */}
        <div className="araform w-[406px]">
          <p className="font-medium  text-[#344054]">
            What kind of plan is most suitable for you?
          </p>
          {/* şıklar */}
          <div className="flex flex-col gap-3">
            {/* 1. şık */}
            <div className="flex  gap-3 p-2 rounded-[8px]  border-[1px] border-solid border-[#D0D5DD]">
              <div className="left w-6 h-6">
                <img className="w-full" src="/frame1.svg" alt="" />
              </div>

              <div className="right ">
                <p className="font-medium text-[#344054]">Individual</p>
                <p className="text-base">
                  For individual designer and developer.
                </p>
              </div>
            </div>

            {/* 2. şık */}
            <div className="flex gap-3 p-2 rounded-[8px] border-[1px] border-solid border-[#D0D5DD]">
              <div className="left w-6 h-6">
                <img className="w-full" src="/frame.svg" alt="" />
              </div>

              <div className="right">
                <p className="font-medium text-[#344054]">Team</p>
                <p className="text-base">
                  For small team of designers and developers.
                </p>
              </div>
            </div>

            {/* 3. şık */}
            <div className=" flex gap-3 p-2 rounded-[8px]  border-[1px] border-solid border-[#D0D5DD]">
              <div className="left w-6 h-6">
                <img className="w-full" src="/frame3.svg" alt="" />
              </div>

              <div className="right ">
                <p className="font-medium text-[#344054]">Corporate</p>
                <p className="text-base">
                  For larger design and development teams.
                </p>
              </div>
            </div>
          </div>
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
