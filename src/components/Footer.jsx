import React from "react";
import githubLogo from "../assets/GitHub-Mark-64px.png";
import linkedInLogo from "../assets/LinkedIn-in-96.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <a
          href="https://github.com/dicristea/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sourceGithub"
            src={githubLogo}
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
            src={linkedInLogo}
            alt="Diana's LinkedIn Profile"
          />
        </a>
      </div>
      <div>ddtea 2023</div>
    </footer>
  );
};

export default Footer;
