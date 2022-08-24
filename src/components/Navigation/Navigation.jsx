import React from 'react'

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mx-1 h5">
          <a className="nav-item nav-link disabled" href="#">Portofolio</a>
          <a className="nav-item nav-link text-white" href="#">Profile</a>
          <a className="nav-item nav-link text-white" href="#">Project</a>
          <a className="nav-item nav-link text-white" href="#">Skill</a>
          <a className="nav-item nav-link text-white" href="#">Etc</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation