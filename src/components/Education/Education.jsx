import React from 'react'
import "./Education.css"
import "../components.css"
import yakobusLogo from "../../asset/image/yakobus-logo.png"
import binusLogo from "../../asset/image/binus-logo.png"

const timeline = [
  { logo: yakobusLogo, title: "SMP", period: "2014 - 2017" },
  { logo: yakobusLogo, title: "SMA", period: "2017 - 2020" },
  { logo: binusLogo, title: "S1 Teknik Informatika", period: "2020 - 2024" },
]

const awards = [
  "6th place at OSK (2019)",
]

const volunteering = [
  "Freshman Leader (2021)",
  "Freshman Leader (2021 - 2022)",
]

const Education = () => {
  return (
    <div className="education-bg custom-bg-config custom-container">
      <div className="education-container">

        <div className="education-header">
          <h1>Education</h1>
          <p>My academic background and journey so far.</p>
        </div>

        <div className="edu-timeline">
          {timeline.map((item, index) => (
            <div className="edu-timeline-item" key={index}>
              <div className="edu-timeline-dot"></div>

              <div className="edu-timeline-card">
                <div className="edu-timeline-top">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="edu-school-logo"
                  />
                  <div>
                    <h2>{item.title}</h2>
                    <p className="edu-period">{item.period}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="edu-side-grid">

          <div className="edu-side-block">
            <h3>Award</h3>
            <ul className="edu-side-list">
              {awards.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="edu-side-block">
            <h3>Volunteering</h3>
            <ul className="edu-side-list">
              {volunteering.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Education