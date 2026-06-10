import { color, motion } from "framer-motion";
import { DARK, LIGHT } from "./Theme";
import { Reveal } from "./Reveal";
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
  SiCss,
  SiClerk,
} from "react-icons/si";

export function Skills({ theme: T, dark } = {}) {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#fff200" },
        { name: "Java", icon: <FaJava />, color: "#ff000094" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61dafb" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
        { name: "VanilaCSS", icon: <SiCss />, color: "#a632a6" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
        { name: "Express", icon: <SiExpress />, color: "#000" },
        { name: "Flask", icon: <SiFlask />, color: "#848484" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000" },
      ],
    },
    {
      category: "DataBase",
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "#336791" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      ],
    },
    {
      category: "Cloud",
      skills: [
        { name: "Render", icon: <SiRender />, color: "#000" },
        { name: "Vercel", icon: <SiVercel />, color: "#000" },
        { name: "Clerk", icon: <SiClerk />, color: "rgba(2, 204, 255, 0.4)" },
      ],
    },
  ];

  const theme = T || DARK;
  const isDark = dark !== undefined ? dark : true;

  return (
    <section
      id="skills"
      style={{
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <h2
            style={{
              fontFamily: "'DM Serif Display',serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 400,
              color: theme.text,
              letterSpacing: "-0.02em",
              marginBottom: 72,
            }}
          >
            My <em style={{ color: theme.accent }}>Tech Stack</em>
          </h2>
        </Reveal>

        {/* Skills Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              style={{
                display: "flex",
                gap: 32,
                alignItems: "flex-start",
              }}
            >
              {/* Category Label */}
              <div
                style={{
                  minWidth: 100,
                  paddingTop: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: theme.muted,
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    fontFamily: "'DM Serif Display', Georgia, serif",
                  }}
                >
                  {category.category}
                </span>
              </div>
              {/* Skills Grid */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  flex: 1,
                }}
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ scale: 1.05, y: -4 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 16px",
                      borderRadius: 8,
                      fontSize: 13,
                      color: theme.text,
                      fontWeight: 500,
                      fontFamily: "'Space Mono',monospace",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span style={{ fontSize: "1.2em", color: skill.color }}>
                      {skill.icon}
                    </span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
