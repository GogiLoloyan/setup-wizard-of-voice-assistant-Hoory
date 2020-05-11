import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, step, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth === true ? <Redirect to="/login" /> : <Component {...props} />
    }
  />
);

export default PrivateRoute;
