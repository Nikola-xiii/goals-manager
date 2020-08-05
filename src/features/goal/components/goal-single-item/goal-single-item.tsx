import {Button, Card} from "react-bootstrap";
import * as React from "react";
import './goal-single-item.scss';
import {Goal} from "../../../../store/models/goal.model";
import TaskList from "../task-list/task-list";

interface Props {
  goal: Goal
}

const GoalSingleItem = (props: Props) => {
  return (
    <Card>
      <Card.Header>
        <span className="label">Objective</span>
        <h2>{props.goal.objective}</h2>
      </Card.Header>
      <Card.Body>
        <p><strong>Key</strong>: {props.goal.key}</p>
        <p><strong>Results</strong>: {props.goal.results}</p>
        <TaskList tasks={props.goal.tasks}></TaskList>
      </Card.Body>
      <Card.Footer>
        <Button>Add Task</Button>
      </Card.Footer>
    </Card>
  )
}

export default GoalSingleItem;
