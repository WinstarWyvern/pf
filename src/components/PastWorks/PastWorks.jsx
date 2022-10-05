import React from 'react'
import "../components.css"
import "./PastWorks.css"

const PastWorks = () => {
  return (
    <div className="pastworks-bg custom-bg-config h-1000 custom-container">
      <div className='border-purple-10 w-75 h-85 bg-white text-bold text-black p-5 fs-20 opacity-087'>
        <div className="d-flex w-100 p-3 flex-column">

          <div>

            <h2>Static Website</h2>

            <ul>
              <li>
                <a href="https://winstarwyvern.github.io/fam-diner/" class="text-dark text-decoration-none" target={'_blank'} rel="noreferrer">
                Fam Diner
              </a>
              </li>
              <li>
                <a href="https://winstarwyvern.github.io/caroline-rentals/" class="text-dark text-decoration-none" target={'_blank'} rel="noreferrer">
                Caroline Rentals
              </a>
              </li>
              <li>
                <a href="https://winstarwyvern.github.io/Doto2/" class="text-dark text-decoration-none" target={'_blank'} rel="noreferrer">
                  Doto 2
                </a>
              </li>

            </ul>

          </div>

          <div>

            <h2>UML Project</h2>

            <ul>
              <li>
                <a href="https://padlet.com/winstonkusumo/1o0oliozrfehkr08" class="text-dark text-decoration-none" target={'_blank'} rel="noreferrer">
                  Travelling
                </a>
              </li>
            </ul>

          </div>

          <div>

            <h2>UI/UX</h2>

            <ul>
              <li>
                <a href="https://www.figma.com/file/0hK7yqCr6rnwkTFf47LdvV/Hotelify?node-id=750%3A617" class="text-dark text-decoration-none" target={'_blank'} rel="noreferrer">
                  Hotelify
                </a>
              </li>

              <li>
                <a href="https://www.figma.com/file/YQs2biDVOhBtuQfewdKobk/UTS-Mulmed?node-id=0%3A1" class="text-dark text-decoration-none" target={'_blank'} rel="noreferrer">
                  UTS Multimedia
                </a>
              </li>

              <li>
                <a href="https://www.figma.com/file/SXWOW6Z1CHdS88P90eZAMq/UI-UAS-MULMED?node-id=0%3A1" class="text-dark text-decoration-none" target={'_blank'} rel="noreferrer">
                  UAS Multimedia
                </a>
              </li>

              <li>
                <a href="https://www.figma.com/file/SXWOW6Z1CHdS88P90eZAMq/UI-UAS-MULMED?node-id=0%3A1" class="text-dark text-decoration-none" target={'_blank'} rel="noreferrer">
                  AR Map
                </a>
              </li>

              <li>
                <a href="https://www.figma.com/file/5fyNUfWCUp7j55H33jKjur/Project-HCI-LE-01?node-id=0%3A1" class="text-dark text-decoration-none" target={'_blank'} rel="noreferrer">
                  UAS Human & Computer Interaction
                </a>
              </li>

            </ul>

          </div>

        </div>
      </div>
    </div>
  )
}

export default PastWorks