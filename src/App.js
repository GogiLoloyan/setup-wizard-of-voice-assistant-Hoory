import React from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Registration from "./components/Registration";
import Login from "./components/registrationSteps/login/Login";
import Account from "./components/registrationSteps/account/Account";
// import PrivateRoute from "./routs/PrivateRoute";

function App() {
  const { isAuthValue, logedIn } = useSelector(store => store.auth);

  return (
    <BrowserRouter>
      {logedIn ? (
        <>
          <Redirect to="/account" /> <Account />
        </>
      ) : isAuthValue ? (
        <>
          <Redirect to="/login" /> <Login />
        </>
      ) : (
        <Registration />
      )}
    </BrowserRouter>
  );
}

export default App;
