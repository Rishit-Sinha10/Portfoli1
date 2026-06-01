import { useState, useEffect } from "react";
export function useTypewriter(text, speed = 50, delay = 0) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setIndex((i) => {
            if (i < text.length) {
              setDisplay(text.slice(0, i + 1));
              return i + 1;
            } else {
              clearInterval(interval);
              return i;
            }
          });
        }, speed);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [text, speed, delay]);
  return display;
}
