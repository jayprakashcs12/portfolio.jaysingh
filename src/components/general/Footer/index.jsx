import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CommonWidth } from "../CommonWidth";

export default function Footer() {

  let deviceWidth = CommonWidth();
  let proSize = deviceWidth > 768 ? 45 : (deviceWidth < 768 ? 30 : 40);
  let padding = deviceWidth < 768 ? 'px-1 py-1' : 'px-3 py-2';

  let footClassName = `text-3xl rounded-lg md:text-2xl md:px-2 ${padding} hover:scale-105 duration-200 border-2 
  border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer`

  let socialMediaLinks = [
    { socialIcon: FaFacebookF, socialURL: 'https://www.facebook.com/jayprakash199221/' },
    { socialIcon: FaTwitter, socialURL: 'https://twitter.com/jayprakash2108/' },
    { socialIcon: FaInstagram, socialURL: 'https://www.instagram.com/jayprakashsingh10031/' },
    { socialIcon: FaLinkedinIn, socialURL: 'https://www.linkedin.com/in/jay-prakash-singh-028957128/' },
  ];

  return (
    <>
      <hr className="border-b border-gray-400 border-opacity-50" />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.socialURL} target="_blank">
                  <link.socialIcon style={{ fontSize: proSize }} className={footClassName} />
                </a>
              ))}
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col text-center">
              <p className="text-sm">Developed By Jay Prakash Singh</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}