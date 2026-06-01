import { useState, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

export function useScramble(text, trigger) {
  const [display, setDisplay] = useState(text);
  const ref = useRef(null);

  useEffect(() => {
    if (!trigger) {
      setDisplay(text);
      return;
    }

    let frame = 0;
    const total = text.length * 4;
    ref.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((c, i) =>
            frame / 4 > i
              ? c
              : c === " "
                ? " "
                : CHARS[Math.floor(Math.random() * CHARS.length)],
          )
          .join(""),
      );
      frame++;
      if (frame >= total) {
        clearInterval(ref.current);
        setDisplay(text);
      }
    }, 22);

    return () => clearInterval(ref.current);
  }, [trigger, text]);

  return display;
}
