import React from "react";
import { Link } from "react-router-dom";

const StepSuccess = () => {
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

        {/* Check icon */}
        <div className="w-[72px]">
          <img src="/check.png" alt="" />
        </div>

        {/* Thanks */}
        <div className="text-center font-inter">
          <p className="text-[#000] font-semibold">Thanks for reaching us!</p>
          <span className="text-[#667085]">
            Your message sent. We’ll contact back with you soon!
          </span>
        </div>

        {/* button */}
        <Link to={"/"} className="w-full">
          <button className="text-[#fff] bg-purpleo py-[10px] px-[18px] rounded-lg h-[44px] w-full">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StepSuccess;
