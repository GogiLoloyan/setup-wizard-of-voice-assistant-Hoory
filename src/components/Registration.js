import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import LeftBar from "./navbar/LeftBar";
import Logo from "./navbar/components/Logo";
import RegistrationSteps from "./navbar/components/RegistrationSteps";

import VoiceAssistantName from "./registrationSteps/step1/VoiceAssistantName";
import IconAndColorSchem from "./registrationSteps/step2/IconAndColorSchem";
import CreationAccount from "./registrationSteps/step3/CreationAccount";
import Success from "./registrationSteps/step4/Success";

function Registration() {
  const step = useSelector(store => store.registrationStep.step);

  return (
    <div className="registration">
      <LeftBar>
        <Logo />
        <RegistrationSteps />
      </LeftBar>

      {/* redirect to current registration step */}
      <Redirect to={`/${step}`} />

      {/* switch current registration step */}
      <Switch>
        <Route exact path="/1" component={() => <VoiceAssistantName />} />
        <Route exact path="/2" component={() => <IconAndColorSchem />} />
        <Route exact path="/3" component={() => <CreationAccount />} />
        <Route exact path="/4" component={() => <Success />} />
      </Switch>
    </div>
  );
}

export default Registration;

// function displayTime() {
//   console.clear();

//   const dateNow = new Date();
//   const time = getTime(dateNow);

//   console.log(time);
// }

// function getTime(date) {
//   let hours = date.getHours().toString();
//   let minutes = date.getMinutes().toString();
//   let seconds = date.getSeconds().toString();

//   let ampm = "am";

//   if (hours >= 12) {
//     ampm = "pm";
//     hours = hours - 12;
//   }

//   if (hours < 10) {
//     hours = "0" + hours;
//   }

//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }

//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }

//   const time = hours + ":" + minutes + ":" + seconds + " " + ampm;
//   return time;
// }

// setInterval(displayTime, 1000);

// // pure functions
// // HOF (high order function)
// // compose

// function compose(...func) {
//   return function(arg) {
//     func.reduce((acc, cur) => cur(acc), arg);
//   };
// }

// compose(f, g, h);
