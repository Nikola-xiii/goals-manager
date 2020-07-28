import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import NewGoal from "../features/goal/new-goal/new-goal";
import GoalList from "../features/goal/goal-list/goal-list";
import SingleGoal from "../features/goal/single-goal/single-goal";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/goal/add" component={NewGoal}/>
        <Route exact path="/goal/list" component={GoalList}/>
        <Route exact path="/goal/:id" component={SingleGoal}/>
        <Route exact path="/">
          <Redirect to="/goal/list"/>
        </Route>
      </Switch>
    </div>
  );
}
