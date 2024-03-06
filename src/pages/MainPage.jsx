import React, { useState } from "react";
import Acordeon from "./../components/Acordeon";

const MainPage = () => {
 
  const [currentStep, setCurrentStep] = useState(1);

  const accordionItems = [
    {
      id: 1,
      accordionTitle: "Is there a free trial available?",
      accordionContent:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 2,
      accordionTitle: "Can I change my plan later?",
      accordionContent:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 3,
      accordionTitle: "What is your cancellation policy?",
      accordionContent:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { id: 4,
      accordionTitle: "Can other info be added to an invoice?",
      accordionContent:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 5,
      accordionTitle: "How does billing work?",
      accordionContent:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 6,
      accordionTitle: "How do I change my account email?",
      accordionContent:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  const handleContactHeader = () => {
    console.log("handleContactHeader çalıştı");
    setisModalOpen(true);
    setCurrentStep(1);
  };

  return (
    <div className="">
      {/* <Header handleContactHeader={handleContactHeader} /> */}

      {/* SECTION BANNER */}
      <section className="w-full h-auto">
        <div className="flex flex-col gap-3">
          <div className="text-[#7f56d9] bg-[#F9F5FF] text-[14px] flex justify-center items-center gap-4 py-1">
            <button>New feature</button>
            <button className="home-right flex  justify-center items-center gap-1">
              <span>Check out the team dashboard</span>
              <img src="arrow-right.png" alt="" />
            </button>
          </div>

          <h1
            className="text-center font-semibold"
            style={{ fontSize: "60px" }}
          >
            Beautiful analytics to grow smarter
          </h1>
          <p className="text-center mt-[24px]">
            Powerful, self-serve product and growth analytics to help you
            convert, engage,
            <br />
            and retain more users. Trusted by over 4,000 startups.
          </p>

          <div className="buttons flex justify-center gap-4 rounded-[8px] mt-[48px] mb-5 ">
            <button className="gri-border xs:w-full min-w-[143px] h-[60px] flex gap-2 items-center justify-center bg-white text-lg font-semibold px-2 py-1 rounded-[8px]">
              <img src="Icon.svg" alt="" />
              <span>Demo</span>
            </button>
            <button
              className="btn xs:w-full min-w-[143px] h-[60px]"
              onClick={handleContactHeader}
            >
              Contact Us
            </button>
          </div>
          <div className="flex w-auto h-auto max-[375px]:hidden">
            <img className="w-full h-full object-cover" src="/bg-crop.jpg" />
          </div>
        </div>
      </section>

      {/* SECTION SOCIAL */}
      <section className="flex flex-col gap-3 mt-[32px] ">
        <p className="text-center">Join 4,000+ companies already growing</p>
        <div className="flex gap-3 justify-center">
          <img style={{ width: "180px", height: "39px" }} src="26.png" />
          <img style={{ width: "180px", height: "39px" }} src="27.png" />
          <img style={{ width: "180px", height: "39px" }} src="28.png" />
          <img style={{ width: "180px", height: "39px" }} src="29.png" />
          <img style={{ width: "180px", height: "39px" }} src="30.png" />
        </div>
      </section>

      {/* SECTION FEATURES */}
      <section>
        <div className=" flex flex-col gap-4">
          <div className="text-[#7f56d9] text-[14px] text-center">
            <span className="font-semibold text-[16px]">Features</span>
          </div>
          <h2
            className="text-center font-semibold"
            style={{ fontSize: "2rem" }}
          >
            Analytics that feels like it’s from the future
          </h2>
          <p className="text-center">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and <br />
            retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
        <div className="flex max-md:flex-col md:min-[10px] gap-4 mt-[64px]">
          <div className="feature-item flex flex-col gap-1 items-center">
            <img className="w-[20px] h-[12px]:" src="mail.png" alt="" />
            <h3 style={{ fontSize: "20px", fontWeight: 500 }}>
              Share team inboxes
            </h3>
            <p>
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
          <div className="feature-item flex flex-col gap-1 items-center">
            <img src="zap.svg" alt="" />
            <h3 style={{ fontSize: "20px", fontWeight: 500 }}>
              Deliver instant answers
            </h3>
            <p>
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
          </div>
          <div className="feature-item flex flex-col gap-1 items-center">
            <img src="bar-chart-2.svg" alt="" />
            <h3 style={{ fontSize: "20px", fontWeight: 500 }}>
              Manage your team with reports
            </h3>
            <p>
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple click
            </p>
          </div>
        </div>
      </section>

      {/* SECTION FAQ */}
      <section>
        <h2
          className="text-center font-semibold pb-[12px]"
          style={{ fontSize: "2rem" }}
        >
          Frequently asked questions
        </h2>
        <p className="text-center mb-10">
          Everything you need to know about the product and billing.
        </p>
        <div className="flex flex-col gap-6 max-w-[800px] m-auto relative">
          {accordionItems.map((i, key) => (
            <Acordeon i={i} key={i.id} />
          ))}
        </div>
      </section>

      {/* SECTION CTO */}
      <section className="bg-[#F9F5FF]">
        <div className="flex flex-col gap-4 pt-[30px]">
          <h2
            className="text-center font-semibold"
            style={{ fontSize: "2rem" }}
          >
            Start your free trial
          </h2>
          <p className="text-center">
            Join over 4,000+ startups already growing with us.
          </p>
          <div className="buttons flex justify-center gap-2 rounded-[8px] pb-2">
            <button className="xs:w-full min-w-[143px] h-[60px] flex gap-2 items-center justify-center bg-white text-lg font-semibold gri-border px-2 py-1 rounded-[8px]">
              Learn More
            </button>
            <button className="btn" onClick={handleContactHeader}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
