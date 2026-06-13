import { Reveal } from "./Reveal";
import { color, motion } from "framer-motion";
import { DARK, LIGHT, Star } from "./Theme";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import image from "../assets/image.avif";
import Huzz from "../assets/Huzz.avif";
import Stream from "../assets/Stream.avif";
import lumina from "../assets/Lumina.avif";
import ZecoAI from "../assets/ZecoAI.avif";
import LifeDrop from "../assets/LifeDrop.avif";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGit,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaJava,
  FaLinux,
  FaCss3,
} from "react-icons/fa";

import {
  SiMongodb,
  SiPython,
  SiOpenai,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
  SiFigma,
  SiVercel,
  SiFlask,
  SiJavascript,
  SiRender,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiClaude,
  SiVite,
  SiNpm,
  SiPostgresql,
  SiRedis,
  SiNginx,
  SiGithubactions,
  SiCloudflare,
  SiGo,
  SiElixir,
  SiApachekafka,
  SiKubernetes,
  SiClerk,
  SiCss,
  SiHtml5,
  SiMongoose,
  SiFirebase,
} from "react-icons/si";
export function Work({ theme: t = DARK } = {}) {
  const [visibleCount, setVisibleCount] = useState(2);
  // Tech logo mapping
  const TECH_LOGOS = {
    React: (
      <FaReact
        size={10}
        style={{
          color: "#61dafb",
        }}
      />
    ),
    Express: (
      <SiExpress
        size={10}
        style={{
          color: "yellow",
        }}
      />
    ),
    "Node.js": (
      <FaNodeJs
        size={10}
        style={{
          color: "#3c873a",
        }}
      />
    ),
    MongoDB: (
      <SiMongodb
        size={10}
        style={{
          color: "#47a248",
        }}
      />
    ),
    Clerk: (
      <SiClerk
        size={10}
        style={{
          color: "#fff",
        }}
      />
    ),
    Flask: (
      <SiFlask
        size={10}
        style={{
          color: "#fff",
        }}
      />
    ),
    MySql: (
      <SiMysql
        size={10}
        style={{
          color: "#fff",
        }}
      />
    ),
    TailwindCSS: (
      <SiTailwindcss
        size={10}
        style={{
          color: "#38bdf8",
        }}
      />
    ),
    JS: (
      <SiJavascript
        size={10}
        style={{
          color: "#fff200",
        }}
      />
    ),
    VanillaCSS: <SiCss size={10} color="#8800ff" />,
    HTML: (
      <SiHtml5
        size={10}
        style={{
          color: "#ff6600",
        }}
      />
    ),
    FLASK: (
      <SiFlask
        size={10}
        style={{
          color: "#fff",
        }}
      />
    ),
    Mongoose: (
      <SiMongoose
        size={10}
        style={{
          color: "#DC143C",
        }}
      />
    ),
    Firebase: (
      <SiFirebase
        size={10}
        style={{
          color: "#DC143C",
        }}
      />
    ),
  };

  const PROJECTS = [
    {
      title: "FinanCinno",
      subtitle: "Expense Tracker Management System",
      desc: "FinanCino is an AI-powered finance tracking system built to make daily expense management simple, consistent, and actionable.Developed using React, Node.js, and Express, it combines a fast, lightweight interface with intelligent insights powered by the Gemini API. The system goes beyond basic tracking by introducing gamified rewards to drive user engagement and long-term financial discipline Designed with a scalable architecture and persistent data storage, FinanCino transforms expense tracking into a structured, insight-driven experience",
      image:
        "https://images.unsplash.com/photo-1554224311-beee415c15a7?w=600&h=400&fit=crop",
      tech: ["React", "Express", "Node.js", "MongoDB", "Clerk"],
      category: "Fullstack",
      status: "Live",
      image: image,
      featured: true,
      liveUrl: "https://finan-cino.vercel.app/",
      githubUrl: "https://github.com/Ramesh1234-ai/Financcino",
    },
    {
      title: "Lumina",
      desc: "An AI-powered learning system that transforms how users study, organize knowledge, and track progress.By integrating smart scheduling, real-time summaries, and personalized learning paths, the platform reduces study friction and enables more efficient, data-driven learning.",
      tech: ["React", "Node.js", "TailwindCSS", "MongoDB", "Express", "Clerk"],
      category: "fullsatck",
      image: lumina,
      status: "In Dev",
      featured: "false",
      liveUrl: "https://lumina-nine-tan.vercel.app/",
      githubUrl: "https://github.com/Ramesh1234-ai/NoteMog",
    },
    {
      title: "StreamFlow",
      desc: "StreamFlow is a scalable live streaming system designed to deliver ultra-low latency video and real-time audience interaction.The platform replicates a Twitch-like experience with high-performance streaming, real-time chat, and multi-device support. It incorporates AI-powered moderation and intelligent assistance to enhance safety and engagement while maintaining stream quality.Architected with React on the frontend and Node.js/Express on the backend, StreamFlow uses HLS, RTMP, Redis, and CDN-based delivery to handle real-time data flow and ensure consistent performance under load.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Clerk", "TailwindCSS"],
      category: "Fullstack",
      status: "In Dev",
      image: Stream,
      featured: false,
      liveUrl: "https://echo-rizz.vercel.app/",
      githubUrl: "https://github.com/ramesh1234-ai/bookish-spork",
    },
    {
      title: "ZecoAI",
      desc: "ZecoAI is an AI-powered development environment built to reduce friction in coding, debugging, and iteration.It combines a VS Code-like interface with intelligent code assistance, instant execution, and persistent conversational context, enabling developers to move from idea to working code faster. The system is designed for performance, usability, and seamless developer workflows.Built using React and Node.js, ZecoAI focuses on creating a unified, scalable coding experience.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Clerk", "Mongoose"],
      category: "fullstack",
      featured: "false",
      image: ZecoAI,
      status: "In Dev",
      liveUrl: "https://zecoai.vercel.app/",
      githubUrl: "https://github.com/Ramesh1234-ai/HeartSync",
    },
  ];
  return (
    <section
      id="work"
      style={{
        padding: "80px 20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "0 auto" }}>
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 72,
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  alignContent: "center",
                  marginBottom: 16,
                  justifyContent: "center",
                }}
              ></div>
              <h2
                style={{
                  fontFamily: "'DM Serif Display',serif",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  fontWeight: 400,
                  color: t.text,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <em style={{ color: t.accent, fontStyle: "italic" }}>
                  Projects
                </em>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* All Projects Grid */}
        <div
          className="all-projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 24,
          }}
        >
          <AnimatePresence mode="popLayout">
            {PROJECTS.slice(0, visibleCount).map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  background: t.surface,
                  border: `1px solid ${t.border}`,
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = p.color + "66";
                  e.currentTarget.style.boxShadow = `0 12px 32px ${p.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = t.border;
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.1)";
                }}
              >
                {/* Project Image */}
                <div
                  loading="lazy"
                  style={{
                    height: 180,
                    background: `linear-gradient(135deg, ${p.color}25, ${p.color}08)`,
                    backgroundImage: `url('${p.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, ${p.color}35, ${p.color}20)`,
                    }}
                  />
                  {/* Status Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      padding: "4px 12px",
                      borderRadius: 999,
                      background: `${p.color}20`,
                      border: `1px solid ${p.color}40`,
                      color: p.color,
                      fontFamily: "'Space Mono',monospace",
                      fontSize: 9,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {p.status}
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "16px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'DM Serif Display',serif",
                        fontSize: "1.1rem",
                        color: t.text,
                        margin: "0 0 4px",
                        fontWeight: 400,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Serif Display',serif",
                        fontSize: "0.70rem",
                        color: t.muted,
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>

                  {/* Tech Logos */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginTop: 12,
                      paddingTop: 12,
                      borderTop: `1px solid ${t.border}`,
                    }}
                  >
                    {p.tech.map((tech) => (
                      <div
                        key={tech}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          padding: "3px 8px",
                          borderRadius: 1,
                          background: t.surfaceAlt,
                          border: `4px solid ${t.border}`,
                        }}
                        title={tech}
                      >
                        <span style={{ fontSize: "0.9rem" }}>
                          {TECH_LOGOS[tech] || "⚙️"}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Space Mono',monospace",
                            fontSize: 7,
                            color: t.muted,
                          }}
                        >
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      marginTop: 12,
                      paddingTop: 12,
                      borderTop: `1px solid ${t.border}`,
                    }}
                  >
                    <motion.a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      style={{
                        fontFamily: "'Space Mono',monospace",
                        fontSize: 10,
                        color: p.color,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                        cursor: "pointer",
                      }}
                    >
                      <span>Live</span>
                      <span>→</span>
                    </motion.a>
                    <motion.a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      style={{
                        fontFamily: "'Space Mono',monospace",
                        fontSize: 9,
                        color: t.muted,
                        letterSpacing: "0.08em",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                        cursor: "pointer",
                      }}
                    >
                      <span>GitHub</span>
                      <span>→</span>
                    </motion.a>
                    <motion.a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      style={{
                        fontFamily: "'Space Mono',monospace",
                        fontSize: 9,
                        color: t.muted,
                        letterSpacing: "0.08em",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                        cursor: "pointer",
                      }}
                    >
                      <span>Star</span>
                      <span>
                        <svg
                          aria-hidden="true"
                          height="10"
                          viewBox="0 0 16 16"
                          width="10"
                          fill="currentColor"
                        >
                          <path d="M8 0l2.39 4.84 5.34.78-3.86 3.76.91 5.31L8 12.77l-4.78 2.52.91-5.31L.27 5.62l5.34-.78L8 0z" />
                        </svg>
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {visibleCount < PROJECTS.length && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: 48,
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount((prev) => prev + 3)}
              style={{
                padding: "12px 32px",
                borderRadius: 8,
                border: `2px solid ${t.accent}`,
                background: `${t.accent}15`,
                color: t.accent,
                fontFamily: "'Space Mono',monospace",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = t.accent;
                e.currentTarget.style.color = t.bg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${t.accent}15`;
                e.currentTarget.style.color = t.accent;
              }}
            >
              Load More Projects ({PROJECTS.length - visibleCount} remaining)
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
