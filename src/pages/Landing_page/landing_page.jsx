"use client";
import React, { useState, useRef, useEffect } from "react";
import { GrFormNext } from "react-icons/gr";
import { PiHandTapFill, PiBowlFoodFill, PiBuildingsFill } from "react-icons/pi";
import { BsCardImage, BsLightningChargeFill } from "react-icons/bs";
import {
  MdVideoLibrary,
  MdOutlineDownloadDone,
  MdNavigateNext,
} from "react-icons/md";
import { FaCube, FaRegFilePdf, FaPalette, FaPlus } from "react-icons/fa";
import { TbVersionsFilled } from "react-icons/tb";
import { IoHeadset } from "react-icons/io5";
import { HiCursorClick, HiSpeakerphone } from "react-icons/hi";
import { FaEye } from "react-icons/fa6";
import { BiSolidNotification } from "react-icons/bi";
import { SiAdobecreativecloud } from "react-icons/si";
import { IoIosVideocam } from "react-icons/io";

import "../../App.css"; // Correct import for App.css
import { FcNext } from "react-icons/fc";
import Faq from "../../components/Landing/Faq";



export default function Home() {
  const qunality = [
    {
      src: "/image-3.png",
      title: "Anyone can give feedback",
      description:
        "No need to be an artist or technical specialist to provide feedback: Niimblr is designed for general use. Reviewers can point-and-click directly on the content to leave comments. 3D content can be annotated from specific angles, and videos can be annotated at precise timestamps.",
    },
    {
      src: "/image-4.png",
      title: "Complete process transparency",
      description:
        "A clear version history enables project members to collaborate on the latest version. Activity logs show you if clients have received and interacted with your content. A Kanban board visually represents stages in the production process.",
    },
    {
      src: "/image-5.png",
      title: "Works with 2D, 3D, Video, PDF and audio",
      description:
        "From architecture to spaceships: Niimblr supports all commonly used file types, including 2D, 3D, video, pdf and audio. Use the platform for product visualization, architectural design, 3D production, learning materials, and more.",
    },
    {
      src: "/alert.png",
      title: "Your intellectual property is safe with us",
      description:
        "Rest assured – your intellectual property is safe with us. Any work shared on our platform is only accessible to users authorized by you. Niimblr uses AWS infrastructure, a storage solution that meets the demanding industry standards for data protection to ensure the highest levels of encryption and security protocols.",
    },
  ];

  const formats = [
    {
      title: "2D Graphic",
      description: "JPG, PNG, GIF, TIFF",
    },
    {
      title: "Video",
      description: "MP4, MOV, MKV, WEBM",
    },
    {
      title: "3D",
      description: "GLB, GLTF, FBX, OBJ, STL",
    },
    {
      title: "PDF",
      description: "PDF, Documents",
    },
    {
      title: "Audio",
      description: "MP3, WAV",
    },
  ];

  const comments = [
    {
      name: "Emily R.",
      comment:
        '"Niimblr has transformed how I receive feedback from clients. The intuitive interface and the ability to annotate directly on the content have significantly reduced misunderstandings and project revisions."',
    },
    {
      name: "Emily R.",
      comment:
        '"The transparency and version control features on Niimblr are game-changers. We can easily track changes, see client interactions, and ensure everyone is on the same page. It’s streamlined our workflow immensely."',
    },
    {
      name: "Emily R.",
      comment:
        '"Finally, a platform that understands the needs of digital creators! Niimblr support for multiple file types, including 3D models and video annotations, is exactly what we needed to keep our projects on track."',
    },
    {
      name: "Emily R.",
      comment:
        '"Niimblr makes the feedback process so much smoother. Clients find it easy to use, and I get clear, actionable comments without endless email threads. Highly recommend it!"',
    },
    {
      name: "Alex P.",
      comment:
        '"Niimblr’s video annotation feature is superb. It allows my clients to give precise feedback at specific timestamps, saving us hours of back-and-forth communication."',
    },
    {
      name: "Emily R.",
      comment:
        '"Using Niimblr has improved our client relationships. The platform’s ease of use and comprehensive feedback tools have helped us deliver better results faster."',
    },
    {
      name: "Emily R.",
      comment:
        '"The integration of Kanban boards in Niimblr helps us visualize our project stages and ensure everyone is aware of their tasks and deadlines."',
    },
    {
      name: "Emily R.",
      comment:
        '"Niimblrs platform is a lifesaver! The ability to handle various file types and provide clear, concise feedback has significantly improved our design process and client satisfaction."',
    },
  ];

  const how = [
    {
      title: "One click is all it takes",
      description:
        "Invite your clients to review content by sharing a link. One click, and your client will be instantly taken to where their feedback is needed.",
    },
    {
      title: "See who did what",
      description:
        "Niimblr shows what content is planned, in progress, ready for review, or already approved in the history log. All actions are tracked and visualized; everyone can see who commented and when it was made.",
    },
    {
      title: "Never get lost between versions",
      description:
        "All previous versions are available,ensuring everyone is looking at thenewest version. Comparing versions makes it easy to inspect changes.",
    },
    {
      title: "Notifications to speed up action",
      description:
        "Your clients are busy people, and so are you. Niimblr will help you nudge all collaborators into taking action to minimize waiting time.",
    },
    {
      title: "Get things done",
      description:
        "Niimblr’s unique Creator & Approver workflow leads to fewer misunderstandings and faster iteration cycles",
    },
    {
      title: "Works with your creative suite",
      description:
        "Niimblr is the link between your suite of creative tools and your asset storage systems.",
    },
  ];

  const professions = [
    {
      id: 1,
      name: "3D Artists",
    },
    {
      id: 2,
      name: "Designers",
    },
    {
      id: 3,
      name: "Video Editors",
    },
    {
      id: 4,
      name: "Marketing Creatives",
    },
    {
      id: 5,
      name: "Architects",
    },
    {
      id: 6,
      name: "Engineers",
    },
    {
      id: 7,
      name: "Many More",
    },
  ];

  

  const [isRotating, setIsRotating] = useState(true);
  const timerRef = useRef(null);

  const handleMouseDown = () => {
    timerRef.current = setTimeout(() => {
      setIsRotating(false);
    }, 10000); // Adjust the timeout duration as needed
  };

  const handleMouseUp = () => {
    clearTimeout(timerRef.current);
    setIsRotating(true);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div>
      <div className="lg:flex">
        <div className="lg:ml-[10rem] justify-between  ml-[1rem]">
          <p className="lg:text-[3rem] lg:block hidden leading-tight font-semibold lg:mt-[6rem] mt-[1rem]">
            The client <br />
            <span className="text-[#0b82fa] underline">feedback </span>
            &nbsp;platform <br />
            for digital creators
          </p>
          <p className="text-[2.4rem] lg:hidden leading-tight font-semibold mt-[3rem]">
            The client <br />
            <span className="text-[#0b82fa] underline">
              feedback
              <br />
            </span>
            platform for <br />
            digital creators
          </p>

          <p className="mt-4 text-[#abacac] text-md">
            Niimblr improves digital creators' production process, for fewer
            <br />
            iterations and better client relations.
          </p>
          <div className="bg-[#0b82fa] my-5 lg:ml-0  items-center justify-between font-semibold text-xl py-3 px-5 rounded-xl w-[18rem] flex">
            <p className="">Get Started - It's free</p>
            <GrFormNext className="font-bold" />
          </div>
          <p className="text-[#abacac]">
            Free forever. <span className="text-[white]">No credit card </span>
            required
          </p>
        </div>

        <div className="ml-[0rem] my-[1rem]">
          <img src="/1_Hero_Active-2.png" className="lg:h-[31rem]" alt="Hero" />
        </div>
      </div>
      <div className="flex items-center justify-center lg:mt-[7rem] mt-[5rem]">
        <PiHandTapFill className="text-[#0b82fa]" size={40} />
      </div>
      <p className="text-[2.5rem]  hidden font-semibold mt-4 lg:flex justify-center">
        Who said <span className="text-[#0b82fa]">&nbsp;what, and when?</span>
      </p>
      <div className="leading-tight">
        <p className="text-[2rem] lg:hidden font-semibold mt-4 flex justify-center">
          Who said <span className="text-[#0b82fa]">&nbsp;what, and</span>
        </p>
        <p className="text-[2rem] lg:hidden font-semibold flex justify-center">
          when?
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <p className="grid text-center lg:text-md text-[17px] px-2 text-[#abacac]">
          Feedback is time-consuming and confusing for digital creators and
          clients.
          <br />
          Miscommunication leads to conflicts and delays. A collaborative
          feedback
          <span className="mx-auto">
            {" "}
            platform eliminates these issues. See how it works.
          </span>
        </p>
      </div>
      <div className="lg:flex justify-center hidden  my-10">
        <iframe
          width="900"
          height="500"
          className="rounded-3xl"
          src="https://www.youtube.com/embed/Aea4YG4N288?si=Q3vnFiHPhIJJD69b"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* for mobile view */}
      <div className="flex justify-center lg:hidden mx-3  my-10">
        <iframe
          width="400"
          height="200"
          className="rounded-3xl"
          src="https://www.youtube.com/embed/Aea4YG4N288?si=Q3vnFiHPhIJJD69b"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="leading-tight">
        <p className="flex justify-center lg:text-[3rem] pt-5 text-[2.1rem] font-semibold ">
          Fewer iterations,
        </p>

        <p className="flex justify-center lg:text-[3rem] text-[2.1rem] font-semibold ">
          better client relations{" "}
        </p>
      </div>
      <div className="mt-10 lg:mx-[6rem] mx-[1rem] items-center justify-between">
        {qunality.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between shadow-2xl p-5 rounded-2xl lg:flex-row ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse"
            } items-center mb-10`}
            style={{
              background:
                "linear-gradient(135deg, #1e293b 0%, #1e293b 25%, #0f687e 50%, #1e293b 75%, #1e293b 100%)",
            }}
          >
            <div className="lg:w-1/2">
              <h2 className="lg:text-[2.4rem] text-[1.5rem] leading-tight font-semibold mb-2">
                {item.title}
              </h2>
              <p className="lg:text-[15px] text-[17px]  text-[#abacac]">
                {item.description}
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src={item.src}
                className="max-w-full lg:h-60"
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="justify-center mt-[6rem]">
        <p className="lg:text-[3.2rem] text-[2.2rem] justify-center flex font-semibold">
          Supported formats
        </p>
        <p className="lg:text-md text-[16px] mx-2 text-center flex justify-center text-[#abacac]">
          Feedback is time-consuming and confusing for digital creators and
          clients.{" "}
        </p>
        <p className="lg:text-md text-[16px] mx-2 flex justify-center text-[#abacac]">
          Miscommunication leads to conflicts and delays.
        </p>
        <div className="mt-10 grid grid-cols-1 lg:flex lg:justify-center  gap-4 mx-10 lg:mx-[8rem]">
          {formats.map((format, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl shadow-2xl lg:w-[13rem] w-[20rem] text-white"
              style={{
                background:
                  "linear-gradient(180deg, #1e293b 0%, #344561 5%, #1e293b 100%, #1e293b 100%, #1e293b 100%)",
                border: "0.1px solid gray",
              }}
            >
              <div className="flex justify-center items-center mb-4">
                {format.title === "2D Graphic" && (
                  <BsCardImage size={40} className="" />
                )}
                {format.title === "Video" && (
                  <MdVideoLibrary size={40} className="" />
                )}
                {format.title === "3D" && <FaCube size={40} className="" />}
                {format.title === "PDF" && (
                  <FaRegFilePdf size={40} className="" />
                )}
                {format.title === "Audio" && (
                  <IoHeadset size={40} className="" />
                )}
              </div>
              <h2 className="text-[1.5rem] flex justify-center font-semibold mb-2">
                {format.title}
              </h2>
              <p className="text-[13px] text-[#abacac] flex justify-center">
                {format.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="lg:text-[3.2rem] text-[2.2rem] justify-center flex font-semibold mt-[6rem]">
        What users say
      </p>
      <p className="lg:text-lg text-md lg:flex lg:justify-center mx-2 text-center text-[#abacac]">
        Read why thousands of creatives, marketers and entrepreneurs love us so
        much.
      </p>

      <div
        className="flex justify-center items-center mt-20 overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div
          className={`carousel gap-10 ${isRotating ? "rotate" : ""}`}
          style={{ width: "250%", height: "300px" }}
        >
          {comments.map((comment, index) => (
            <div
              key={index}
              className="carousel-item p-4 gap-2 rounded-2xl shadow-2xl flex flex-col  text-white"
              style={{
                background: `linear-gradient(
                  180deg, 
                  #1e293b 0%, 
                  #344561 5%, 
                  #1e293b 100%,
                  #1e293b 100%,
                  #1e293b 100%
                )`,
                border: "0.1px solid gray",
              }}
            >
              <p className="text-md text-[#cacaca] italic">{comment.comment}</p>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full justify-start w-[3rem]"
                  src="/Niimbee.png"
                />
                <p className="text-[#cacaca] font-semibold">{comment.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* desktop view */}
      <div className="mt-10 lg:block hidden">
        <div
          className={`carousel gap-10 ${isRotating ? "rotate" : ""}`}
          style={{ width: "110%", height: "250px" }}
        >
          {comments.map((comment, index) => (
            <div
              key={index}
              className="carousel-item p-4 gap-2 rounded-2xl shadow-2xl flex flex-col  text-white"
              style={{
                background: `linear-gradient(
                  180deg, 
                  #1e293b 0%, 
                  #344561 5%, 
                  #1e293b 100%,
                  #1e293b 100%,
                  #1e293b 100%
                )`,
                border: "0.1px solid gray",
              }}
            >
              <p className="text-md italic text-[#cacaca]">{comment.comment}</p>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full justify-start w-[3rem]"
                  src="/Niimbee.png"
                />
                <p className="text-[#cacaca] font-semibold">{comment.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* mobile view */}
      <div className="mt-10 lg:hidden">
        <div
          className={`carousel gap-10 ${isRotating ? "rotate" : ""}`}
          style={{ width: "300%", height: "250px" }}
        >
          {comments.map((comment, index) => (
            <div
              key={index}
              className="carousel-item p-4 gap-2 rounded-2xl shadow-2xl flex flex-col  text-white"
              style={{
                background: `linear-gradient(
                  180deg, 
                  #1e293b 0%, 
                  #344561 5%, 
                  #1e293b 100%,
                  #1e293b 100%,
                  #1e293b 100%
                )`,
                border: "0.1px solid gray",
              }}
            >
              <p className="text-md italic text-[#cacaca]">{comment.comment}</p>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full justify-start w-[3rem]"
                  src="/Niimbee.png"
                />
                <p className="text-[#cacaca] font-semibold">{comment.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="leading-tight">
        <p className="lg:text-[3.2rem] text-[2.2rem] justify-center flex font-semibold mt-[6rem]">
          It's simpler with
        </p>
        <p className="lg:text-[3.2rem] text-[2.2rem] justify-center flex font-semibold ">
          Niimblr
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:mx-[10rem] mx-[2rem] lg:justify-center">
        {how.map((format, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl shadow-2xl  text-white"
            style={{
              background:
                "linear-gradient(180deg, #1e293b 0%, #344561 5%, #1e293b 100%, #1e293b 100%, #1e293b 100%)",
              border: "0.1px solid #969696",
            }}
          >
            <div className="">
              {format.title == "One click is all it takes" && (
                <HiCursorClick
                  className="bg-[#425779] rounded-full p-2"
                  size={40}
                />
              )}
              {format.title == "See who did what" && (
                <FaEye className="bg-[#425779] rounded-full p-2" size={40} />
              )}

              {format.title == "Never get lost between versions" && (
                <TbVersionsFilled
                  className="bg-[#425779] rounded-full p-2"
                  size={40}
                />
              )}

              {format.title == "Notifications to speed up action" && (
                <BiSolidNotification
                  className="bg-[#425779] rounded-full p-2"
                  size={40}
                />
              )}

              {format.title == "Get things done" && (
                <MdOutlineDownloadDone
                  className="bg-[#425779] rounded-full p-2"
                  size={40}
                />
              )}

              {format.title == "Works with your creative suite" && (
                <SiAdobecreativecloud
                  className="bg-[#425779] rounded-full p-2"
                  size={40}
                />
              )}
            </div>
            <div className="flex justify-center items-center mb-4">
              {format.title === "2D Graphic" && (
                <BsCardImage size={40} className="" />
              )}
              {format.title === "Video" && (
                <MdVideoLibrary size={40} className="" />
              )}
              {format.title === "3D" && <FaCube size={40} className="" />}
              {format.title === "PDF" && (
                <FaRegFilePdf size={40} className="" />
              )}
              {format.title === "Audio" && <IoHeadset size={40} className="" />}
            </div>
            <h2 className="text-[1.5rem]  font-semibold mb-2">
              {format.title}
            </h2>
            <p className="text-[15px] text-[#abacac] ">{format.description}</p>
          </div>
        ))}
      </div>
      <div className="lg:m-0 mx-5 flex items-center justify-center lg:h-screen my-16">
        <div
          className="px-4 lg:py-10 py-2 rounded-2xl grid shadow-2xl w-[70rem] text-white"
          style={{
            background:
              "linear-gradient(180deg, #1e293b 0%, #1e293b 5%, #122f4b 100%, #1e293b 100%, #1e293b 100%)",
          }}
        >
          <p className="lg:text-[3.2rem] text-[2rem] justify-center flex font-bold">
            Get more work done
          </p>
          <p className="lg:text-xl text-center text-md mt-5 text-[#cacaca] justify-center flex">
            Start using Niimblr today and see what a difference it can make to
            your
          </p>
          <p className="lg:text-xl text-center text-md p-1 text-[#cacaca] justify-center flex">
            daily back and forth with clients. Simply sign up, create a project,
            and
          </p>
          <p className="lg:text-xl text-center text-md p-1 text-[#cacaca] justify-center flex">
            you are ready for a new way of working with content feedback.
          </p>
          <p className="lg:text-xl text-center text-md p-1 text-[#cacaca] justify-center flex">
            Trust us; you will not want to go back
          </p>
          <div className="bg-[#0b82fa] mt-[2rem] mb:-[1.5rem] lg:mb-[2rem] mx-auto items-center justify-between  font-semibold text-sm lg:text-xl  px-5 mb-3 rounded-xl lg:w-[20rem] w-[15rem] flex">
            <p className=" py-3 pb-3">Create Your Free Account</p>
            <GrFormNext />
          </div>
        </div>
      </div>
      <p className="text-[#0d80fa] text-xl flex justify-center font-semibold">
        Are you a creator?
      </p>

      <p className="lg:text-[3.2rem] text-[2.2rem] text-center mx-[1.2rem] lg:mx-0 justify-center flex font-semibold">
        Your clients will love it
      </p>

      <p className="text-md flex justify-center mx-[1.2rem] text-center lg:mx-0 text-[#abacac]">
        Niimblr is the preferred feedback platform for client-facing
        professions, including:
      </p>
      <div className="mt-4 gap-4 flex flex-wrap lg:flex lg:mx-[10rem] mx-[3rem]  justify-center">
        {professions.map((id, name) => (
          <div
            key={id}
            className="p-3 rounded-full shadow-2xl  text-white"
            style={{
              background:
                "linear-gradient(180deg, #1e293b 0%, #0f172a 5%, #1e293b 100%, #1e293b 100%, #1e293b 100%)",
              border: "0.1px solid #969696",
            }}
          >
            <div className="flex justify-between items-center">
              {id.id == 1 && <PiBowlFoodFill />}
              {id.id == 2 && <FaPalette />}
              {id.id == 3 && <IoIosVideocam />}
              {id.id == 4 && <HiSpeakerphone />}
              {id.id == 5 && <PiBuildingsFill />}
              {id.id == 6 && <BsLightningChargeFill />}
              {id.id == 7 && <FaPlus />}
              <p className="ml-1 font-semibold text-[13.5px]">{id.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:flex text-center lg:mx-[11rem] mx-[2rem]">
        <div>
          <p className="lg:text-md text-[17px] mt-16 text-[#cacaca]">
            Niimblr empowers your clients to provide clear and transparent
            feedback. Everything agreed upon is visible on the platform,
            eliminating discussions and confusion. Clients can easily access and
            review files in 2D, 3D, or video and download them directly from the
            platform.
          </p>
          <p className="lg:text-md text-[17px] mt-8 text-[#cacaca]">
            No special setup or artist assistance needed – simply send them an
            invite link to Niimblr and they are ready to provide feedback.
          </p>
          <div className="bg-[#0b82fa] my-5 mx-auto lg:ml-0  mt-7 items-center justify-between  text-lg py-3 px-5 rounded-xl w-[12rem] flex">
            <p className="">Try for free</p>
            <GrFormNext className="font-bold" />
          </div>
        </div>
        <img
          src="/image-6.png"
          className="h-[16rem] lg:block hidden ml-12 mt-16"
        />
      </div>
      <div className="bg-[#1e1e1e] lg:pl-[11rem] px-[1rem] lg:pr-[8rem] lg:py-[5rem] py-[2rem] lg:flex">
        <img src="/Founders.png" className="lg:h-[22rem] py-[1rem] " />
        <div className="lg:ml-[2rem]">
          <p className="text-[#0d80fa] text-xl lg:text-start text-center font-bold">
            The Team
          </p>
          <p className="lg:text-[3rem] text-[2.2rem] lg:text-start text-center justify-center pt-2 flex font-semibold leading-tight">
            Meet the amazing Creators of Niimblr
          </p>
          <p className="lg:text-md text-center text-[17px] lg:text-start mt-6 text-[#cacaca]">
            The Niimblr platform is designed by a team with 45+ years of
            experience in product visualization, game design, engineering, and
            more.
          </p>
          <p className="lg:text-md text-[17px] mt-5 text-center lg:text-start text-[#cacaca]">
            We founded our company in 2021 in Copenhagen, Denmark, with the
            mission of revolutionizing the feedback process between digital
            creators and their clients.
          </p>
        </div>
      </div>
      <p className="text-[#0d80fa] text-lg font-semibold mt-8 flex justify-center">
        Still confused
      </p>
      <div className="leading-tight">
        <p className="lg:text-[3.2rem] hidden justify-center pt-2 lg:flex font-semibold leading-tight">
          See the Frequently Asked
        </p>
        <p className="lg:text-[3.2rem] hidden justify-center  lg:flex font-semibold leading-tight">
          {" "}
          Questions
        </p>
        <p className="lg:hidden text-center text-[2.2rem] justify-center pt-2 flex font-semibold leading-tight">
          See the Frequently Asked Questions
        </p>
        <p className="text-md text-center lg:p-1 p-5 leading-tight text-[#cacaca] justify-center flex">
          You ask. We tell. We have compiled the answers to some of the most
          asked questions.
        </p>
        <p className="text-md  text-center lg:p-0 px-5 text-[#cacaca] justify-center lg:flex">
          Should you need more information, do not hesitate to&nbsp;{" "}
          <span className="text-[#0d80fa] font-semibold underline">
            contact us
          </span>
          .
        </p>
      </div>
      <Faq/>
      <div
        className=" py-[4rem] bg-[#48a1fb]"
        // style={{
        //   background:
        //     "linear-gradient(180deg, #48a1fb 0%, #1989fa 5%, #48a1fb 100%, #48a1fb 100%, #48a1fb 100%)",
        // }}
      >
        <p className="lg:text-[3.2rem] mx-[1rem] lg:mx-[0rem] text-[2.2rem] text-center font-semibold flex justify-center text-black mb-[1rem]">
          Ready to get started?
        </p>
        <p className="font-light flex  text-md mx-[2rem] lg:mx-[0rem] text-black justify-center">
          Start using Niimblr today and see what a difference it can make to
          your daily back and
        </p>
        <p className="font-light text-md mx-[2rem] lg:mx-[0rem] text-black flex items-center justify-center">
          forth with clients. Simply sign up, create a project, and you are
          ready for a new way of
        </p>
        <p className="font-light text-md text-black flex justify-center">
          working with content feedback
        </p>
        <div className="bg-black mt-[2rem] w-[11rem] mx-auto rounded-lg flex justify-center">
          <p className="text-white px-5 py-4 text-[1rem] flex justify-center ">
            Sign up for free
          </p>
        </div>
        <p className="font-light text-md text-black flex pt-2 justify-center">
          Free forever.<span className="font-semibold "> No credit card </span>{" "}
          &nbsp;required
        </p>
      </div>
    </div>
  );
}
