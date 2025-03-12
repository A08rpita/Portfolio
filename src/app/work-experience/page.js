import styles from "./WorkExperience.module.css";
import { FaCalendarAlt, FaBuilding, FaCode } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

export default function WorkExperience() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Work Experience</h1>
      
      <div className={styles.experienceCard}>
        <div className={styles.details}>
          <div className={styles.row}>
            <FaBuilding className={styles.icon} />
            <p>Reto India - Web Developer Intern</p>
          </div>
          <div className={styles.row}>
            <FaCalendarAlt className={styles.icon} />
            <p>March 2025 - Present (Currently Working)</p>
          </div>
        </div>

        <div className={styles.row}>
   <p className={styles.description}>
      Currently working as a Web Developer Intern at Reto India.
   </p>
</div>
<ul className={styles.responsibilities}>
  <li>Developing and optimizing web applications for better performance.</li>
  <li>Implementing responsive UI designs for enhanced user experience.</li>
  <li>Working with modern web technologies like React.js and Node.js.</li>
  <li>Collaborating with teams to improve website functionality.</li>
</ul>


        <h3 className={styles.skillHeading}>Skills Used:</h3>
        <div className={styles.skills}>
          <SiJavascript className={`${styles.skillIcon} ${styles.js}`} />
          <SiReact className={`${styles.skillIcon} ${styles.react}`} />
          <SiNodedotjs className={`${styles.skillIcon} ${styles.node}`} />
          <SiMongodb className={`${styles.skillIcon} ${styles.mongo}`} />
        </div>
      </div>
    </div>
  );
}
