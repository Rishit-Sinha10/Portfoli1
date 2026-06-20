import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  px,
} from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import { useScramble } from "../hooks/useScramble";
import { HERO_WORDS } from "../constants/heroConstants";
import { MagButton } from "./mag";
import { DARK, LIGHT } from "./Theme";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profilepic from "../assets/profile.png";
import { HoverButton } from "./HoverButton";
import proof from "../assets/proof.avif";
import AsciiProfile from "../assets/AsciiProfile.avif"
export function Hero({ theme: T, dark } = {}) {
  const [hovered, setHovered] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  // Use provided theme or default to DARK
  const theme = T || DARK;
  const isDark = dark !== undefined ? dark : true;
  // Hooks
  const scrambled = useScramble("Building Systems That Work", hovered);
  const { scrollY } = useScroll();
  const typewriterText = useTypewriter(
    "Aspiring Full-stack engineer shipping production systems.design interfaces people love",
    30,
    800,
  );
  const scrollProgress = useTransform(scrollY, [0, 1000], [0, 100]);
  const blobY = useTransform(scrollY, [0, 600], [0, 80]);

  // Word rotation animation
  useEffect(() => {
    const t = setInterval(
      () => setWordIdx((i) => (i + 1) % HERO_WORDS.length),
      2200,
    );
    return () => clearInterval(t);
  }, []);
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: 0,
      }}
    >
      {/* Content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 800,
          margin: "0 auto",
          padding: "60px 20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <img
            src={proof}
            loading="lazy"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "40%",
              objectFit: "cover",
            }}
          />
          <span
            style={{
              margin: "0",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            Rishit Sinha
          </span>
        </div>
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="hero-name"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(32px, 10vw, 60px)",
            fontWeight: 400,
            lineHeight: 0.96,

            wordSpacing: "0.6px",
            color: theme.text,
            margin: "0 0 16px",
            cursor: "pointer",
          }}
        >
          {scrambled.split(" ").map((word, wi) => (
            <span
              key={wi}
              style={
                wi === 1
                  ? {
                      fontFamily: "DM Serif Display', Georgia, serif",
                      color: theme.accent,
                      WebkitTextStroke: "0px",
                    }
                  : {}
              }
            >
              {word}
              {wi === 0 ? " " : ""}
            </span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hero-desc"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(12px, 1vw, 16px)",
            color: theme.muted,
            lineHeight: 1.2,
            maxWidth: 400,
            marginBottom: 52,
          }}
        >
          {typewriterText}
        </motion.p>
        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://drive.google.com/file/d/1UgxwqWiQXlooi4EpOZ-GbZZpbqjn9t7r/view?usp=sharing" download
          >
            <HoverButton></HoverButton>
          </a>
          <MagButton
            onClick={() => {
              const element = document.getElementById("work");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{
              padding: "0.6rem 1.8rem",
              background: theme.text,
              color: theme.bg,
              border: "none",
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 7,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
              borderRadius: "99rem",
            }}
          >
            <span>View Project →</span>
          </MagButton>
          <a
            href="https://x.com/rizz13801"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "3px 6px",
              style: "none",
            }}
          >
            <FaTwitter size={12} />
          </a>
          <a
            href="https://www.linkedin.com/in/rishit-sinha-6953ab363"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "3px 6px",
              style: "none",
            }}
          >
            <FaLinkedin size={12} />
          </a>
          <a
            href="https://github.com/Rishit-Sinha10"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "3px 6px",
              style: "none",
            }}
          >
            <FaGithub size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
