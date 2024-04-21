import React from "react";
import JavaScript from "../assets/images/javascript.png";
import bootStrap from "../assets/images/bootstrap.png";
import ReactJS from "../assets/images/reactjs.png";
import HTML from "../assets/images/html.png";
import { CommonWidth } from './CommonWidth';
import CSS from "../assets/images/css.png";

export default function Experience() {

  let deviceWidth = CommonWidth();

  let techItems = [
    { id: 1, techLogo:HTML,   techName:"HTML"},
    { id: 2, techLogo: CSS, techName: "CSS" }, 
    { id: 3, techLogo: bootStrap, techName: "BootStrap" }, 
    { id: 4, techLogo: JavaScript, techName: "JavaScript" },
    { id: 5, techLogo: ReactJS, techName: "ReactJS" }
  ];

  let padding = deviceWidth > 767 ? 'justify-between' : (deviceWidth < 767 ? 'justify-center' : 'justify-start');

  let expClass ="flex flex-col items-center justify-center rounded-full border-[1px] w-[200px] h-[200px] shadow-md p-1 cursor-pointer hover:scale-105 duration-300 mx-2 my-2"

  return (
    <>
      <hr className="border-b border-gray-400 border-opacity-50" />
      <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <h1 className="text-3xl font-bold mb-3">Experience</h1>
        <span>I've more than 2+ years of Experience in below technologies.</span>
        <div className={`flex flex-wrap ${padding} my-3 mt-5`}>
          {techItems.map(({ id, techLogo, techName }) => (
            <div key={id} className={expClass}>
              <img src={techLogo} className="exp-img" alt={techLogo} />
              <div className="">{techName}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}