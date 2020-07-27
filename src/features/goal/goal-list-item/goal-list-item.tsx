import {Card} from "react-bootstrap";
import * as React from "react";
import './goal-list-item.scss';
import {Goal} from "../../../store/models/goal.model";

const GoalListItem = (props: { goal: Goal }) => {
  return (
    <Card>
      <Card.Header>
        <span className="label">Objective</span>
        <h2>{props.goal.objective}</h2>
      </Card.Header>
      <Card.Body>
        <p><strong>Key</strong>: {props.goal.key}</p>
        <p><strong>Results</strong>: {props.goal.results}</p>
      </Card.Body>
    </Card>
  )
}

export default GoalListItem;
