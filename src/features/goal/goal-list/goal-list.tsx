import React from 'react';
import GoalListItem from "../goal-list-item/goal-list-item";
import {Goal} from "../../../store/models/goal.model";

const Goals: Goal[] = [
  {
    objective: 'Get job in Wix',
    key: 'Prepare for Interview',
    results: 'Pluralsight IQ - Expert'
  },
  {
    objective: 'Body Health',
    key: 'Workout',
    results: 'Do workout 2 time per week'
  }
]

class GoalList extends React.Component<any, any>{
  render() {
    return Goals.map(goal => (<GoalListItem goal={goal}></GoalListItem>));
  }
}

export default GoalList;
