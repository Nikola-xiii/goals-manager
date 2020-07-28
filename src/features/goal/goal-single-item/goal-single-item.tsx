import {Button, Card} from "react-bootstrap";
import * as React from "react";
import './goal-single-item.scss';
import {Goal} from "../../../store/models/goal.model";

const GoalSingleItem = (props: { goal: Goal }) => {
  return (
    <Card>
      <Card.Header>
        <span className="label">Objective</span>
        <h2>{props.goal.objective}</h2>
      </Card.Header>
      <Card.Body>
        <p><strong>Key</strong>: {props.goal.key}</p>
        <p><strong>Results</strong>: {props.goal.results}</p>
        <Button>Add Task</Button>
      </Card.Body>
    </Card>
  )
}

export default GoalSingleItem;
