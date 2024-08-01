import React, { useState } from "react";
import { PiArrowBendDownRight } from "react-icons/pi";
import { HiSparkles } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";
import { BsHandbagFill } from "react-icons/bs";

const Pcard = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handleToggle = (cycle) => {
    setBillingCycle(cycle);
  };

  const monthlyPlans = [
    {
      title: "Starter",
      price: "Free",
      duration: "Forever",
      subtitle: "Good for giving feedback and trying things out",
      features: [
        "3 projects",
        "3 project members",
        "10 assets per project",
        "500 MB storage limit",
      ],
    },
    {
      title: "Lite",
      price: "$15",
      duration: "/month",
      subtitle: "Ideal for freelancers to get the essential tools",
      features: [
        "20 projects",
        "10 project members",
        "30 assets per project",
        "5 GB storage limit",
      ],
      popular: true,
    },
    {
      title: "Pro",
      price: "$39",
      subtitle:
        "For professionals who want to create and manage multiple projects",
      duration: "/month",
      features: [
        "Unlimited projects",
        "Unlimited project members",
        "Unlimited assets per project",
        "250 GB storage limit",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "For large companies who want to supercharge their workflows",
      price: "Let’s talk",
      duration: "We would love to work with you!",
      features: [
        "Everything from PRO",
        "Personalized onboarding",
        "One contract for all your Niimblr accounts",
      ],
    },
  ];

  const yearlyPlans = [
    {
        title: "Starter",
        price: "Free",
        duration: "Forever",
        subtitle: "Good for giving feedback and trying things out",
        features: [
          "3 projects",
          "3 project members",
          "10 assets per project",
          "500 MB storage limit",
        ],
      },
      {
        title: "Lite",
        price: "$10",
        duration: "/month",
        subtitle: "Ideal for freelancers to get the essential tools",
        features: [
          "20 projects",
          "10 project members",
          "30 assets per project",
          "5 GB storage limit",
        ],
        popular: true,
      },
      {
        title: "Pro",
        price: "$29",
        subtitle:
          "For professionals who want to create and manage multiple projects",
        duration: "/month",
        features: [
          "Unlimited projects",
          "Unlimited project members",
          "Unlimited assets per project",
          "250 GB storage limit",
        ],
      },
      {
        title: "Enterprise",
        subtitle: "For large companies who want to supercharge their workflows",
        price: "Let’s talk",
        duration: "We would love to work with you!",
        features: [
          "Everything from PRO",
          "Personalized onboarding",
          "One contract for all your Niimblr accounts",
        ],
      },
    ];

  const plans = billingCycle === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <div className="mt-[2rem] bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="flex space-x-2 w-[16rem] rounded-lg justify-between bg-gray-700 ">
        <button
          className={`px-4 font-semibold text-[15px] py-[0.6rem] rounded-lg ${
            billingCycle === "monthly"
              ? "bg-[#0b82fa] w-[7.5rem] mx-[0.2rem] text-white"
              : "bg-gray-700 w-[7.5rem] mx-[0.2rem]"
          } transition-colors duration-300`}
          onClick={() => handleToggle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 font-semibold text-[15px] rounded-lg ${
            billingCycle === "yearly"
              ? "bg-[#0b82fa] w-[7.5rem] text-white"
              : "bg-gray-700 w-[7.5rem]"
          } transition-colors duration-500`}
          onClick={() => handleToggle("yearly")}
        >
          Yearly
        </button>
      </div>
      <div className="flex items-center">
        <p className="text-[#20824d] mt-8 font-semibold">Save up to 33%</p>
        <PiArrowBendDownRight
          size={60}
          color="#fdfdfd"
          className="rotate-[290deg] font-extralight skew-y-12 skew-x-6"
        />
      </div>
      <div className="lg:flex space-x-4 mt-4 lg:mb-[5rem] mb-[2rem]">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`px-4 pt-8 rounded-xl shadow-lg lg:w-64 mx-4 lg:mx-0 w-[22rem] ${
              plan.popular
                ? "bg-[#1a3046] text-white border mb-4 border-[#0d80fa]"
                : "bg-[#202121]"
            }`}
          >
            {plan.popular && (
              <span className="text-sm  text-gray-900 font-bold px-2 py-1  rounded-full absolute top-2 right-2">
                Most Popular
              </span>
            )}
            <div className="flex items-center">
              <h3 className="text-md font-bold mr-1">{plan.title}</h3>
              {plan.title === "Starter" && (
                <img
                  src="/spaceship.svg"
                  alt="Spaceship"
                  className="w-6 h-6 mr-2  rotate-[40deg]"
                />
              )}
              {plan.title === "Lite" && (
                <HiSparkles color="#ffac33" size={18} />
              )}
              {plan.title === "Pro" && <FaStar color="#ffac33" className="" />}
              {plan.title === "Enterprise" && <BsHandbagFill color="#8d431a" />}
            </div>
            <p className="text-[#8f8e97] text-[12px]">{plan.subtitle}</p>

            <hr className="border-1 border-[#7f7d83] mt-5" />
            <p className="text-3xl mt-3 font-semibold mb-2">{plan.price}</p>
            <div className="flex items-center">
              <p className="text-[#8f8e97] text-[12px] mr-5">{plan.duration}</p>

              {plan.title === "Lite" && (
                <div className="flex bg-[#1a3e39] items-center p-1 rounded-full">
                  <FaStar color="#27ae60" size={10} />
                  <p className="text-[#27ae60] text-[10px] ml-1">
                    Most Popular
                  </p>
                </div>
              )}
            </div>
            {plan.title === "Starter" && (
              <div className="bg-[#0b82fa] m-auto w-[11rem] flex justify-center mt-4 font-semibold text-sm py-[0.4rem] px-5 rounded-lg">
                <p className="">Get Started for Free</p>
              </div>
            )}
            {(
              plan.title === "Lite" ||
              plan.title === "Pro") && (
              <div className="bg-[#0b82fa] m-auto flex justify-center w-[9rem] mt-4 font-semibold text-sm py-[0.4rem] px-5 rounded-lg">
                <p className="">Get Started</p>
              </div>
            )}
            {plan.title === "Enterprise" && (
              <div className="bg-[#0b82fa] m-auto w-[9rem] flex justify-center mt-4 font-semibold text-sm py-[0.4rem] px-5 rounded-lg">
                <p className="">Contact</p>
              </div>
            )}

            <ul className="mb-4 mt-4">
              {plan.features.map((feature, i) => (
                <div className="flex mt-1">
                  <div className="custom-checkbox mr-1"></div>
                  <li key={i} className="mb-2 text-sm">
                    {feature}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pcard;
