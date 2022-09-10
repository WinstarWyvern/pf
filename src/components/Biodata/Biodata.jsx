import React from 'react'
import "../components.css"
import "./Biodata.css"
import profilePicture from "../../asset/image/ProfilePicture.jpg"
import { BsLine, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const Biodata = () => {
  return (
    <div className="custom-bg-config h-708 custom-container border-red-10">
      <div className='border-black-10 w-85 h-85 biodata-container-bg text-bold text-black p-5 fs-20 opacity-087'>
        <div className="d-flex w-100">
          <div className='w-65'>
            <div className="row my-1">

              <div className="row">
                <div className="col-3 fs-25">
                  Profile
                </div>
                <div className="col-1">
                  &nbsp;
                </div>
                <div className="col-5">
                  &nbsp;
                </div>
              </div>

              <div className="col-3">
                Full Name
              </div>
              <div className="col-1">
                :
              </div>
              <div className="col-5">
                Winston Adinata Kusumo
              </div>
            </div>

            <div className="row my-1">
              <div className="col-3">
                Nickname
              </div>
              <div className="col-1">
                :
              </div>
              <div className="col-5">
                Winston, Winsta
              </div>
            </div>

            <div className="row my-1">
              <div className="col-3">
                Date of Birth
              </div>
              <div className="col-1">
                :
              </div>
              <div className="col-5">
                November 13th 2001
              </div>
            </div>

            <div className="row my-1">
              <div className="col-3">
                Gender
              </div>
              <div className="col-1">
                :
              </div>
              <div className="col-5">
                Male
              </div>
            </div>

            <div className="row my-1">
              <div className="col-3">
                Email
              </div>
              <div className="col-1">
                :
              </div>
              <div className="col-5">
                winstonadinata@gmail.com
              </div>
            </div>

            <div className="row my-1">
              <div className="col-3">
                Phone
              </div>
              <div className="col-1">
                :
              </div>
              <div className="col-5">
                +6289662358056
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-3 fs-25">
                Contact
              </div>
              <div className="col-1">
                &nbsp;
              </div>
              <div className="col-5">
                &nbsp;
              </div>
            </div>

            <div className="row my-1">
              <div className="col-3">
                Line <BsLine />
              </div>
              <div className="col-1">
                :
              </div>
              <div className="col-5">
                winston.ak
              </div>
            </div>

            <div className="row my-1">
              <div className="col-3">
                Twitter <BsTwitter />
              </div>
              <div className="col-1">
                :
              </div>
              <div className="col-5">
                @winsta16
              </div>
            </div>

            <div className="row my-1">
              <div className="col-3">
                Github <BsGithub />
              </div>
              <div className="col-1">
                :
              </div>
              <div className="col-5">
                <a href="https://github.com/WinstarWyvern" class="text-dark txt-decoration-none" target={'_blank'} rel="noreferrer">WinstarWyvern</a>
              </div>
            </div>

            <div className="row my-1">
              <div className="col-3">
                LinkedIn <BsLinkedin />
              </div>
              <div className="col-1">
                :
              </div>
              <div className="col-5">
                <a href="https://www.linkedin.com/in/winston-adinata-kusumo-044152177/" class="text-dark txt-decoration-none" target={'_blank'} rel="noreferrer">Winston Adinata Kusumo</a>
              </div>
            </div>

          </div>
          <div className='w-35'>
            <img className="card-img-top" src={profilePicture} alt="eror" height={480} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Biodata