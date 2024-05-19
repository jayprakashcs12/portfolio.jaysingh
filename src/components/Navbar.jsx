import React, { useState } from "react";
import proPic from "../assets/images/photo1.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

export default function Navbar() {

  let [menu, setMenu] = useState(false);

  let navItems = [
    { id: 1, text: "Home", },
    { id: 2, text: "About Us", },
    { id: 3, text: "Experience", },
    { id: 4, text: "Contact Us", },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-10 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="pro-nav-img flex justify-between items-center space-x-2">
            <img src={proPic} className="h-12 w-12 rounded-full" alt={proPic} />
            <h1 className="font-semibold text-xl cursor-pointer">
              Jay Prakash <span className="text-blue-700 text-2xl">Singh</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div className="cursor-pointer">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li key={id} className="cursor-pointer">
                  <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
          {/* desktop navbar */}
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center text-xl">
              {navItems.map(({ id, text }) => (
                <li key={id} className="cursor-pointer mt-5">
                  <Link onClick={() => setMenu(!menu)} to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* mobile navbar */}
      </div>
    </>
  );
}