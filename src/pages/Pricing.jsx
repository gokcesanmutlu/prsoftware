import React from "react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <div className=" mx-auto px-4 py-8 text-[#1f1f20]">
      <h1 className="text-2xl font-semibold text-center mb-2">Pricing Plans</h1>
      <div className="flex just gap-8 p-5">
        <div className="flex-1 bg-white rounded-lg shadow-md p-6 gri-border">
          <h2 className="text-xl font-semibold mb-4">Basic</h2>
          <p className="text-gray-600 mb-4">For individuals </p>
          <p className="text-2xl font-bold mb-4">$9.99/month</p>
          <ul className="mb-4">
            <li>10 projects</li>
            <li>Basic support</li>
            <li>Limited features</li>
          </ul>
          <Link
            to="/contact/step1"
            className="block text-center  text-[#fff] bg-purpleo text-white font-semibold py-2 px-4 rounded hover:bg-purple-700"
          >
            Get Started
          </Link>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-6 gri-border">
          <h2 className="text-xl font-semibold mb-4">Pro</h2>
          <p className="text-gray-600 mb-4">For growing businesses</p>
          <p className="text-2xl font-bold mb-4">$29.99/month</p>
          <ul className="mb-4">
            <li>Unlimited projects</li>
            <li>Premium support</li>
            <li>Advanced features</li>
          </ul>
          <Link
            to="/contact/step1"
            className="block text-center  text-[#fff] bg-purpleo text-white font-semibold py-2 px-4 rounded hover:bg-purple-700"
          >
            Get Started
          </Link>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-6 gri-border">
          <h2 className="text-xl font-semibold mb-4">Enterprise</h2>
          <p className="text-gray-600 mb-4">For large organizations</p>
          <p className="text-2xl font-bold mb-4">$99.99/month</p>
          <ul className="mb-4">
            <li>Custom projects</li>
            <li>Premium support</li>
            <li>Full access to all features</li>
          </ul>
          <Link
            to="/contact/step1"
            className="block text-center text-[#fff]  bg-purpleo text-white font-semibold py-2 px-4 rounded hover:bg-purple-700"
          >
            Get Started
          </Link>
        </div>
      </div>
      <p className="text-xs p-7 text-justify"> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe nemo molestias ipsam voluptate mollitia ad accusantium vitae aliquid molestiae corporis, sed ex officia delectus omnis tenetur dolorum ab unde veniam reiciendis magni voluptas! Possimus illum, dolore temporibus quia totam maiores vero eveniet odit exercitationem sunt sapiente velit voluptates repellat debitis perspiciatis ratione laborum. Provident cumque modi quo omnis. Eos ducimus officia eligendi hic velit ipsum, ipsam esse aliquid similique doloremque optio voluptatem explicabo placeat corporis distinctio adipisci iusto nesciunt? Aliquid numquam corporis architecto possimus odio nulla quis debitis, voluptatum, quia odit necessitatibus eveniet tempora molestiae adipisci omnis, earum ut. Distinctio exercitationem dolorem harum totam adipisci vel ipsa quo pariatur aut nostrum eaque animi eum cumque voluptatem, corrupti porro dolor! Amet, voluptate iusto cumque officia reprehenderit nulla incidunt minima, fugit libero, magni et. Reiciendis nemo, impedit ab officia neque quod, accusantium velit ratione magnam dolor hic ex distinctio totam qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores sit natus suscipit omnis nam tempora nesciunt quidem fugit quam, nobis dolorum cumque. Deleniti inventore perspiciatis ut esse! Ipsam nostrum ullam voluptate magni numquam dolore fuga nesciunt vel aliquid fugit, rerum quibusdam quod asperiores aut facilis error, adipisci sunt labore!"</p>
    </div>
  );
};

export default PricingPage;
