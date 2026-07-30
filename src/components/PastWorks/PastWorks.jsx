import React from "react";
import "../components.css";
import "./PastWorks.css";
import { FiExternalLink, FiLock } from "react-icons/fi";

const projectCategories = [
  {
    title: "Professional Projects",
    projects: [
      {
        name: "NWL (Natural Way of Living)",
        link: "https://lotusgarden.app/",
        type: "Website",
      },
      {
        name: "IFS (Integration Financial System) Telkomsel",
        private: true,
        type: "Internal Website",
      },
      {
        name: "FCNZ (Fire Control New Zealand)",
        private: true,
        type: "Internal Website + Internal Mobile App",
      },
      {
        name: "Fooma",
        link: "https://fooma.ai/",
        type: "Website",
      },
      {
        name: "FIS",
        private: true,
        type: "Internal Website",
      },
      {
        name: "Ambersof",
        link: "https://ambersof.com/en",
        type: "Internal Website",
      },
    ],
  },
  {
    title: "Personal Website Projects",
    projects: [
      {
        name: "Doto 2",
        link: "https://winstarwyvern.github.io/Doto2/",
        type: "Live Demo",
      },
      {
        name: "UMDB",
        link: "https://github.com/WinstarWyvern/UMDB",
        type: "GitHub",
      },
      {
        name: "Giant Book Supplier",
        link: "https://github.com/WinstarWyvern/Giant-Book-Supplier",
        type: "GitHub",
      },
      {
        name: "Barbatos Shop",
        link: "https://github.com/WinstarWyvern/Barbatos-Shop",
        type: "GitHub",
      },
    ],
  },
  {
    title: "Personal Mobile Projects",
    projects: [
      {
        name: "AnimeDB",
        link: "https://github.com/WinstarWyvern/AnimeDB",
        type: "GitHub",
      },
      {
        name: "CinemaCGP",
        link: "https://github.com/WinstarWyvern/CinemaCGP",
        type: "GitHub",
      },
      {
        name: "Member Zone Feature",
        private: true,
        type: "Thesis",
      },
    ],
  },
  {
    title: "Prototype Projects",
    projects: [
      {
        name: "Hotelify",
        link: "https://www.figma.com/file/0hK7yqCr6rnwkTFf47LdvV/Hotelify?node-id=750%3A617",
        type: "Figma",
      },
      {
        name: "MedStore",
        link: "https://www.figma.com/file/YQs2biDVOhBtuQfewdKobk/UTS-Mulmed?node-id=0%3A1",
        type: "Figma",
      },
      {
        name: "National Heroes of Indonesia Simulator",
        link: "https://www.figma.com/file/SXWOW6Z1CHdS88P90eZAMq/UI-UAS-MULMED?node-id=0%3A1",
        type: "Figma",
      },
      {
        name: "AR Map",
        link: "https://www.figma.com/file/SXWOW6Z1CHdS88P90eZAMq/UI-UAS-MULMED?node-id=0%3A1",
        type: "Figma",
      },
      {
        name: "Trash Collector",
        link: "https://www.figma.com/file/5fyNUfWCUp7j55H33jKjur/Project-HCI-LE-01?node-id=0%3A1",
        type: "Figma",
      },
      {
        name: "KeMana Saja",
        link: "https://padlet.com/winstonkusumo/1o0oliozrfehkr08",
        type: "UML",
      },
    ],
  },
];

const PastWorks = () => {
  return (
    <section className="pastworks-bg custom-bg-config custom-container">
      <div className="pastworks-container">

        <div className="section-header">
          <h1>Projects</h1>
          <p>
            A collection of professional, academic, and personal
            projects that showcase my experience in software
            development.
          </p>
        </div>

        {projectCategories.map((category) => (
          <div className="project-category" key={category.title}>

            <h2>{category.title}</h2>

            <div className="project-grid">

              {category.projects.map((project) => (
                <div
                  className="project-card"
                  key={project.name}
                >
                  <span className="project-badge">
                    {project.type}
                  </span>

                  <h3>{project.name}</h3>

                  <div className="project-footer">
                    {project.private ? (
                      <span className="private-project">
                        <FiLock />
                        Private Project
                      </span>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        View Project
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default PastWorks;