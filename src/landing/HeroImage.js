import React from "react";
import '../landing/HeroImage.css'
import { Link } from "react-router-dom";
function HeroImage() {
  return (
    <div className="heroImageContainer">

      <div className="actionArea">
        <h2>Say hello to your private English tutor</h2>
        <p>
          Become fluent faster through one-on-one video chat lessons tailored to
          your goals.
        </p>
        <Link to="/Class"><button> GET STARTED</button></Link>
      </div>
    </div>
  );
}

export default HeroImage;
