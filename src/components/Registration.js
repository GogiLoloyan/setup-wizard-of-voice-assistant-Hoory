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
