import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>patildvinayak@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/vinayakpatil_001/" target="_blank" rel="noreferrer">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/vinayakpatil4277" target="_blank" rel="noreferrer">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/vinayakpatil4277" target="_blank" rel="noreferrer">
            <Linkedin color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
