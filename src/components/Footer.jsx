import React from "react";
import githubLogo from "../assets/GitHub-Mark-64px.png";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/dicristea/memory-game">
        <img
          className="sourceGithub"
          src={githubLogo}
          alt="Project Source on Github"
        />
      </a>
      ddtea 2023
    </footer>
  );
};

export default Footer;
