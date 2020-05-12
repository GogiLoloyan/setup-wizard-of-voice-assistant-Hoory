import React from "react";

function ColorTheme({ theme, setTheme, themes }) {
  return (
    <div className="styles-configuration__themes">
      {themes.map((style, i) => (
        <label
          key={i}
          className="styles-configuration__theme"
          style={{
            "--theme-bg-1": style[0],
            "--theme-bg-2": style[1],
            "--theme-border": style[0]
          }}
        >
          <input
            type="radio"
            name="theme"
            value={i}
            defaultChecked={i === theme}
            onClick={() => setTheme(i)}
          />
          <div className="theme"></div>
        </label>
      ))}
    </div>
  );
}

export default ColorTheme;
