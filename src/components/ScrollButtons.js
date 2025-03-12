"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowUp, FaHome } from "react-icons/fa";
import styles from "./ScrollButtons.module.css";

export default function ScrollButtons() {
  const router = useRouter();
  const [showScroll, setShowScroll] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.buttonContainer}>
      {/* Go Back (Home) Button */}
      <button className={styles.goBack} onClick={() => router.push("/")}>
        <FaHome />
      </button>

      {/* Scroll Up Button (Only show when scrolled down) */}
      {showScroll && (
        <button className={styles.goUp} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
