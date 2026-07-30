import React from "react";
import "../components.css";
import "./Skills.css";

import htmlLogo from "../../asset/image/html-logo.png";
import cssLogo from "../../asset/image/css-logo.png";
import cLogo from "../../asset/image/c-logo.png";
import javaLogo from "../../asset/image/java-logo.png";
import reactLogo from "../../asset/image/react-logo.png";
import sqlLogo from "../../asset/image/sql-logo.png";
import laravelLogo from "../../asset/image/laravel-logo.png";
import figmaLogo from "../../asset/image/figma-logo.png";
import springLogo from "../../asset/image/spring-logo.png";
import vueLogo from "../../asset/image/vue-logo.png";
import mongoDBLogo from "../../asset/image/mongodb-logo.png";
import sassLogo from "../../asset/image/sass-logo.png";
import flutterLogo from "../../asset/image/flutter-logo.png";
import angularLogo from "../../asset/image/angular-logo.png";
import javascriptLogo from "../../asset/image/javascript-logo.png";
import typescriptLogo from "../../asset/image/typescript-logo.png";
import gitLogo from "../../asset/image/git-logo.png";
import githubLogo from "../../asset/image/github-logo.png";
import dartLogo from "../../asset/image/dart-logo.png";
import postmanLogo from "../../asset/image/postman-logo.png";
import postgresqlLogo from "../../asset/image/postgre-logo.png";

const skillCategories = [
  {
    title: "Website Development",
    skills: [
      { name: "Angular", logo: angularLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "React", logo: reactLogo },
      { name: "Vue.js", logo: vueLogo },
      { name: "Laravel", logo: laravelLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "SASS", logo: sassLogo },
      { name: "Java", logo: javaLogo },
      { name: "Spring Boot", logo: springLogo },
      { name: "SQL", logo: sqlLogo },
      { name: "MongoDB", logo: mongoDBLogo },
      { name: "PostgreSQL", logo: postgresqlLogo }
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", logo: flutterLogo },
      { name: "Dart", logo: dartLogo }
    ],
  },
  {
    title: "Other Programming Language",
    skills: [{ name: "C", logo: cLogo }],
  },
  {
    title: "Tools",
    skills: [
      { name: "Figma", logo: figmaLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo }
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-bg custom-bg-config custom-container">
      <div className="skills-container-bg">

        <div className="skills-header">
          <h1>Technical Skills</h1>
          <p>
            Technologies I have used in professional and personal projects.
          </p>
        </div>

        {skillCategories.map((category) => (
          <div className="skill-category" key={category.title}>

            <h2>{category.title}</h2>

            <div className="skill-grid">

              {category.skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <img src={skill.logo} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Skills;