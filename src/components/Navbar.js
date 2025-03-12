"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Ensure theme toggle loads correctly
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle navbar background change on scroll
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${hasScrolled ? styles.scrolled : ""}`}>
      {/* Logo - Arpita's Portfolio */}
      <div className={styles.logo}>
        <Link href="/" className={styles.logoText}>Arpita's Portfolio</Link>
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""} ${hasScrolled ? styles.navShift : ""}`}>
        <li>
          <Link href="/" className={pathname === "/" ? styles.activeLink : ""} onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link href="/projects" className={pathname === "/projects" ? styles.activeLink : ""} onClick={closeMenu}>Projects</Link>
        </li>
        <li>
          <Link href="/skills" className={pathname === "/skills" ? styles.activeLink : ""} onClick={closeMenu}>Skills</Link>
        </li>
        <li>
          <Link href="/work-experience" className={pathname === "/work-experience" ? styles.activeLink : ""} onClick={closeMenu}>Experience</Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === "/contact" ? styles.activeLink : ""} onClick={closeMenu}>Contact</Link>
        </li>

        {/* Theme Toggle Button - Positioned after Contact */}
        <li>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={styles.themeToggle}>
            {mounted && (theme === "dark" ? <FaSun /> : <FaMoon />)}
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}
