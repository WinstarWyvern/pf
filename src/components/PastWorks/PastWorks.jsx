import React from 'react'
import "../components.css"
import "./PastWorks.css"

const PastWorks = () => {
  return (
    <div className="pastworks-bg custom-bg-config h-2000 custom-container">
      <div className='border-purple-10 w-75 h-85 bg-white text-bold text-black p-5 fs-20 opacity-087'>
        <div className="d-flex w-100 p-3 justify-content-center align-items-center flex-column">
          <div>
            <h1 className="my-3">1.
              <a href="https://www.linkedin.com/in/winston-adinata-kusumo-044152177/" class="text-dark text-decoration-none" target={'_blank'} rel="noreferrer">
                Fam Diner
              </a>
            </h1>
            <iframe src="https://winstarwyvern.github.io/fam-diner/" frameborder="0" width={1000} height={400} />
          </div>

          <div>
            <h1 className="my-3">2.
              <a href="https://www.linkedin.com/in/winston-adinata-kusumo-044152177/" class="text-dark text-decoration-none" target={'_blank'} rel="noreferrer">
                Caroline Rentals
              </a>
            </h1>
            <iframe src="https://winstarwyvern.github.io/caroline-rentals/" frameborder="0" width={1000} height={400} />
          </div>

          <div>
            <h1 className="my-3">3.
              <a href="https://www.linkedin.com/in/winston-adinata-kusumo-044152177/" class="text-dark text-decoration-none" target={'_blank'} rel="noreferrer">
                Doto 2
              </a>
            </h1>
            <iframe src="https://winstarwyvern.github.io/Doto2/" frameborder="0" width={1000} height={400} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default PastWorks