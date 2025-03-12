"use client";  // 🔹 This makes the component a Client Component

import { useState } from "react";
import styles from './contact.module.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success) {
                setStatus("Email sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // Reset form
            } else {
                setStatus("Failed to send email.");
            }
        } catch (error) {
            setStatus("Error sending email.");
        }
    };

    // CV Download Function
    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "/Resume_Internship.pdf";  // Ensure this file is inside the 'public' folder
        link.download = "Arpita_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.contactSection}>
            {/* Left Side - Contact Form */}
            <div className={styles.contactContainer}>
                <h2 className={styles.sectionHeading}>Contact Me</h2>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
                    </div>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
                <p className={styles.statusMessage}>{status}</p>
            </div>

            {/* Right Side - Contact Information & CV Download */}
            <div className={styles.rightSection}>
                {/* Contact Information */}
                <div className={styles.infoContainer}>
                    <h2 className={styles.sectionHeading}>Contact Information</h2>
                    <p className={styles.contactDetails}>
                        <i className="fas fa-envelope"></i> 
                        <a href="mailto:arpitakhobragde2308@gmail.com"> arpitakhobragade2308@gmail.com</a> <br />

                        <i className="fas fa-phone"></i> 
                        <span> +91 7666997285</span> <br />

                        <i className="fab fa-linkedin"></i> 
                        <a href="https://www.linkedin.com/in/arpita-khobragade-06a121331" target="_blank" rel="noopener noreferrer">  LinkedIn</a> <br />

                        <i className="fab fa-github"></i>
                        <a href="https://github.com/A08rpita" target="_blank" rel="noopener noreferrer">  Github</a> <br />
                    </p>
                </div>

                {/* CV Download */}
                <div className={styles.cvContainer}>
                    <h2 className={styles.sectionHeading}>Download My CV</h2>
                    <button className={styles.cvButton} onClick={handleDownloadCV}>
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
