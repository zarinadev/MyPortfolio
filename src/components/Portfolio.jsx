import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const htmlElement = document.getElementsByTagName("html")[0];
  const isRtl = htmlElement.getAttribute("dir") === "rtl";

  const filters = {
    DETAILED: "Details",
    
  };

  const types = {
    IMAGE: "image",
    DOCUMENT: "document",
  };

  const projectsData = [
    {
      title: "Girls Travel Tribe",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Health retreats cater to individuals seeking a break from their regular routines to focus on self-care, relaxation, and improving their health.",
        client: "Asema Black",
        technologies: "HTML5, CSS3, SCSS, JavaScript",
        industry: "Wellness and Hospitality",
        date: "May, 2023",
        url: {
          name: "Girls Travel Tribe Retreat Website",
          link: "https://girlstraveltribe.netlify.app",
        },

        sliderImages: [
          
          "images/projects/GTT3.jpg",
        ],
      },

      thumbImage: "images/projects/gtt1.jpg",

      categories: [filters.DETAILED],
    },
    {
      title: "Weather Application",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Application that provides real time weather forecasting.",
        technologies: "HTML5, CSS3, JavaScript, React, Tailwind CSS",
        industry: "Weather Forecasting",
        date: "December 2022",
        url: {
          name: "Weather Application",
          link: "weatheroftheworldapp.netlify.app"
      },

        sliderImages: [
          "images/projects/w3.jpg",
          "images/projects/wa4.jpg",
        ],
      },

      thumbImage: "images/projects/wa1.jpg",

      categories: [filters.DETAILED],
    },
    {
      title: "My Portfolio",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "My Personal Portfolio. Online website that showcases work, experience to share with press, potential employers",
        technologies: "HTML5, CSS3, SCSS, JavaScript, React",
        industry: "Technology",
        date: "September 2023",
        url: {
          name: "My Portfolio",
          link: "https://zarinaweb.netlify.app",
        },

        sliderImages: [
          "images/projects/pp2.jpg",
          "images/projects/pp3.jpg",
        ],
      },

      thumbImage: "images/projects/pp1.jpg",

      categories: [filters.DETAILED],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
      originLeft: !isRtl,
    });
 
    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, );

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  const getKeyByValue = (value) => {
    return Object.keys(filters).find((key) => filters[key] === value);
  };

  const getFilterClasses = (categories) => {
    if (categories.length > 0) {
      let tempArray = [];
      categories.forEach((category, index) => {
        tempArray.push(getKeyByValue(category));
      });
      return tempArray.join(" ");
    }
  };

  return (
    <>
      <section id="portfolio" className={"section bg-light"}>
        <div className={"container"}>
          {/* Heading */}
          <p className="text-center mb-2 wow fadeInUp">
            <span className="bg-primary text-dark px-2">Portfolio</span>
          </p>
          <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
            Some of my most recent projects
          </h2>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-5 wow fadeInUp"
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " + (filterKey === oneKey ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(oneKey)}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio wow fadeInUp">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      getFilterClasses(project.categories)
                    }
                    key={index}
                  >
                    <div className="portfolio-box">
                      <div className="portfolio-img">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div
                          className="portfolio-overlay"
                          onClick={() => {
                            setSelectedProjectDetails(projectsData[index]);
                            setIsOpen(true);
                          }}
                        >
                          <button className="popup-ajax stretched-link border-0 p-0 ">
                            {" "}
                          </button>
                          <div className="portfolio-overlay-details">
                            <p className="text-primary text-8">
                              {project.type === types.DOCUMENT && (
                                <i className="fas fa-file-alt"></i>
                              )}
                              {project.type === types.IMAGE && (
                                <i className="fas fa-image"></i>
                              )}
                              {project.type === types.VIDEO && (
                                <i className="fas fa-video"></i>
                              )}
                            </p>
                            <h5 className="text-white text-5">
                              {project?.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {isOpen && (
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          setIsOpen={setIsOpen}
        ></ProjectDetailsModal>
      )}
    </>
  );
};

export default Portfolio;
