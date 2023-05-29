import React from "react";
import Footer from "./Footer";
import aboutHeroImg from "../assets/about-hero-img.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className="about-img">
        <img src={aboutHeroImg} alt="Woman Sking down slope" />
      </div>
      <div className="about-page">
        <div className="about-container">
          <h2 className="about-header">About Us</h2>
          <div className="header-h-line"></div>
          <div className="about-text">
            This page is about the amazingly warm and hefty winter collection we
            present to you designed and created by our finest artisans. We hope
            our work inspires and protects you from the harshet conditions on
            your adventures.
          </div>
        </div>
        <Footer color={"black"} />
      </div>
    </>
  );
};

export default About;
