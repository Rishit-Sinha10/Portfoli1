import { useState } from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Work } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Activity } from "./components/Activity";
import { SiLeetcode } from "react-icons/si";
import {
  FaDiscord,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import NavDock from "./components/footer";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  const Separator = ({ className = "" }) => (
    <div
      className={`separator ${className}`}
      style={{
        borderColor: darkMode ? "#444" : "#e5e7eb",
      }}
    />
  );
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{
        position: "relative",
        background: darkMode ? "#1a1a1a" : "#fff",
        minHeight: "100vh",
        color: darkMode ? "#e5e7eb" : "#000",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Background gradient overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.6,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavDock darkMode={darkMode} toggleTheme={toggleTheme} />
        <Hero />
        <Separator />
        <Skills />
        <Separator />
        <Experience />
        <Separator />
        <Work />
        <Separator />
        <Activity />
        <footer
          style={{
            background: darkMode ? "#0f0f0f" : "#fafafa",
            borderTop: darkMode ? "1px solid #333" : "1px solid #e5e7eb",
            padding: "40px 20px",
            marginTop: "80px",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <p
                style={{
                  color: darkMode ? "#b0b0b0" : "#666",
                  fontSize: "14px",
                  margin: 0,
                  fontWeight: 500,
                  transition: "color 0.3s ease",
                }}
              >
                © {currentYear} Rishit Sinha. All rights reserved.
              </p>
              <p
                style={{
                  color: darkMode ? "#888" : "#999",
                  fontSize: "12px",
                  margin: "4px 0 0 0",
                  transition: "color 0.3s ease",
                }}
              >
                Building systems that scale.
              </p>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <a
                href="https://github.com/Ramesh1234-ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: darkMode ? "#222" : "#f0f0f0",
                  color: darkMode ? "#aaa" : "#171717",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E07845";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = darkMode
                    ? "#222"
                    : "#f0f0f0";
                  e.currentTarget.style.color = darkMode ? "#aaa" : "#171717";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.instagram.com/rishit_149"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: darkMode ? "#222" : "#f0f0f0",
                  color: darkMode ? "#aaa" : "#171717",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E07845";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = darkMode
                    ? "#222"
                    : "#f0f0f0";
                  e.currentTarget.style.color = darkMode ? "#aaa" : "#171717";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="mailto:Sinharishit04@gmail.com"
                aria-label="Email"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: darkMode ? "#222" : "#f0f0f0",
                  color: darkMode ? "#aaa" : "#171717",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E07845";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = darkMode
                    ? "#222"
                    : "#f0f0f0";
                  e.currentTarget.style.color = darkMode ? "#aaa" : "#171717";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaEnvelope size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/rishit-sinha-6953ab363"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: darkMode ? "#222" : "#f0f0f0",
                  color: darkMode ? "#aaa" : "#171717",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E07845";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = darkMode
                    ? "#222"
                    : "#f0f0f0";
                  e.currentTarget.style.color = darkMode ? "#aaa" : "#171717";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://discord.com/users/blackdevil345w"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: darkMode ? "#222" : "#f0f0f0",
                  color: darkMode ? "#aaa" : "#171717",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E07845";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = darkMode
                    ? "#222"
                    : "#f0f0f0";
                  e.currentTarget.style.color = darkMode ? "#aaa" : "#171717";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaDiscord size={18} />
              </a>
              <a
                href="https://leetcode.com/u/rizz4566/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: darkMode ? "#222" : "#f0f0f0",
                  color: darkMode ? "#aaa" : "#171717",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E07845";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = darkMode
                    ? "#222"
                    : "#f0f0f0";
                  e.currentTarget.style.color = darkMode ? "#aaa" : "#171717";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <SiLeetcode size={18} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
