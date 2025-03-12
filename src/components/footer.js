import styles from "./footer.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Arpita Khobragade. All rights reserved.</p>
        
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/arpita-khobragade-06a121331" target="_blank" className={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/A08rpita" target="_blank" className={styles.icon}>
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/A23rpita/" target="_blank" className={styles.icon}>
            <SiLeetcode />
          </a>
          <a href="mailto:arpitakhobragade2308@gmail.com" className={styles.icon}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
