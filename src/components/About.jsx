import React from "react";
import Working from "./Working";

export default function About() {

  let experienceList = [
    { expText: 'Over 5+ Years of IT experience which includes 3+ Years of Extensive experience as a Front-End Developer, 1 Year as a PHP Developer & 2+ Year as a ReactJS Developer' },
    { expText: 'Worked on creating responsive websites for smart devices using responsive design and Media Queries' },
    { expText: 'Extensive experience in developing web pages using HTML, CSS, Bootstrap, JavaScript, and React JS' },
    { expText: 'Have a working knowledge of API integration, and Cross-Browser (Platform Compatibility Issues)' },
    { expText: 'Used React-Router to turn an application into a single-page application (SPA)' },
    { expText: 'Have a working knowledge of AngularJS, ES6, and PHP with CodeIgniter' },
    { expText: 'Working knowledge of web protocols and standards (HTTP & HTTPS)' },
    { expText: 'Developed the pages that are compliant with W3C standards' }
  ];

  let technologyList = [
    { techTitle: 'Web Development', techDesc: 'HTML - 4 & 5, CSS - 2 & 3', },
    { techTitle: 'Source Code Editor', techDesc: 'Notepad++, VS Code', },
    { techTitle: 'Framework', techDesc: 'Bootstrap - 3, 4 & 5', },
    { techTitle: 'Scripting Language', techDesc: 'JavaScript', },
    { techTitle: 'Database', techDesc: 'MongoDB, SQL', },
    { techTitle: 'Library', techDesc: 'ReactJS', },
  ];

  return (
    <>
      <div name="About Us" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        {/* Professional Summary Here */}
        <>
          <h1 className="text-3xl font-bold mb-5">About Us</h1>
          <h2 className="text-green-600 font-semibold text-xl mt-5 mb-3"> Professional Summary </h2>
          <ol className="pro-list pro-text">
            {experienceList.map((item, i) => (
              <li key={i} className="ml-4 mb-1">{item.expText + "."}</li>
            ))}
          </ol>
        </>
        {/* Professional Summary Here */}

        {/* Technical Skills Here */}
        <>
          <h1 className="text-green-600 font-semibold text-xl mt-5 mb-3">
            Technical Skills
          </h1>

          <ol className="pro-list pro-text">
            {technologyList.map((tech, i) => (
              <li key={i} className="ml-4 mb-1"> <b>{tech.techTitle} : </b> {tech.techDesc + "."} </li>
            ))}
          </ol>
        </>
        {/* Technical Skills Here */}
      </div>
      <Working />
    </>
  );
}