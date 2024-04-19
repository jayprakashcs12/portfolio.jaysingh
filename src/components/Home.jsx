import React from "react";
import proPic from "../assets/images/photo.avif";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

export default function Home() {

  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-40 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped className="text-blue-700 font-bold" strings={["Front-End Developer", "ReactJS Developer", "UI Developer"]} 
                typeSpeed={40} backSpeed={50} loop={true} />
            </div>
            <br />
            <p className="pro-text">
              Hi, my name is Jay Prakash Singh. I am a passionate web developer with a keen eye for ReactJS, striving to create impactful and visually 
              stunning software solutions with an IT background.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-left">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/jayprakashcs12/" target="_blank">
                      <FaGithub size={40} className="text-2xl rounded-lg py-2 px-3 md:text-3xl hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/jay-prakash-singh-028957128/" target="_blank">
                      <FaLinkedinIn size={40} className="text-2xl rounded-lg py-2 px-3 md:text-3xl hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/jayprakash199221/" target="_blank">
                      <FaFacebookF size={40} className="text-2xl rounded-lg py-2 px-3 md:text-3xl hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-left">Currently Working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb size={45} className="text-3xl rounded-lg py-2 px-3 md:text-3xl hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
                  <SiExpress size={45} className="text-3xl rounded-lg py-2 px-3 md:text-3xl hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
                  <FaReact   size={45} className="text-3xl rounded-lg py-2 px-3 md:text-3xl hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
                  <FaNodeJs  size={45} className="text-3xl rounded-lg py-2 px-3 md:text-3xl hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-6 order-1">
            <img src={proPic} className="rounded-full md:w-[450px] md:h-[450px]" alt={proPic} />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}