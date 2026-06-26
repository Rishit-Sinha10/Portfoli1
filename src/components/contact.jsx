import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { DARK} from "./Theme";
export function Contact({ theme: t = DARK } = {}) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Email submission - can be replaced with your endpoint
      const response = await fetch("https://formspree.io/f/xqeovzao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        display: "flex",
        alignItems: "center",
        minHeight: "60vh",
        background: t.background,
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", width: "100%" }}>
        <Reveal>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 400,
              color: t.text,
              letterSpacing: "-0.02em",
              margin: "0 0 20px 0",
              textAlign: "center",
            }}
          >
            <em style={{ color: t.accent, fontStyle: "italic" }}>
              Let's Work Together
            </em>
          </h2>
        </Reveal>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            textAlign: "center",
            color: t.text,
            fontSize: "1.1rem",
            lineHeight: 1.6,
            marginBottom: "48px",
            opacity: 0.8,
          }}
        >
          Open to internships, full-time roles, contract work, and
          collaborations. Send me a message or reach out directly.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            "@media (min-width: 768px)": {
              gridTemplateColumns: "2fr 1fr",
            },
          }}
        >
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 600,
                  color: t.text,
                  fontSize: "0.95rem",
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: `1px solid ${t.border}`,
                  background: t.background,
                  color: t.text,
                  fontSize: "1rem",
                  fontFamily: "inherit",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = t.accent;
                  e.target.style.boxShadow = `0 0 0 3px ${t.accent}15`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = t.border;
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 600,
                  color: t.text,
                  fontSize: "0.95rem",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: `1px solid ${t.border}`,
                  background: t.background,
                  color: t.text,
                  fontSize: "1rem",
                  fontFamily: "inherit",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = t.accent;
                  e.target.style.boxShadow = `0 0 0 3px ${t.accent}15`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = t.border;
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 600,
                  color: t.text,
                  fontSize: "0.95rem",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: `1px solid ${t.border}`,
                  background: t.background,
                  color: t.text,
                  fontSize: "1rem",
                  fontFamily: "inherit",
                  transition: "all 0.3s ease",
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = t.accent;
                  e.target.style.boxShadow = `0 0 0 3px ${t.accent}15`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = t.accent;
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: "14px 28px",
                background: t.accent,
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: isLoading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                opacity: isLoading ? 0.7 : 1,
              }}
            >
              {isLoading ? "Sending..." : "Send Message"}
              
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: "12px 16px",
                  background: "#10b98120",
                  color: "#10b981",
                  borderRadius: "8px",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                ✓ Message sent! I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
