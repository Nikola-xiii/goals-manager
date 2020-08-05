import { Task } from "../../../../data/task";
import { ListGroup } from "react-bootstrap";
import * as React from "react";
import './task-list.scss';

interface Props {
  tasks: Task[]
}

const TaskList = (props: Props) => {
  return (
    <ListGroup>
      {props.tasks.map(task => (
        <ListGroup.Item>
          <input className="task-checkbox" type="checkbox" />
          <span className="task-value">{task.value}</span>
        </ListGroup.Item>)
      )}
    </ListGroup>
  )
}

export default TaskList;
