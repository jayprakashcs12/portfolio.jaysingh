import React from "react";
import CSS from "../assets/images/css.png";
import HTML from "../assets/images/html.png";
import bootStrap from "../assets/images/bootstrap.png";
import JavaScript from "../assets/images/javascript.png";
import ReactJS from "../assets/images/reactjs.png";

export default function Experience() {

  let cardItem = [
    { id: 1, logo:HTML,   name:"HTML"},
    { id: 2, logo: CSS, name: "CSS" }, 
    { id: 3, logo: bootStrap, name: "BootStrap" }, 
    { id: 4, logo: JavaScript, name: "JavaScript" },
    { id: 5, logo: ReactJS, name: "ReactJS" }
  ];

  return (
    <>
      <hr />
      <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <h1 className="text-3xl font-bold mb-3">Experience</h1>
        <span>I've more than 2+ years of Experience in below technologies.</span>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3 mt-5">
          {cardItem.map(({ id, logo, name }) => (
            <div className="flex flex-col items-center justify-center border-[1px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img src={logo} className="exp-img" alt={logo} />
              <div className="">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}