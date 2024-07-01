// import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  const closeMenu=()=>{
    setShow(false);
  }
  return (
    <div className="min-h-[80px] py-2 shadow-xl w-screen">
      <div className="flex justify-between px-2 sm:px-4 md:px-8 lg:px-16 xl:px-20">
        <div>
          <img src={logo} alt="" className="w-full h-[60px] z-50" />
        </div>
        <div className="hidden lg:flex  justify-center items-center gap-4 lg:gap-10">
          <p className="font-medium cursor-pointer">Pricing</p>
          <p className="font-medium cursor-pointer">Blog</p>
          <p className="bg-slate-800 border-gray-500 border-[1px] rounded py-2.5 px-8 hover:bg-slate-950 hover:text-white font-semibold cursor-pointer">
            Log In
          </p>
          <p className="bg-blue-600 text-white px-12 rounded py-2.5 hover:bg-slate-950 hover:text-white font-semibold cursor-pointer text-lg">
            Get Started
          </p>
        </div>
        <div
          onClick={toggleMenu}
          className="flex lg:hidden justify-center items-center text-white"
        >
          {show ? <FaTimes size={32} className="text-white z-50"/> : <FaBars size={32} className="text-white z-50"/>}
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-screen h-screen bg-slate-950 flex justify-center items-center lg:hidden z-30"
          >
            <div className="flex flex-col justify-center items-center gap-8">
              <p onClick={closeMenu} className="font-medium cursor-pointer">Pricing</p>
              <p onClick={closeMenu} className="font-medium cursor-pointer">Blog</p>
              <p onClick={closeMenu} className="bg-slate-800 border-gray-500 border-[1px] rounded py-2.5 px-8 hover:bg-slate-950 hover:text-white font-semibold cursor-pointer">
                Log In
              </p>
              <p onClick={closeMenu} className="bg-blue-600 text-white px-12 rounded py-2.5 hover:bg-slate-950 hover:text-white font-semibold cursor-pointer text-lg">
                Get Started
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
