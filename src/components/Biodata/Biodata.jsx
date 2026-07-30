import React from 'react'
import "../components.css"
import "./Biodata.css"
import profilePicture from "../../asset/image/ProfilePicture.jpg"
import { BsGithub, BsLinkedin } from "react-icons/bs";

const profileInfo = [
  { label: "Full Name", value: "Winston Adinata Kusumo" },
  { label: "Location", value: "Jakarta, Indonesia" }, // atau Tangerang, Indonesia
  { label: "Languages", value: "Bahasa, English" },
  { label: "Email", value: "winstonadinata@gmail.com" },
  { label: "Phone", value: "+62 896-6235-8056" },
];

const contactInfo = [
  {
    label: "Github",
    icon: <BsGithub />,
    value: "WinstarWyvern",
    href: "https://github.com/WinstarWyvern",
  },
  {
    label: "LinkedIn",
    icon: <BsLinkedin />,
    value: "Winston Adinata Kusumo",
    href: "https://www.linkedin.com/in/winston-adinata-kusumo-044152177/",
  },
]

const Biodata = () => {
  return (
    <div className="biodata-bg custom-bg-config custom-container">
      <div className="bio-container">

        <div className="bio-content">

          <div className="bio-photo-wrap">
            <img className="bio-photo" src={profilePicture} alt="Winston Adinata Kusumo" />
          </div>

          <div className="bio-info">

            <div className="bio-block">
              <h3>Profile</h3>
              <div className="bio-rows">
                {profileInfo.map((item, idx) => (
                  <div className="bio-row" key={idx}>
                    <span className="bio-label">{item.label}</span>
                    <span className="bio-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bio-block">
              <h3>Contact</h3>
              <div className="bio-rows">
                {contactInfo.map((item, idx) => (
                  <div className="bio-row" key={idx}>
                    <span className="bio-label">
                      {item.label} <span className="bio-icon">{item.icon}</span>
                    </span>
                    <span className="bio-value">
                      <a
                        href={item.href}
                        className="bio-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.value}
                      </a>
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div >
  )
}

export default Biodata