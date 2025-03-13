"use client";
import styles from "./projects.module.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { SiFlask, SiTensorflow, SiKeras, SiPython, SiNextdotjs } from "react-icons/si";

const projects = [
  {
    title: "CauliCare – Cauliflower Disease Detection",
    description:
      "Developed a CNN-based image classification model to predict cauliflower diseases from leaf images. Deployed using Flask for real-time predictions.",
    skills: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiFlask />, name: "Flask" },
    ],
    github: "https://github.com/A08rpita/Cauliflower-Disease-Predictor",
    liveDemo: "https://screenrec.com/share/WUmb0RfNHP",
  },
  {
    title: "CashBot – Currency Converter Chatbot",
    description:
      "Developed a Currency Converter Chatbot using Flask, Python, and Free Currency Converter API for real-time exchange rates, historical data visualization, and seamless user interactions.",
    skills: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiFlask />, name: "Flask" },
    ],
    github: "https://github.com/A08rpita/CashBot", // Replace with actual GitHub link
  },
  {
    title: "WearNet –Styles Classification",
    description:
      "Built a CNN model to classify handwritten digits from the MNIST dataset using TensorFlow and Keras. Achieved high accuracy with dropout and batch normalization.",
    skills: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiTensorflow />, name: "TensorFlow" },
      { icon: <SiKeras />, name: "Keras" },
    ],
    github: "https://github.com/A08rpita/WearNet", // Replace with actual GitHub link
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio using Next.js and deployed it on Vercel. Features include animations and dark mode.",
    skills: [
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiPython />, name: "JavaScript" }, // Replace Python with JS icon if needed
    ],
    github: "https://github.com/A08rpita/Portfolio", // Replace with actual GitHub link
    liveDemo: "https://portfolio-a08rpitas-projects.vercel.app/", // Replace with actual live link
  },
];

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.sectionHeading}>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>

          {/* Skill Icons */}
          <div className={styles.skills}>
            {project.skills.map((skill, i) => (
              <span key={i} className={styles.skill}>{skill.icon}</span>
            ))}
          </div>

          {/* Buttons for Code & Live Demo */}
          <div className={styles.projectLinks}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.codeButton}`}>
              <FaGithub className={styles.icon} /> Code
            </a>

            {/* Show Live Demo button only if liveDemo exists */}
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.demoButton}`}>
                <FiExternalLink className={styles.icon} /> Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
