import React from "react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Pricing Plans</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Basic</h2>
          <p className="text-gray-600 mb-4">For individuals and small teams</p>
          <p className="text-2xl font-bold mb-4">$9.99/month</p>
          <ul className="mb-4">
            <li>10 projects</li>
            <li>Basic support</li>
            <li>Limited features</li>
          </ul>
          <Link to="/contact/step1" className="block text-center  text-[#fff] bg-purpleo text-white font-semibold py-2 px-4 rounded hover:bg-purple-700">
            Get Started
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Pro</h2>
          <p className="text-gray-600 mb-4">For growing businesses</p>
          <p className="text-2xl font-bold mb-4">$29.99/month</p>
          <ul className="mb-4">
            <li>Unlimited projects</li>
            <li>Premium support</li>
            <li>Advanced features</li>
          </ul>
          <Link to="/contact/step1" className="block text-center  text-[#fff] bg-purpleo text-white font-semibold py-2 px-4 rounded hover:bg-purple-700">
            Get Started
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Enterprise</h2>
          <p className="text-gray-600 mb-4">For large organizations</p>
          <p className="text-2xl font-bold mb-4">$99.99/month</p>
          <ul className="mb-4">
            <li>Custom projects</li>
            <li>Premium support</li>
            <li>Full access to all features</li>
          </ul>
          <Link to="/contact/step1" className="block text-center text-[#fff]  bg-purpleo text-white font-semibold py-2 px-4 rounded hover:bg-purple-700">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
