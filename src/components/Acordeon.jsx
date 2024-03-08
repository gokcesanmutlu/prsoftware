import React, { useState } from "react";

const Acordeon = ({ i }) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);

  return (
    <>
      <div className="flex relative "> 
        <div className="left">
          <div className="question">
            <p className="font-medium">{i.accordionTitle}</p>
            <div className={isQuestionOpen ? "" : "hidden"}> 
              <span>{i.accordionContent}</span>
            </div>
          </div>
        </div>
        <div className="right">
          <button className="absolute right-0" onClick={() => setIsQuestionOpen(!isQuestionOpen)}>
            <img src="minus.png" />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Acordeon;
