import React from "react";

function VoiceAssistantEdit({ name }) {
  const id = Math.random() ** 2 * 1000;
  return (
    <section className="workspace">
      <div className="voic-assistant">
        <div className="icon"></div>
        <h4>{name || "Alice"}</h4>
      </div>
      <label className="options" htmlFor={id}>
        <div />
        <div />
        <div />
      </label>
      <input className="checkbox" type="checkbox" id={id} name="checkbox" />
      <ul className="tools">
        <li>1</li>
        <li>2</li>
        <li></li>
      </ul>
    </section>
  );
}

export default VoiceAssistantEdit;
