import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {

  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/jayprakash199221/" target="_blank">
                <FaFacebookF size={45} className="text-3xl rounded-lg py-2 px-3 md:text-3xl hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
              </a>
              <a href="https://twitter.com/jayprakash2108" target="_blank">
                <FaTwitter size={45} className="text-3xl rounded-lg py-2 px-3 md:text-3xl hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/jayprakashsingh10031/" target="_blank">
                <FaInstagram size={45} className="text-3xl rounded-lg py-2 px-3 md:text-3xl hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/jay-prakash-singh-028957128/" target="_blank">
                <FaLinkedinIn size={45} className="text-3xl rounded-lg py-2 px-3 md:text-3xl hover:scale-105 duration-200 border-2 border-blue-400 hover:border-blue-800 hover:text-blue-500 cursor-pointer" />
              </a>
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