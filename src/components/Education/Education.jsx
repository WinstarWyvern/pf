import React from 'react'
import "./Education.css"
import "../components.css"
import yakobusLogo from "../../asset/image/yakobus-logo.png"
import binusLogo from "../../asset/image/binus-logo.png"



const Education = () => {
  return (
    <div className="education-bg custom-bg-config h-1000 custom-container">
      <div className='border-black-10 w-75 h-85 education-container-bg text-bold text-black p-5 fs-20 opacity-087'>
          <div className="col-3 fs-25">
            Timeline
          </div>

        <div className="w-100 d-flex flex-wrap justify-content-evenly my-4">

          <div className="w-25 h-25 mx-3">
            <div className="card border border-danger border-5">
              <img className="card-img-top" src={yakobusLogo} alt="error" height={200}/>
              <div className="card-body text-center">
                <h5 className="card-title">SMP</h5>
                <p className="card-text">2014 - 2017</p>
              </div>
            </div>
          </div>

          <div className="w-25 h-25 mx-3">
            <div className="card border border-danger border-5">
              <img className="card-img-top" src={yakobusLogo} alt="error" height={200} />
              <div className="card-body text-center">
                <h5 className="card-title">SMA</h5>
                <p className="card-text">2017 - 2020</p>
              </div>
            </div>
          </div>

          <div className="w-25 h-25 mx-3">
            <div className="card border border-danger border-5">
              <img className="card-img-top m-auto" src={binusLogo} alt="error" height={200} />
              <div className="card-body text-center">
                <h5 className="card-title">S1</h5>
                <p className="card-text">2020 - Current</p>
              </div>
            </div>
          </div>

        </div>

        <div className="col-3 fs-25">
          Award
        </div>

        <div class="w-30 my-4">
          <ul className="list-group border border-danger border-5">
            <li className="list-group-item">- 6th place at OSK(2019)</li>
          </ul>
        </div>

        <div className="col-3 fs-25">
          Volunteering
        </div>

        <div class="w-40 my-4">
          <ul className="list-group border border-danger border-5">
            <li className="list-group-item">- Freshman Leader(2021)</li>
            <li className="list-group-item">- Freshman Leader(2021 - 2022)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education