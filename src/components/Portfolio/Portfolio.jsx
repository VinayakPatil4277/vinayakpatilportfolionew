// import React, { useContext } from "react";
// import "./Portfolio.css";
// import EnterpriseImg from "../../img/enterprise.png";
// import EcommerceImg from "../../img/website.png"; // <-- add this line
// import { themeContext } from "../../Context";

// const projects = [
//   {
//     title: "Enterprise Product Management System",
//     img: EnterpriseImg,
//     stack: ["Spring Boot", "MySQL", "JSP", "Bootstrap", "Git"],
//     achievements: [
//       "Reduced manual processes by 40% with automated inventory management.",
//       "Deployed secure, role-based dashboards for business operations.",
//       "Improved bug detection and reliability via robust validation and exception handling.",
//     ],
//     code: "",
//   },
//   {
//     title: "E-Commerce Web Portal",
//     img: EcommerceImg, // <-- add this line
//     stack: ["Spring Boot", "MySQL", "JSP", "Bootstrap", "Git"],
//     achievements: [
//       "Built end-to-end CRUD, shopping cart, and order management modules.",
//       "Optimized search/filter performance by 35% through advanced DB queries.",
//       "Developed reusable UI components to cut development time by 20%.",
//     ],
//     code: "",
//   },
// ];

// const Portfolio = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div className="portfolio" id="portfolio">
//       <span style={{ color: darkMode ? "white" : "" }}>Projects</span>
//       <span>Portfolio</span>
//       <div className="portfolio-grid">
//         {projects.map((p, i) => (
//           <div className="portfolio-card" key={i}>
//             <img src={p.img} alt={p.title} className="portfolio-img" />
//             <div className="portfolio-details">
//               <h3>{p.title}</h3>
//               <div className="portfolio-stack">
//                 {p.stack.map((s, j) => (
//                   <span className="stack-badge" key={j}>{s}</span>
//                 ))}
//               </div>
//               <ul>
//                 {p.achievements.map((a, k) => (
//                   <li key={k}>{a}</li>
//                 ))}
//               </ul>
//               {p.code && (
//                 <a href={p.code} target="_blank" rel="noopener noreferrer" className="portfolio-link">
//                   View Code
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


import React, { useContext } from "react";
import "./Portfolio.css";
import EnterpriseImg from "../../img/enterprise.png";
import EcommerceImg from "../../img/website.png";
import POSAndroidImg from "../../img/pos.png"; // Add this image to your img folder!
import { themeContext } from "../../Context";

const projects = [
  {
    title: "Enterprise Product Management System",
    img: EnterpriseImg,
    stack: ["Spring Boot", "MySQL", "JSP", "Bootstrap", "Git"],
    achievements: [
      "Reduced manual processes by 40% with automated inventory management.",
      "Deployed secure, role-based dashboards for business operations.",
      "Improved bug detection and reliability via robust validation and exception handling.",
    ],
    code: "",
  },
  {
    title: "E-Commerce Web Portal",
    img: EcommerceImg,
    stack: ["Spring Boot", "MySQL", "JSP", "Bootstrap", "Git"],
    achievements: [
      "Built end-to-end CRUD, shopping cart, and order management modules.",
      "Optimized search/filter performance by 35% through advanced DB queries.",
      "Developed reusable UI components to cut development time by 20%.",
    ],
    code: "",
  },
  {
    title: "POS Android App with Payment Gateway",
    img: POSAndroidImg, // Add your custom icon here
    stack: [
      "Android", "Kotlin", "Java", "RESTful APIs", "Razorpay", "Paytm", "Bluetooth", "SQLite"
    ],
    achievements: [
      "Developed a secure Android POS app for real-time payment processing using Razorpay/Paytm gateways.",
      "Integrated QR & NFC payment support and Bluetooth receipt printing.",
      "Enabled transaction logs, sales analytics, and user management for retailers.",
      "Ensured PCI DSS compliance and robust exception handling in payment workflows."
    ],
    code: "",
  },
];

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Projects</span>
      <span>Portfolio</span>
      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <div className="portfolio-card" key={i}>
            <img src={p.img} alt={p.title} className="portfolio-img" />
            <div className="portfolio-details">
              <h3>{p.title}</h3>
              <div className="portfolio-stack">
                {p.stack.map((s, j) => (
                  <span className="stack-badge" key={j}>{s}</span>
                ))}
              </div>
              <ul>
                {p.achievements.map((a, k) => (
                  <li key={k}>{a}</li>
                ))}
              </ul>
              {p.code && (
                <a href={p.code} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                  View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
