import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { DARK } from "./Theme";
export function Experience({ theme: t = DARK } = {}) {
  const EXPERIENCES = [
    {
      id: "1",
      title: "Frontend Developer",
      company: "OctaNet",
      period: "May 2025 - July 2025",
      description: [
        "Built responsive UI components using React.js and Tailwind CSS, achieving  component reusability across 12+ pages.",
        "Implemented accessibility best practices (WCAG 2.1 AA), improving user engagement by reducing navigation friction.",
      ],
    },
    {
      id: "2",
      title: "Full Stack Intern",
      company: "Prodigy InfoTech",
      type: "open source",
      period: "July 2025 - Aug 2025",
      description: [
        "Architected real-time chat application using Node.js, Express, and WebSockets",
        "Implemented JWT-based authentication with MongoDB",
      ],
    },
    {
      id: "3",
      title: "Full Stack Intern",
      company: "NextLearn Technologies",
      type: "full-time",
      period: "April 2026 - May 2026",
      description: [
        "Designed and deployed responsive learning application with React + Node.js, reducing page load time by 65% (4.2s → 1.1s).",
        "Collaborated with design and backend teams to deliver 8 product features on schedule",
      ],
    },
  ];

  return (
    <section
      id="experience"
      style={{
        padding: "80px 20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", width: "100%" }}>
        <Reveal>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 400,
              color: t.text,
              letterSpacing: "-0.02em",
              margin: "0 0 60px 0",
              textAlign: "center",
            }}
          >
            <em style={{ color: t.accent, fontStyle: "italic" }}>Experience</em>
          </h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {EXPERIENCES.map((exp, index) => (
            <Reveal key={exp.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  display: "flex",
                  gap: 32,
                  paddingBottom: 32,
                  borderBottom: `1px solid ${t.border}`,
                }}
              >
                {/* ID */}
                <div
                  style={{
                    minWidth: 50,
                    fontSize: "14px",
                    fontWeight: 600,
                    color: t.accent,
                    letterSpacing: "0.1em",
                    opacity: 0.6,
                  }}
                >
                  Level {exp.id}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 12,
                      flexWrap: "wrap",
                      gap: 16,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: 600,
                          color: t.text,
                          margin: "0 0 4px 0",
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {exp.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: t.muted,
                          margin: 0,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {exp.company}{" "}
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: t.accent,
                        whiteSpace: "nowrap",
                        opacity: 0.7,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <ul
                    style={{
                      margin: "16px 0 0 0",
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "14px",
                          color: t.muted,
                          margin: 0,
                          paddingLeft: 16,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: t.accent,
                          }}
                        >
                          •
                        </span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
