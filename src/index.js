import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PastWorks from "./components/PastWorks/PastWorks";
import Biodata from "./components/Biodata/Biodata";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Biodata />
            </>
          }
        />
        <Route
          path="/pastworks"
          element={
            <>
              <Navigation />
              <PastWorks />
            </>
          }
        />
        <Route
          path="/skills"
          element={
            <>
              <Navigation />
              <Skills />
            </>
          }
        />
        <Route
          path="/education"
          element={
            <>
              <Navigation />
              <Education />
            </>
          }
        />
        <Route
          path="/experience"
          element={
            <>
              <Navigation />
              <Experience />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
