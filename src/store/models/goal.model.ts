import { Task } from "../../data/task";

export interface Goal {
  id: string;
  objective: string;
  key: string;
  results: string;
  tasks: Task[] | []
}
