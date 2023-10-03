import React from "react";
import resumeFile from "../documents/ZarinaMLResume.pdf";

const Resume = () => {
  const educationDetails = [
    {
      yearRange: "September 2022 - March 2023",
      title: "FrontEnd Developer",
      place: "Seytech Online Bootcamp",
      desc: "During the program, I gained proficiency in creating responsive and visually appealing web interfaces using HTML, CSS, JavaScript and React",
    },
    {
      yearRange: "2016 - 2018",
      title: "Master Degree in Computer Information Systems",
      place: "California University of Management and Sciences, Virginia Campus",
      desc: "As a student I delve deep into both the theoretical and practical aspects of computer science and information systems, gained expertise in areas such as software development, database management, network security, data analytics",
    },
    {
      yearRange: "2004 - 2008",
      title: "Bachelor  Degree in Agrochemistry",
      place: "S.Seifullin Kazakh Agrotechnical University, Astana Kazakhstan",
      desc: " Throughout my coursework and research experiences, I delved deep into the intricacies of soil chemistry, plant nutrition, and the sustainable management of agricultural resources.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "April 2023 - current",
      title: "",
      place: "Cargo Fleet",
      desc: "Internship project, were we develop and maintain React SPA for fleet management platform by using semantic HTML, CSS, Tailwind, Javascript and integrating REST APIs.",
    },
    {
      yearRange: "2015 - 2021",
      title: "Sales Representative",
      place: "7 Movers",
      desc: "Managed entire sales cycle, and provided exceptional service that resulted in customer satisfaction.",
    },
    
  ];

  const skills = [
   
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 70,
    },
    {
      name: "React JS",
      percent: 75,
    },
    {
      name: "Tailwind",
      percent: 75,
    },
    {
      name: "Bootstrap",
      percent: 80,
    },
    {
      name: "Git",
      percent: 75,
    },
  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Resume</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          A summary of My Resume
        </h2>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Education</h2>
            <div className="border-start border-2 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
          {/* My Experience */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Experience</h2>
            <div className="border-start border-2 border-primary ps-3">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            href={resumeFile}
            download
          >
            Download CV
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
