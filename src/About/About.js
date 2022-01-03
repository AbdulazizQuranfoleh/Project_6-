import React from "react";
import about from "../About/About.css";
import AboutCard from "./AboutCard";
import Carousel from 'react-bootstrap/Carousel'
import man1 from "../asset/man1.jpeg";
import man2 from "../asset/man2.jpg";
import man3 from "../asset/pexels.jpeg";
import man4 from "../asset/pexels-1.jpg";
function About(props) {
  return (
    <div className="allAbout">
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://www.christenseninstitute.org/wp-content/uploads/2018/07/Kneeling-to-help-student-800-x-400.jpg"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://cdn7.eslbase.com/wp-content/uploads/teacher.jpg"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://factsmgt.com/wp-content/uploads/15348_Why_Traditional_Teaching_Doesn%E2%80%99t_Work_Online_Blog.png"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
      <div className="About-Approach">
        <h1>
          Our Team
        </h1>
      </div>
      <div className="About-container">
        <AboutCard name={"Mikel"} Img={man1} className="About-container1" />
        <AboutCard name={"Jacob "} Img={man2} className="About-container2" />
        <AboutCard name={"Sara"} Img={man3} className="About-container3" />
        <AboutCard name={"lilya"} Img={man4} className="About-container4" />
        <AboutCard name={"Mikel"} Img={man1} className="About-container5" />
        <AboutCard name={"Mikel"} Img={man2} className="About-container6" />
        <AboutCard name={"Mikel"} Img={man3} className="About-container7" />
        <AboutCard name={"Mikel"} Img={man4} className="About-container8" />
      </div>
    </div>
  );
}

export default About;
