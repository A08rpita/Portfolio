import styles from "./Skills.module.css";
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaCuttlefish, FaReact, FaNodeJs, FaDatabase,
  FaFlask, FaGitAlt
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTensorflow, SiKeras, SiPandas, SiNumpy, SiBootstrap, SiOpencv, SiPytorch } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: <FaCuttlefish color="#00599C" />, percentage: 85 },
      { name: "Python", icon: <FaPython color="#3776AB" />, percentage: 90 },
      { name: "HTML", icon: <FaHtml5 color="#E34F26" />, percentage: 95 },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" />, percentage: 90 },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" />, percentage: 85 },
    ],
  },
  {
    title: "Frameworks and Databases",
    skills: [
      { name: "Flask", icon: <FaFlask color="#ffffff" />, percentage: 80 },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" />, percentage: 75 },
      { name: "Node.js", icon: <FaNodeJs color="#68A063" />, percentage: 80 },
      { name: "Express.js", icon: <FaNodeJs color="#ffffff" />, percentage: 75 },
      { name: "Flutter", icon: <TbDeviceMobileCode color="#02569B" />, percentage: 70 },
      { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" />, percentage: 80 },
      { name: "Keras", icon: <SiKeras color="#D00000" />, percentage: 75 },
      { name: "MySQL", icon: <SiMysql color="#4479A1" />, percentage: 85 },
      { name: "React.js", icon: <FaReact color="#61DAFB" />, percentage: 80 },
    ],
  },
  {
    title: "Relevant Libraries and Tools",
    skills: [
      { name: "Pandas", icon: <SiPandas color="#150458" />, percentage: 85 },
      { name: "Matplotlib", icon: <SiPandas color="#ffffff" />, percentage: 80 },
      { name: "NumPy", icon: <SiNumpy color="#013243" />, percentage: 85 },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" />, percentage: 85 },
      { name: "Git", icon: <FaGitAlt color="#F05032" />, percentage: 90 },
      { name: "BeautifulSoup", icon: <FaPython color="#ffffff" />, percentage: 75 },
      { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" />, percentage: 70 },
      { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" />, percentage: 75 },
    ],
  },
];

const CircularProgress = ({ percentage }) => {
    const radius = 20; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
  
    return (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className={styles.circularProgress}
        style={{ transform: "rotate(360deg)" }} // Rotate by 180 degrees
      >
        <circle cx="25" cy="25" r={radius} stroke="#333" strokeWidth="5" fill="none" />
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="#007bff"
          strokeWidth="5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={styles.progressAnimation}
        />
        <text x="25" y="28" textAnchor="middle" fontSize="10px" fill="#007bff">
          {percentage}%
        </text>
      </svg>
    );
  };
  

export default function Skills() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Skills</h1>
      <div className={styles.skillsGrid}>
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.category}>
            <h2 className={styles.categoryTitle}>{category.title}</h2>
            <div className={styles.skillsList}>
              {category.skills.map((skill, i) => (
                <div key={i} className={styles.skillItem}>
                  <div className={styles.iconContainer}>{skill.icon}</div>
                  <p className={styles.skillName}>{skill.name}</p>
                  <CircularProgress percentage={skill.percentage} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
