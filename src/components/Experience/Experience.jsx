import React from 'react'
import "./Experience.css"
import "../components.css"
import sokratesLogo from "../../asset/image/sokrates-logo.png"
import blibliLogo from "../../asset/image/blibli-logo.png"
import ambersofLogo from "../../asset/image/ambersof-logo.png"

const Experience = () => {
  return (
    <div className="experience-bg custom-bg-config h-708 custom-container">
      <div className='border-pink-10 w-75 h-80 experience-container-bg text-bold text-black p-5 fs-20 opacity-1 m-auto'>
        <div className="col-3 fs-25">
          Timeline
        </div>

        <div className="w-100 d-flex flex-wrap my-4">

          <div className="w-25 h-50 mx-3">
            <div className="card border border-primary border-5">
              <img className="card-img-top" src={sokratesLogo} alt="error" height={200} />
              <div className="card-body text-center">
                <h5 className="card-title">Associate Member (Fullstack)</h5>
                <p className="card-text">2022 - 2023</p>
              </div>
            </div>
          </div>

          <div className="w-25 h-50 mx-3">
            <div className="card border border-primary border-5">
              <img className="card-img-top" src={blibliLogo} alt="error" height={200} />
              <div className="card-body text-center">
                <h5 className="card-title">Software Engineer Intern (Fullstack)</h5>
                <p className="card-text">2023 - 2024</p>
              </div>
            </div>
          </div>

          <div className="w-25 h-50 mx-3">
            <div className="card border border-primary border-5">
              <img className="card-img-top" src={ambersofLogo} alt="error" height={200} />
              <div className="card-body text-center">
                <h5 className="card-title">FrontEnd Developer (Contract)</h5>
                <p className="card-text">2024 - 2025</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Experience