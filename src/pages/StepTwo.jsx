import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import PrivacyModal from "./../components/PrivacyModal";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^\d+$/, "Only numbers are allowed"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().max(400, "Message must be at most 400 characters"),
});

const StepTwo = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center mt-[-100px]">
      <div className="flex justify-center items-center flex-col gap-10">
        {/* STEP BUTTONS */}
        <div className="steps flex justify-center gap-1 rounded-[16px] bg-[#F9F5FF] py-1 px-[10px]">
          <Link
            to={"/contact/step1"}
            className="py-[2px] px-[10px] text-[#7F56D9] bg-[#fff] rounded-[16px]"
          >
            Step 1
          </Link>
          <Link
            to={"/contact/step2"}
            className="py-[2px] px-[10px] bg-purpleo text-[#fff] rounded-[16px]"
          >
            Step 2
          </Link>
          <Link className="py-[2px] px-[10px] text-[#7F56D9] bg-[#fff] rounded-[16px]">
            Step 3
          </Link>
        </div>

        {/* Form */}
        <div className="max-w-md mx-auto">
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Validation passed, handle submission
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-[406px] xs:w-[300px]">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#344054]"
                  >
                    Name Surname
                  </label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    className={`border border-solid border-[#D0D5DD] mt-1 p-2 rounded-[8px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full`}
                    placeholder="Enter your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4 xs:hidden">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium  text-[#344054]"
                  >
                    Phone
                  </label>
                  <div className="flex gap-1">
                    <select
                      defaultValue={"+90"}
                      className={`border border-solid border-[#D0D5DD] w-[70px] mt-1 p-2 rounded-[8px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 `}
                      type="text"
                    >
                      <option value="1">+90</option>
                    </select>
                    <Field
                      id="phone"
                      name="phone"
                      type="text"
                      className={`border border-solid border-[#D0D5DD] flex-12 mt-1 p-2 rounded-[8px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full`}
                      placeholder="(---) --- -- --"
                    />
                  </div>
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium  text-[#344054]"
                  >
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className={`border border-solid border-[#D0D5DD] mt-1 p-2 rounded-[8px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full`}
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium  text-[#344054]"
                  >
                    Message
                  </label>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    rows="4"
                    className={`border border-solid border-[#D0D5DD] mt-1 p-2 rounded-[8px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full`}
                    placeholder="Enter your message (max 400 characters)"
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Checkbox */}
        <div className="flex items-center justify-center gap-2">
          <input type="checkbox" />
          <p className="text-[#667085] text-sm font-inter">
            You agree to our friendly{" "}
            <Link to={"/modal"}>
              <u> privacy policy</u>
            </Link>
            {isPrivacyOpen ? (
              <PrivacyModal setIsPrivacyOpen={setIsPrivacyOpen} />
            ) : (
              " "
            )}
          </p>
        </div>

        {/* Buttons */}
        <div className="h-[44px] gap-4 rounded-[8px] w-full flex">
          <Link className="flex flex-1" to={"/contact/step1"}>
            <button className="w-full flex items-center justify-center xs:hidden gri-border h-full bg-white text-lg font-semibold px-2 py-1 rounded-[8px]">
              <img src="/arrowleft.png" alt="" />
              <span className="text-[#344054]">Back</span>
            </button>
          </Link>
          <Link className="flex flex-1" to={"/contact/step3"}>
            <button className="w-full flex justify-center items-center btn py-[6px] h-full xs:w-full">
              Complete
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
