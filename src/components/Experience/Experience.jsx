import React from "react";
import "./Experience.css";
import "../components.css";

import sokratesLogo from "../../asset/image/sokrates-logo.png";
import blibliLogo from "../../asset/image/blibli-logo.png";
import ambersofLogo from "../../asset/image/ambersof-logo.png";

const experiences = [
  {
    company: "PT Amber Solusi Internasional",
    role: "Frontend Developer (Contract)",
    period: "Jul 2024 – Jul 2026",
    logo: ambersofLogo,
    achievements: [
      "Delivered 10+ new features and resolved 50+ legacy issues across enterprise web and mobile applications using Angular, Flutter, Vue.js, Laravel, and PHP.",
      "Upgraded Angular projects from version 8 to 18 for IFS Telkomsel, improving compatibility and long-term maintainability.",
      "Developed Flutter mobile and Angular web applications for FCNZ (Fire Control New Zealand).",
      "Redesigned the FIS website and developed the new FOOMA.ai platform using Vue.js.",
      "Maintained the Ambersof website and implemented new features for NWL using PHP.",
    ],
  },
  {
    company: "Blibli",
    role: "Full Stack Developer Intern",
    period: "Feb 2023 – Feb 2024",
    logo: blibliLogo,
    achievements: [
      "Collaborated with the QA team to resolve 50+ backend-related issues, improving application stability.",
      "Upgraded MongoDB from version 5 to 6 and migrated backend services from Java 8 to Java 11.",
      "Led the development of the initial Member Zone prototype with a team of six developers using Figma, Vue.js, Spring Boot, and MongoDB.",
      "Contributed to backend development for the Super Quest feature using Spring Boot.",
    ],
  },
  {
    company: "BINUS Sokrates",
    role: "Associate Member (Part-time)",
    period: "Mar 2022 – Feb 2023",
    logo: sokratesLogo,
    achievements: [
      "Developed customized school report templates based on each school's requirements using Laravel.",
      "Built Asset Management and Library modules using Angular, TypeScript, and PostgreSQL.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="experience-bg custom-bg-config custom-container">
      <div className="experience-container">

        <div className="experience-header">
          <h1>Professional Experience</h1>
          <p>
            My professional journey in software development.
          </p>
        </div>

        <div className="timeline">

          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <div className="timeline-top">

                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="company-logo"
                  />

                  <div>
                    <h2>{exp.company}</h2>
                    <h4>{exp.role}</h4>
                    <p className="period">{exp.period}</p>
                  </div>

                </div>

                <ul className="achievement-list">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Experience;