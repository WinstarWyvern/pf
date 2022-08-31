import React from 'react'
import "../components.css"
import "./Biodata.css"
import { BsLine, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";


const Biodata = () => {
  return (
    <div className="biodata-bg custom-bg-config h-708 custom-container">
      <div className='border-black-10 w-85 h-85 biodata-container-bg text-bold text-black p-5 fs-20 opacity-087'>
        <div class="d-flex w-100">
          <div className='w-65'>
            <div class="row my-1">

              <div class="row">
                <div class="col-3 fs-25">
                  Profile
                </div>
                <div class="col-1">
                  &nbsp;
                </div>
                <div class="col-5">
                  &nbsp;
                </div>
              </div>

              <div class="col-3">
                Full Name
              </div>
              <div class="col-1">
                :
              </div>
              <div class="col-5">
                Winston Adinata Kusumo
              </div>
            </div>

            <div class="row my-1">
              <div class="col-3">
                Nickname
              </div>
              <div class="col-1">
                :
              </div>
              <div class="col-5">
                Winston, Winsta
              </div>
            </div>

            <div class="row my-1">
              <div class="col-3">
                Date of Birth
              </div>
              <div class="col-1">
                :
              </div>
              <div class="col-5">
                November 13th 2001
              </div>
            </div>

            <div class="row my-1">
              <div class="col-3">
                Gender
              </div>
              <div class="col-1">
                :
              </div>
              <div class="col-5">
                Male
              </div>
            </div>

            <div class="row my-1">
              <div class="col-3">
                Email
              </div>
              <div class="col-1">
                :
              </div>
              <div class="col-5">
                winstonadinata@gmail.com
              </div>
            </div>

            <div class="row my-1">
              <div class="col-3">
                Phone
              </div>
              <div class="col-1">
                :
              </div>
              <div class="col-5">
                +6289662358056
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-3 fs-25">
                Contact
              </div>
              <div class="col-1">
                &nbsp;
              </div>
              <div class="col-5">
                &nbsp;
              </div>
            </div>

            <div class="row my-1">
              <div class="col-3">
                Line <BsLine />
              </div>
              <div class="col-1">
                :
              </div>
              <div class="col-5">
                winston.ak
              </div>
            </div>

            <div class="row my-1">
              <div class="col-3">
                Twitter <BsTwitter />
              </div>
              <div class="col-1">
                :
              </div>
              <div class="col-5">
                @Winsta16
              </div>
            </div>

            <div class="row my-1">
              <div class="col-3">
                Github <BsGithub />
              </div>
              <div class="col-1">
                :
              </div>
              <div class="col-5">
                MikazukiMizuki
              </div>
            </div>

            <div class="row my-1">
              <div class="col-3">
                LinkedIn <BsLinkedin />
              </div>
              <div class="col-1">
                :
              </div>
              <div class="col-5">
                Winston Adinata Kusumo
              </div>
            </div>

          </div>
          <div className='w-35 profile-bg'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Biodata