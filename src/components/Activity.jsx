import { useState } from "react";
import { Reveal } from "./Reveal";
import { useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
export function Activity() {
  // const [Leetcode, setLeetcode] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://leetcode-api-faisalshohag.vercel.app/rizz4566",
  //       );
  //       const data = await response.json();
  //       setLeetcode(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <section
        id="Activity"
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
                letterSpacing: "-0.02em",
                margin: "0 0 60px 0",
                textAlign: "center",
              }}
            >
              <em style={{ color: "#E07845", fontStyle: "italic" }}>
                Activity
              </em>
            </h2>
          </Reveal>
          <GitHubCalendar username="Rishit-Sinha10" />
        </div>
      </section>
    </>
  );
}
