"use client";

/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from "react";
import { DarkIcon, LightIcon } from "@/components/Icons";
import "./mode-button.css";

function ModeButton() {
  const [mode, setMode] = useState(
    typeof window !== "undefined" ? localStorage.getItem("mode") : "dark",
  );

  const changeMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (!mode) {
      const m = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setMode(m);
    } else {
      if (typeof window !== "undefined") localStorage.setItem("mode", mode);
      document.documentElement.setAttribute("data-theme", mode);
      document.body.classList.add(mode === "dark" ? "dark-mode" : "light-mode");
      document.body.classList.remove(
        mode !== "dark" ? "dark-mode" : "light-mode",
      );
    }
  }, [mode]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={() => changeMode()}
      className="mode-button"
      title={`Turn On ${mode === "dark" ? "Light" : "Dark"} Mode`}
      aria-label="toggle dark mode"
    >
      <label htmlFor="mode">
        <div className="icons">
          {mode === "dark" ? (
            <span id="light-icon">
              <LightIcon />
            </span>
          ) : (
            <span id="dark-icon">
              <DarkIcon />
            </span>
          )}
        </div>
      </label>
    </div>
  );
}

export default ModeButton;
