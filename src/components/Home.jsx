import React, { useEffect, useState } from "react";
import proPic from "../assets/images/photo.avif";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";
import { ReactTyped } from "react-typed";

export default function Home() {

  let socialMediaLinks = [
    { name: "GitHub", socialUrl: "https://github.com/jayprakashcs12/", icon: FaGithub },
    { name: "LinkedIn", socialUrl: "https://www.linkedin.com/in/jay-prakash-singh-028957128/", icon: FaLinkedinIn },
    { name: "Facebook", socialUrl: "https://www.facebook.com/jayprakash199221/", icon: FaFacebookF }
  ];

  let [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    let handleResize = () => { setDeviceWidth(window.innerWidth); };
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, []);

  let proSize = deviceWidth > 768 ? 45 : (deviceWidth < 768 ? 35 : 40);

  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mt-10 md:mt-40 space-y-2 order-2 md:order-1">
            <h1 className="font-bold text-left">Jay Prakash Singh</h1>
            <div className="flex space-x-1 text-2xl md:text-2.5xl">
              <ReactTyped className="text-blue-700 font-bold" strings={["Front-End Developer", "ReactJS Developer", "UI Developer"]} 
                typeSpeed={40} backSpeed={50} loop={true} />
            </div>
            <p className="pro-text">
              Hi, my name is Jay Prakash Singh. I am a passionate web developer with a keen eye for ReactJS, striving to create impactful and visually 
              stunning software solutions with an IT background.
            </p>
            {/* Social Here */}
            <div className="flex flex-col md:flex-row justify-between align-middle space-y-6 md:space-y-0 mt-10">
              <div>
                <h1 className="font-bold text-left">Available on</h1>
                <ul className="flex flex-row space-x-2 md:space-x-1 mt-2">
                  {socialMediaLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.socialUrl} target="_blank">
                        <link.icon style={{ fontSize: proSize }} className="text-2xl rounded-lg py-2 px-3 md:text-3xl md:px-2 hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="font-bold text-left">Currently Working on</h1>
                <div className="flex flex-row space-x-2 md:space-x-1 mt-2">
                  <SiMongodb style={{ fontSize: proSize }} className="text-3xl rounded-lg py-2 px-3 md:text-3xl md:px-2 hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
                  <SiExpress style={{ fontSize: proSize }} className="text-3xl rounded-lg py-2 px-3 md:text-3xl md:px-2 hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
                  <FaReact   style={{ fontSize: proSize }} className="text-3xl rounded-lg py-2 px-3 md:text-3xl md:px-2 hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
                  <FaNodeJs  style={{ fontSize: proSize }} className="text-3xl rounded-lg py-2 px-3 md:text-3xl md:px-2 hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
                </div>
              </div>
            </div>
            {/* Social Here */}
          </div>
          <div className="md:ml-48 md:mt-20 mt-6 order-1">
            <img src={proPic} className="rounded-full md:h-[350px] md:w-[550px] mt-10 md:mt-0" alt={proPic} />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}