import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const links = [
  {
    text: "Name your assistent",
    id: 1
  },
  {
    text: "Select styles",
    id: 2
  },
  {
    text: "Create your account",
    id: 3
  }
];

function RegistrationSteps() {
  const currentStep = useSelector(store => store.registrationStep.step);

  const stepState = step => ({
    active: step <= currentStep ? "active" : "disabled",
    checked: step < currentStep ? "checked" : ""
  });

  return (
    <div className="registration-steps">
      <ul className="registration-steps__list">
        {links.map(({ text, id }) => (
          <li
            key={id}
            className={`registration-steps__item ${stepState(id).active} ${
              stepState(id).checked
            }`}
          >
            <Link to={`/${id}`}>
              <span className="checkbox"></span>
              <span>{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegistrationSteps;
