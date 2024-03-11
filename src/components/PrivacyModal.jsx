import React from "react";
import { Link } from "react-router-dom";

const PrivacyModal = () => {
  return (
    <div className="w-full h-full bg-[#fff] p-[80px]">
      <div>
        <h3 className="font-medium text-md ">PRIVACY POLICY</h3>
        <br />
        <p className=" text-md">
          Your privacy is important to us. We respect your privacy regarding any
          information we may collect from you across our website
        </p>
        <div className="px-6 py-4">
          <p className=" text-md">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra,
            semper. <br />
            <br />
            Eget in volutpat mollis at volutpat lectus velit, sed auctor.
            Porttitor fames arcu quis fusce augue enim. Quis at habitant diam
            at. Suscipit tristique risus, at donec. In turpis vel et quam
            imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.{" "}
          </p>
          <br />
          <h3 className="font-medium text-md">
            WHAT INFORMATION DO WE COLLECT?
          </h3>
          <br />
          <p className=" text-md">
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
            odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada
            fringilla.
            <br />
            <br />
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
            odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada
            fringilla.
            <br />
            <br />
            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
            commodo consectetur convallis risus. Sed condimentum enim dignissim
            adipiscing faucibus consequat, urna. Viverra purus et erat auctor
            aliquam. Risus, volutpat vulputate posuere purus sit congue
            convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
            Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor
            lacus, eget nunc lectus in tellus, pharetra, porttitor
          </p>
        </div>
      </div>

      <div className="buttons flex justify-center gap-2 rounded-[8px] ">
        <Link
          to={"/contact/step2"}
          className="flex flex-1 h-[30px] py-[2px] items-center justify-center bg-white text-[#344054] font-semibold rounded-[8px] gri-border"
        >
          Cancel
        </Link>
        <Link
          to={"/contact/step1"}
          className="btn flex h-[30px] flex-1 items-center justify-center  "
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default PrivacyModal;
