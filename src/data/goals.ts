import {Goal} from "../store/models/goal.model";

export const Goals: Goal[] = [
  {
    id: '1',
    objective: 'Get job in Wix',
    key: 'Prepare for Interview',
    results: 'Pluralsight IQ - Expert',
    tasks: [
      { value: "Prepared and Passed JavaScript IQ", done: true },
      { value: "Prepared and Passed React IQ", done: false },
      { value: "Prepared and Passed Angular IQ", done: false }
    ]
  },
  {
    id: '2',
    objective: 'Body Health',
    key: 'Workout',
    results: 'Do workout 2 time per week',
    tasks: [
      { value: "Body weight workout", done: true },
      { value: "Dumbbells", done: false },
    ]
  }
];
