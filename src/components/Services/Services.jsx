import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import JavaLogo from "../../img/java1.png";
import AndroidLogo from "../../img/android1.png";
import ApiIcon from "../../img/API.png";
import DeployIcon from "../../img/deploy.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./Vinayak_Java_Full_Stack_Resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition for cards
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Experience</span>
<span>Java Full Stack & Android</span>
<span>
  Detail-oriented Full Stack Developer with 2 years of experience.<br/>
  Proficient in Java, Spring Boot, RESTful APIs, MySQL, Android, and CI/CD.<br/>
  Delivered scalable solutions and improved deployment efficiency at Senses Electronics Pvt. Ltd.
</span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        {/* Java Full Stack */}
        <motion.div
          initial={{ left: "26rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={JavaLogo}
            heading="Java Full Stack"
            detail="Java 8+, Spring Boot, Hibernate, REST APIs, MySQL, React.js"
          />
        </motion.div>

        {/* Android Development */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem", top: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={AndroidLogo}
            heading="Android"
            detail="Kotlin, Java, MVVM, Jetpack Compose, Firebase, SQLite"
          />
        </motion.div>

        {/* Deployment & Cloud (moved up in place of UI/UX) */}
        <motion.div
          initial={{ top: "19rem", left: "26rem" }}
          whileInView={{ left: "13rem", top: "19rem" }}
          transition={transition}
        >
          <Card
            emoji={DeployIcon}
            heading="Deployment"
            detail="Git, Docker, AWS, CI/CD, Netlify, Vercel"
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

    
        {/* API Integration */}
        <motion.div
          initial={{ left: "-11rem", top: "32rem" }}
          whileInView={{ left: "-4rem", top: "32rem" }}
          transition={transition}
        >
          <Card
            emoji={ApiIcon}
            heading="API Integration"
            // detail="RESTful APIs, Postman, Swagger, Third-party Auth"
            detail="RESTful APIs, OpenAPI, OAuth2, Stripe, Razorpay, Plaid, Webhooks, RapidAPI"
          />
        </motion.div>

        {/* background blur */}
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;
