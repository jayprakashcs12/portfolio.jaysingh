import React from "react";

export default function Working() {

    let educationHistory = [
        { institution: 'Dr. A.P.J. Abdul Kalam Technical University, Lucknow', degree: 'B. Tech (Computer Science)', duration: '2012-2016' },
        { institution: 'U.P. Board, Prayagraj', degree: 'Intermediate (PCM)',  duration: '2007-2009' },
        { institution: 'U.P. Board, Prayagraj', degree: 'High School (Science)', duration: '2005-2007' }
    ];

    let workingHistory = [
        {
            organization: 'Lobotus Technology', position: 'UI Developer', techTitle: 'Organisation', duration: '01/2022 - 12/2023',
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
            organization: 'Bangalore Softsell Pvt Ltd', position: 'Junior Software Developer', techTitle: 'Organisation', duration: '10/2019 - 03/2021',
            tasks: [
                'Utilized AngularJS to develop a single-page application, implementing data binding and synchronization with the server, along with HTML, CSS, Bootstrap & AngularJS',
                'Involved in designing the user experience interface UI/UX strategy, UI requirements, and converting findings into UI designs',
                'Develop user interfaces with the latest front-end technologies',
                'Maintaining and optimizing mobile/web applications',
                'Write clean and well-structured codes',
            ]
        },
        {
            organization: 'Cybotrix Technology', position: 'Web Developer', techTitle: 'Organisation', duration: '09/2017 - 10/2019',
            tasks: [
                'Involved in designing the user experience interface UI/UX strategy, UI requirements, and converting findings into UI designs',
                'Develop user interfaces with the latest front-end technologies',
                'Maintaining and optimizing mobile/web applications',
                'Write clean and well-structured codes',
            ]
        }
    ];

    return (

        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
                <h1 className="text-green-600 font-semibold text-xl mt-5 mb-3">Working History</h1>
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
                                <li key={taskIndex} className="ml-4 mb-1">{task  + "."}</li>
                            ))}
                        </ol>
                    </div>
                ))}
                {/* Working History Here */}

                <h1 className="text-green-600 font-semibold text-xl mt-5 mb-3">Education</h1>
                {educationHistory.map((edu, i) => (
                    <div key={i} className="space-y-2">
                        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
                            <div className="mt-4">
                                <b>{edu.institution} </b> | <span>{edu.degree}</span>
                            </div>
                            <div className="mt-4">
                                {edu.duration}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}