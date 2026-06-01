import { useState } from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { Project } from "./components/Projects";
import { Skills } from "./components/Skills";
function App() {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <Hero />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
