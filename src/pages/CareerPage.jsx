import React, { useState } from "react";

const CareerPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [cvFile, setCvFile] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Career</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-3 py-2 border rounded-md"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-3 py-2 border rounded-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="cvFile" className="block mb-2 font-medium">
              CV
            </label>
            <input
              type="file"
              id="cvFile"
              className="w-full"
              onChange={(e) => setCvFile(e.target.files[0])}
              required
            />
          </div>
          <button
            type="submit"
            className=" w-full bg-purpleo text-[#fff] font-semibold py-2 px-4 rounded-md hover:bg-purpleo-dark transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerPage;
