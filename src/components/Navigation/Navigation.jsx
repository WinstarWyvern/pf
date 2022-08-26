import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mx-1 h5">
          <Link to="/home" className="nav-item nav-link disabled">Portofolio</Link>
          <Link to="/biodata" className="nav-item nav-link text-white">Biodata</Link>
          <Link to="/skills" className="nav-item nav-link text-white">Skills</Link>
          <Link to="/pastworks" className="nav-item nav-link text-white">Past Works</Link>
          <Link to="/education" className="nav-item nav-link text-white">Education</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation