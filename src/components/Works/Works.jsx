// import React, { useContext } from "react";
// import "./Works.css";
// import SensesLogo from "../../img/senses_circle_icon.png";
// import SpringLogo from "../../img/springboot.png";
// import MySQLLogo from "../../img/mysql.png";
// import ReactLogo from "../../img/java1.png";
// import DockerLogo from "../../img/android1.png";
// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";

// const Works = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   return (
//     <div className="works" id="works">
//       {/* Left side: Experience and Pitch */}
//       <div className="w-left">
//         <div className="awesome">
//           <span style={{ color: darkMode ? "white" : "" }}>
//             Where I’ve Worked
//           </span>
//           <span>Professional Experience</span>
//           <span>
//             <strong>Jr. Software Developer at Senses Electronics Pvt. Ltd.</strong><br />
//             2 years of experience in Java Full Stack, Spring Boot, and RESTful APIs.<br />
//             • Built scalable web applications and mobile-responsive UIs.<br />
//             • Automated deployments with Docker and CI/CD.<br />
//             • Delivered projects using MySQL, React, and AWS.
//           </span>
//           <Link to="contact" smooth={true} spy={true}>
//             <button className="button s-button">Contact Me</button>
//           </Link>
//           <div
//             className="blur s-blur1"
//             style={{ background: "#ABF1FF94" }}
//           ></div>
//         </div>
//       </div>
//       {/* Right side: Tech stack as circles */}
//       <div className="w-right">
//         <motion.div
//           initial={{ rotate: 30 }}
//           whileInView={{ rotate: 0 }}
//           viewport={{ margin: "-40px" }}
//           transition={{ duration: 3.5, type: "spring" }}
//           className="w-mainCircle"
//         >
//           <div className="w-secCircle">
//             <img src={SensesLogo} alt="Senses Electronics" />
//           </div>
//           <div className="w-secCircle">
//             <img src={SpringLogo} alt="Spring Boot" />
//           </div>
//           <div className="w-secCircle">
//             <img src={MySQLLogo} alt="MySQL" />
//           </div>
//           <div className="w-secCircle">
//             <img src={ReactLogo} alt="React" />
//           </div>
//           <div className="w-secCircle">
//             <img src={DockerLogo} alt="Docker" />
//           </div>
//         </motion.div>
//         {/* background Circles */}
//         <div className="w-backCircle blueCircle"></div>
//         <div className="w-backCircle yellowCircle"></div>
//       </div>
//     </div>
//   );
// };

// export default Works;


import React, { useContext } from "react";
import "./Works.css";
import SensesLogo from "../../img/senses_circle_icon.png";
import SpringLogo from "../../img/springboot.png";
import MySQLLogo from "../../img/mysql.png";
import ReactLogo from "../../img/java1.png";
import DockerLogo from "../../img/android1.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      {/* Left side: Experience and Pitch */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            Where I’ve Worked
          </span>
          <span>Professional Experience</span>
          <span>
            <strong>Jr. Software Developer at Senses Electronics Pvt. Ltd.</strong><br />
            2 years of experience in Java Full Stack, Spring Boot, and RESTful APIs.<br />
            • Built scalable web applications and mobile-responsive UIs.<br />
            • Automated deployments with Docker and CI/CD.<br />
            • Delivered projects using MySQL, React, and AWS.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contact Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* Right side: Tech stack as circles */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 30 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={SensesLogo} alt="Senses Electronics" />
          </div>
          <div className="w-secCircle">
            <img src={SpringLogo} alt="Spring Boot" />
          </div>
          <div className="w-secCircle">
            <img src={MySQLLogo} alt="MySQL" />
          </div>
          <div className="w-secCircle">
            <img src={ReactLogo} alt="React" />
          </div>
          <div className="w-secCircle">
            <img src={DockerLogo} alt="Docker" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;

