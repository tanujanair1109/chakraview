// import React from "react";
import AboutBackground from "../Landing Page Assets/about-background.png";
import InterviewImg from "../Landing Page Assets/interview2.png"
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const openVideo = () => {
    window.open('https://youtu.be/eFbWGQ2-iQ0?si=mU4Wqh2re04vkmzP', '_blank');
  };

  return (
    <div className="about-section-container" id="about-section">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={InterviewImg} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Chakravyuh is an.....
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          {/* link to pdf */}
          <button className="watch-video-button" onClick={openVideo}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;