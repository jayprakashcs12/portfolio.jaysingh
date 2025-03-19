import React from "react";

export default function Working() {

  let educationHistory = [
    { institution: 'Dr. A.P.J. A.K.T.U., Lucknow', degree: 'B.Tech (Computer Science & Engineering)', duration: '2012-2016' },
    { institution: 'U.P. Board, Prayagraj', degree: 'Intermediate (PCM)', duration: '2007-2009' },
    { institution: 'U.P. Board, Prayagraj', degree: 'High School (Science)', duration: '2005-2007' }
  ];

  let workingHistory = [
    {
      organization: 'Lobotus Technology', position: 'UI Developer', techTitle: 'Organisation', duration: '01/22 - 12/23',
      tasks: [
        'Involved in micro front-end design and development of the GUI for the EMR platform',
        'Module testing, module integration, and testing all other modules together',
        'Use mark-up languages like HTML to create user-friendly web pages',
        'Building reusable components and front-end libraries for future use',
        'Develop website features that can enhance the user experience',
        'Reviewing application requirements and interface designs',
        'Extensive experience using React-Bootstrap for layout',
        'Design changes as per client requirements',
        'Write clean and well-structured code',
        'Develop responsive web-based UI',
        'Playing the role of team helper',
        'Including API integration'
      ]
    },
    {
      organization: 'Bangalore Softsell Pvt Ltd', position: 'Junior Software Developer', techTitle: 'Organisation', duration: '10/19 - 03/21',
      tasks: [
        'Utilized AngularJS to develop a single-page application, implementing data binding and synchronization with the server, along with HTML, CSS, Bootstrap & AngularJS',
        'Involved in designing the user experience interface UI/UX strategy, UI requirements, and converting findings into UI designs',
        'Develop user interfaces with the latest front-end technologies',
        'Maintaining and optimizing mobile/web applications',
        'Write clean and well-structured codes',
      ]
    },
    {
      organization: 'Cybotrix Technology', position: 'Web Developer', techTitle: 'Organisation', duration: '09/17 - 10/19',
      tasks: [
        'Designed HTML templates for use on all pages on the website working with CSS Background, positioning, text, border, margin, padding, and table',
        'Handled cross-browser compatibility issues & features to enhance user experience',
        'Optimize web pages for maximum speed and boost their scalability',
        'Updated the website from time to time for special requirements',
        'Ensuring web design is optimized for smartphones',
        'Extensive experience using Bootstrap for layout',
        'Troubleshooting problems with performance'
      ]
    }
  ];

  return (

    <>
      <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <h1 className="text-blue-500 font-semibold text-xl mt-5 mb-3">Working Experience</h1>
        {/* Working History Here */}
        {workingHistory.map((exp, i) => (
          <div key={i} className="space-y-4 mt-5">
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <b>{exp.techTitle} : </b> {exp.organization}
              </div>
              <div className="space-y-2">
                <b>{exp.position} | </b> {exp.duration}
              </div>
            </div>
            <ol className="pro-list pro-text">
              {exp.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="ml-4 mb-1">{task + "."}</li>
              ))}
            </ol>
            {i !== workingHistory.length - 1 && <hr className="border-b border-gray-400 border-opacity-20" />}
          </div>
        ))}
        {/* Working History Here */}
      </div>
      <hr className="border-b border-gray-400 border-opacity-50" />
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <h1 className="text-blue-500 font-semibold text-xl mt-5 mb-3">Education</h1>
        {educationHistory.map((edu, i) => (
          <div key={i}>
            <div className="flex flex-col md:flex-row justify-between align-middle space-y-6 md:space-y-0 mt-4">
              <div>
                <b>{edu.institution} </b> | <span>{edu.degree}</span>
              </div>
              <div>
                {edu.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}