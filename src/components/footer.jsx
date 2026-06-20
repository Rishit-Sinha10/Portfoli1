import { useState } from "react";
import proof from "../assets/proof.avif";
import profilepic from "../../src/assets/profile.png";
const navItems = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Activity", id: "Activity" },
  { label: "Contact", id: "contact" },
];

export default function NavDock({ darkMode = false, toggleTheme = () => {} }) {
  const [activeItem, setActiveItem] = useState("home");
  const [hovered, setHovered] = useState(null);
  const scrollToSection = (id) => {
    setActiveItem(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: darkMode
            ? "rgba(30, 30, 30, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          border: darkMode ? "1px solid #333" : "1px solid #e5e7eb",
          borderRadius: "30px",
          padding: "3px 4px",
          boxShadow: darkMode
            ? "0 4px 12px rgba(0, 0, 0, 0.3)"
            : "0 4px 12px rgba(0, 0, 0, 0.08)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo/Brand */}
        <a href="">
          <img
            src={proof}
            loading="lazy"
            onClick={() => {
              const element = document.getElementById("home");
            }}
            style={{
              marginRight: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #E07845 0%, #ff9466 100%)",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "7px",
            }}
          ></img>
        </a>

        {/* Nav Items */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "relative",
              padding: "2px 4px",
              fontSize: "10px",
              fontWeight: 600,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              transition: "all 0.2s ease",
              color:
                activeItem === item.id
                  ? "#E07845"
                  : hovered === item.id
                    ? darkMode
                      ? "#fff"
                      : "#171717"
                    : darkMode
                      ? "#aaa"
                      : "#666",
              textDecoration: "none",
            }}
          >
            {item.label}

            {/* Active underline */}
            {activeItem === item.id && (
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "2px",
                  background: "#E07845",
                  borderRadius: "1px",
                }}
              />
            )}
          </button>
        ))}

        {/* Divider */}
        <div
          style={{
            width: "1px",
            height: "20px",
            background: darkMode ? "#555" : "#e5e7eb",
            margin: "0 8px",
          }}
        />

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          style={{
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: darkMode ? "#aaa" : "#666",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = darkMode ? "#333" : "#f0f0f0";
            e.currentTarget.style.color = darkMode ? "#fff" : "#171717";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = darkMode ? "#aaa" : "#666";
          }}
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </nav>
    </div>
  );
}
