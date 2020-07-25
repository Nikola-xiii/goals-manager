import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import App from "./App";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/List" component={App}/>
        <Route exact path="/">
          <Redirect to="/List"/>
        </Route>
      </Switch>
    </div>
  );
}
