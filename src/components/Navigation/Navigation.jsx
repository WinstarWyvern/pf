import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const navItems = [
    { path: "/", label: "About Me" },
    { path: "/skills", label: "Skills" },
    { path: "/pastworks", label: "Projects" },
    { path: "/education", label: "Education" },
    { path: "/experience", label: "Experience" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">

        <NavLink className="navbar-brand fw-bold brand-logo" to="/">
          Profile
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
          aria-controls="portfolioNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="portfolioNavbar"
        >
          <div className="navbar-nav gap-lg-3">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `nav-link nav-item custom-nav-link ${isActive ? "active-link" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;