import React, { useState } from "react";

const Acordeon = ({ i }) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between ">
        <div>
          <p className="font-medium text-[#101828]">{i.accordionTitle}</p>
          <div className={isQuestionOpen ? "" : "hidden"}>
            <span className="text-[#667085]">{i.accordionContent}</span>
          </div>
        </div>
        <div>
          <button className="w-6" 
           
            onClick={() => setIsQuestionOpen(!isQuestionOpen)}
          >
            <img className="w-full" src={isQuestionOpen ? "/minus.png" : "/plus.png"} />
          </button>
        </div>
      </div>
      <hr className="text-[#EAECF0]" />
    </>
  );
};

export default Acordeon;
