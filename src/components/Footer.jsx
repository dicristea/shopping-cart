import React from "react";
import githubLogoWhite from "../assets/github-mark-white.png";
import githubLogo from "../assets/GitHub-Mark-64px.png";
import linkedInLogoWhite from "../assets/In-White-72.png";
import linkedInLogo from "../assets/In-black-96.png";

const Footer = ({ color }) => (
  <footer
    style={
      color === "white"
        ? { paddingBottom: "20px", height: "9vh" }
        : {
            height: "9vh",
            color: "black",
            display: "flex",
            gap: "10px",
            position: "relative",
          }
    }
  >
    <div className="footer-icons">
      <a
        href="https://github.com/dicristea/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="sourceGithub"
          src={color === "white" ? githubLogoWhite : githubLogo}
          alt="Diana's Github Profile"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/diana-cristea-243a57164/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="sourceLinkedIn"
          src={color === "white" ? linkedInLogoWhite : linkedInLogo}
          alt="Diana's LinkedIn Profile"
        />
      </a>
    </div>
    <div>ddtea 2023</div>
  </footer>
);

export default Footer;
