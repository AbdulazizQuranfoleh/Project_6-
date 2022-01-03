import React from "react";
import "../landing/LandingImmersionSec.css";
import { Link } from "react-router-dom";
function LandingImmersionSec() {
  return (
    <div className="ImmersionSecContainer">
      <div className="imageContainer">
        <img
          src="https://hero.study/src/assets/img/HeRo-Study-Space/illustration.svg"
          alt="web chat"
        />
      </div>
      <div className="textArea">
        <h2>English immersion from anywhere</h2>
        <p>
          Build English proficiency and confidence through real conversations
          with friendly tutors from the US, UK, Australia, and more. All you
          need is your device!
        </p>
        <Link to="/Class"> <button>START LEARNING</button></Link>
      </div>
    </div>
  );
}

export default LandingImmersionSec;
