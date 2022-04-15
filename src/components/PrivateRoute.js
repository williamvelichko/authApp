import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function PrivateRoute({ component, ...args }) {
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <div>Loading.......</div>,
    })}
    {...args}
  />;
}

export default PrivateRoute;
