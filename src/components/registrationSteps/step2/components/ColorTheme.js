import React from "react";

function ColorTheme({ theme, themes, setTheme }) {
  return (
    <div className="styles-configuration__themes">
      {themes.map((style, i) => (
        <label key={i} className="styles-configuration__theme" style={style}>
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
