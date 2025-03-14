"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  // Rotating roles with smooth transition
  const roles = [
    "Web Developer",
    "ML Enthusiast",
    "DSE Student at IIT Mandi",
    "Intern at Reto India",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {/* Main Section */}
      <div className={styles.mainSection}>
        <div className={styles.leftSection}>
          <h1 className={styles.staticText}>
            Hello, I am <span>Arpita Khobragade</span>
          </h1>
          <h2 className={styles.animatedText}>{roles[currentRoleIndex]}</h2>
          <p className={styles.description}>
            I am a passionate web developer and AI/ML enthusiast currently
            pursuing Data Science and Engineering at IIT Mandi. I have
            experience in full-stack development and machine learning.
          </p>



          {/* Download CV Button */}
          <a href="/Resume_Arpita.pdf" download className={styles.cvButton}>
            Download CV
          </a>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/arpita-khobragade-06a121331"
              target="_blank"
              className={styles.icon}
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/A08rpita"
              target="_blank"
              className={styles.icon}
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://leetcode.com/u/A23rpita/"
              target="_blank"
              className={styles.icon}
            >
              <SiLeetcode size={30} />
            </a>
            <a
              href="mailto:arpitakhobragade2308@gmail.com"
              className={styles.icon}
            >
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className={styles.rightSection}>
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={320}
            height={320}
            className={styles.profileImage}
          />
        </div>
      </div>

      {/* Achievements Section */}
      <div className={styles.achievementSection}>
        <h2 className={styles.sectionHeading}>Achievements</h2>
        <ul className={styles.list}>
          <li>Shortlisted for Smart India Hackathon (SIH).</li>
          <li>Selected for Cyber For Her Hackathon - Phase 2.</li>
          <li>Student Trainee at SheCodes.</li>
        </ul>
      </div>

      {/* Projects Section */}
      <div className={styles.projectsSection}>
        <h2 className={styles.sectionHeading}>Projects</h2>
        <p>Here are some of my key projects.</p>
        <button
          className={styles.viewButton}
          onClick={() => router.push("/projects")}
        >
          View Projects
        </button>
      </div>

      {/* Skills Section */}
      <div className={styles.skillsSection}>
        <h2 className={styles.sectionHeading}>Skills</h2>
        <p>
          I have experience with Full-Stack Development, Machine Learning, and
          Data Science.
        </p>
        <button
          className={styles.viewButton}
          onClick={() => router.push("/skills")}
        >
          View Skills
        </button>
      </div>

      {/* Work Experience Section */}
      <div className={styles.workExperienceSection}>
        <h2 className={styles.sectionHeading}>Work Experience</h2>
        <p>
          I have worked on AI-driven analytics, full-stack applications, and
          frontend development.
        </p>
        <button
          className={styles.viewButton}
          onClick={() => router.push("/work-experience")}
        >
          View Experience
        </button>
      </div>
    </div>
  );
}
