import React from 'react'
import "../components.css"
import "./Skills.css"
import htmlLogo from '../../asset/image/html-logo.png'
import cssLogo from '../../asset/image/css-logo.png'
import cLogo from '../../asset/image/c-logo.png'
import javaLogo from '../../asset/image/java-logo.png'
import reactLogo from '../../asset/image/react-logo.png'
import sqlLogo from '../../asset/image/sql-logo.png'
import phpLogo from '../../asset/image/php-logo.png'
import figmaLogo from '../../asset/image/figma-logo.png'

const Skills = () => {
  return (
    <div className="skills-bg custom-bg-config h-900 custom-container">
      <div className='border-red-10 w-80 h-80 skills-container-bg text-bold text-white p-5 fs-20 opacity-087'>
        <div className="d-flex w-100 flex-wrap p-3 align-items-center">
          <div className="mx-5 my-5">
            <img className="card-img-top" src={htmlLogo} alt="eror" width={150} height={150}/>
          </div>

          <div className="mx-5 my-5">
            <img className="card-img-top" src={cssLogo} alt="eror" width={150} height={150} />
          </div>

          <div className="mx-5 my-5">
            <img className="card-img-top" src={cLogo} alt="eror" width={150} height={150} />
          </div>

          <div className="mx-5 my-5">
            <img className="card-img-top" src={javaLogo} alt="eror" width={150} height={150} />
          </div>

          <div className="mx-5 my-5">
            <img className="card-img-top" src={reactLogo} alt="eror" width={150} height={150} />
          </div>

          <div className="mx-5 my-5">
            <img className="card-img-top" src={sqlLogo} alt="eror" width={150} height={150} />
          </div>

          <div className="mx-5 my-5">
            <img className="card-img-top" src={phpLogo} alt="eror" width={150} height={150} />
          </div>

          <div className="mx-5 my-5">
            <img className="card-img-top" src={figmaLogo} alt="eror" width={150} height={150} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills