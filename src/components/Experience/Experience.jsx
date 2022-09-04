import React from 'react'
import "./Experience.css"
import "../components.css"
import sokratesLogo from "../../asset/image/sokrates-logo.png"


const Experience = () => {
  return (
    <div className="experience-bg custom-bg-config h-708 custom-container">
      <div className='border-black-10 w-75 h-80 experience-container-bg text-bold text-black p-5 fs-20 opacity-087'>
        <div className="col-3 fs-25">
          Timeline
        </div>

        <div className="w-100 d-flex flex-wrap my-4">

          <div className="w-25 h-25 mx-3">
            <div className="card border border-primary border-5">
              <img className="card-img-top" src={sokratesLogo} alt="error" height={200} />
              <div className="card-body text-center">
                <h5 className="card-title">Associate Member</h5>
                <h5 className='card-title'>(Part Time)</h5>
                <p className="card-text">2022 - 2023</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Experience