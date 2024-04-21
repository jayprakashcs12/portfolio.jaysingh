import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import proPic from "../assets/images/photo.avif";
import { CommonWidth } from './CommonWidth';
import { ReactTyped } from "react-typed";


export default function Home({theme}) {

  let deviceWidth = CommonWidth();
  let colAlign = deviceWidth >= 320 && deviceWidth <= 1199 ? 'flex-col-reverse' : '';
  let display = deviceWidth >= 1199 ? 'flex-row justify-between items-center' : (deviceWidth > 767 ? 'flex-col items-start' : 'flex-col items-center');
  
  let socialMediaLinks = [
    { socialIcon: FaGithub, socialUrl: "https://github.com/jayprakashcs12/" },
    { socialIcon: FaLinkedinIn, socialUrl: "https://www.linkedin.com/in/jay-prakash-singh-028957128/" },
    { socialIcon: FaFacebookF, socialUrl: "https://www.facebook.com/jayprakash199221/" },
    { socialIcon: FaInstagram, socialUrl: "https://www.instagram.com/jayprakashsingh10031/" },
  ];

  let proSize = deviceWidth >= 767 ? 45 : (deviceWidth < 767 ? 40 : 30);
  let padding = deviceWidth >= 767 ? 'px-3 py-2' : 'px-1 py-1';
  
  let proClass = `text-3xl rounded-lg md:text-2xl md:px-2 ${padding} hover:scale-105 duration-200 border-2 
    border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer ${proSize}`;

  let textAlign = deviceWidth > 767 ? 'text-left' : 'text-center';
  
  return (
    <div className={`container ${theme}`}>
      <div name="Home" className={`max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 ${theme}`}>
        <div className={`flex ${display} ${colAlign} ${theme}`}>

          {/* Profile Information Here */}
          <div className="mt-10 md:mt-10 space-y-2 order-2 md:order-1">
            <h1 className="text-3xl font-bold text-left">Jay Prakash Singh</h1>
            <div className="flex space-x-1 text-2xl md:text-2.5xl">
              <ReactTyped className="text-blue-700 font-bold" strings={["Front-End Developer", "ReactJS Developer", "UI Developer"]}
                typeSpeed={40} backSpeed={50} loop={true} />
            </div>
            <p className="pro-text">
              Hi, my name is Jay Prakash Singh. I am a passionate web developer with a keen eye for ReactJS, striving to create impactful and visually
              stunning software solutions with an IT background.
            </p>

            {/* Social Here */}
            <div className={`flex ${display}`}>
              <div className={`${deviceWidth > 1200 ? '' : 'mt-2'}`}>
                <h1 className={`font-bold ${textAlign}`}>Available on</h1>
                <ul className="flex flex-row space-x-2 md:space-x-1 mt-2">
                  {socialMediaLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.socialUrl} target="_blank">
                        <link.socialIcon style={{ fontSize: proSize }} className={proClass} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${deviceWidth > 1200 ? '' : 'mt-4'}`}>
                <h1 className={`font-bold ${textAlign}`}>Currently Working on</h1>
                <div className="flex flex-row space-x-2 md:space-x-1 mt-2">
                  <SiMongodb style={{ fontSize: proSize }} className={proClass} />
                  <SiExpress style={{ fontSize: proSize }} className={proClass} />
                  <FaReact style={{ fontSize: proSize }} className={proClass} />
                  <FaNodeJs style={{ fontSize: proSize }} className={proClass} />
                </div>
              </div>
            </div>
            {/* Social Here */}

          </div>
          {/* Profile Information Here */}
          
          {/* Profile Pic Here */}
          <div className={`mx-auto order-2 ${deviceWidth > 1119 ? 'ml-48 mt-20' : 'mt-10'}`}>
            <img src={proPic} alt={proPic} className="rounded-full w-full h-auto" style={{ maxWidth: "100%", borderRadius: "50%" }} />
          </div>
          {/* Profile Pic Here */}
          
        </div>
      </div>
      <hr className="border-b border-gray-400 border-opacity-50" />
    </div>
  )
}