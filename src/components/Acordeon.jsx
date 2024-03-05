import React, { useState } from "react";

const Acordeon = ({ i }) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);

  return (
    <>
      <div className="flex">
        <div className="left">
          <div className="question">
            <p className="font-medium">{i.accordionTitle}</p>
            <span className={isQuestionOpen? "" : "hidden"}>{i.accordionContent}</span>
          </div>
        </div>
        <div className="right">
          <button className="absolute right-0" onClick={() => setIsQuestionOpen(!isQuestionOpen)}>
            <img src="minus.png"  />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Acordeon;
