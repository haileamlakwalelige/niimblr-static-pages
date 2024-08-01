"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";

const FAQItem = ({ question, answer, index, isOpen, toggleOpen }) => (
  <div className="bg-[#5c5c5c] hover:bg-[#1a3046] hover:border hover:border-[#0d80fa] flex flex-col rounded-xl w-full mt-5">
    <div
      className="flex justify-between hover:bg-[#1a3046] items-center w-full cursor-pointer"
      onClick={() => toggleOpen(index)}
    >
      <p className="text-lg font-semibold lg:p-4 p-2">{question}</p>
      <MdNavigateNext
        className={`pr-4 transition-transform duration-500 ${
          isOpen ? "rotate-90" : ""
        }`}
        size={36}
      />
    </div>
    <div
      className={`overflow-hidden hover:bg-[#1a3046]  transition-max-height duration-500 ease-in-out ${
        isOpen ? "max-h-screen" : "max-h-0"
      }`}
      style={{ backgroundColor: "#5c5c5c" }}
    >
      <ul className="text-sm  hover:bg-[#1a3046] lg:px-16 px-8 float-start justify-start text-[#cacaca] list-disc list-inside">
        {answer.map((text, idx) => (
          <li key={idx}>{text}</li>
        ))}
      </ul>
    </div>
  </div>
);

const faqs = [
  {
    question: "Do my clients need to have a paid account on Niimblr?",
    answer: [
      "No, your clients will NEVER have to pay anything.",
      "We do ask yourclients to leave their name and email so you can be confident about who left it and so we can reach out to that person on replies.",
      "As long as your account has storage, anyone can upload, annotate, and approve content in your projects.",
    ],
  },
  {
    question: "How do I share assets? Can I just send links?",
    answer: [
      "Hey – that was two questions 😉",
      "By default, all assets are“private”, available for all project members only.",
      "You can use the “share” option to make an asset visible for anyone with the link.",
      " Share the link on your favorite communication channel like slack, messenger, whatsapp or in good ol’ email.",
      "You can even insert links in MIRO or other collaboration tools if you want to make sure that everyone always finds the latest version of the content.",
    ],
  },
  {
    question: "How do I upload assets?",
    answer: [
      "Drag and drop files onto the new asset buttons for a speedy upload.",
      "Alternatively, click the grey upload icon and use the file explorer to find and upload assets. Each file retains its original name.",
      "Create empty containers to plan for future assets and effectively scope your project.",
    ],
  },
  {
    question: "How do I upload new versions?",
    answer: [
      "Navigate to the asset, then use the app version function to stack a new version on top of the old one.",
      "For 2D and 3D types, utilize the compare function to easily spot differences between old and new versions.",
    ],
  },
  {
    question: "How do I download finished assets?",
    answer: [
      "For already approved assets, use the download function directly.",
      "For any other asset, simply click the three dots in the corner of the desired image and press download.",
    ],
  },
  {
    question: "How can I share reference files or other documents?",
    answer: [
      "In the project description, outline project goals and attach documents, images, or files as references.",
      "When commenting on specific assets, feel free to attach images, documents, and more to provide examples and references for changes you’d like.",
    ],
  },
  {
    question: "I have a feature request. Who can I reach out to?",
    answer: [
      "We welcome your ideas for Nimblr improvements!",
      "Reach out to us at info@nimblr.com",
    ],
  },
  {
    question:
      "What is the difference between a free account and a paid account?",
    answer: [
      "Anyone can try Niimblr for free, but there are limits on projects and storage for free accounts.",
      "Once you get the hang of Niimblr, upgrade to a paid plan that suits your needs.",
      "For larger teams, reach out to discuss custom solutions—we’re eager to work with you!",
    ],
  },
];
function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleOpen = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      
      <div className="flex flex-col lg:mx-[11rem] mx-[1rem] items-center justify-start mb-[2rem]  ">
        <div className="flex  flex-col  items-center w-full mt-3 lg:mt-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              toggleOpen={toggleOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
