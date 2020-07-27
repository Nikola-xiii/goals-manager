import {CREATE_GOAL, GOAL_LIST, INIT_GOAL_FORM} from "./actions";
import {combineReducers} from "redux";
import {Goal} from "./models/goal.model";

const initialGoalState = {
  goalForm: {
    objective: '',
    key: '',
    results: ''
  }
}

function goalReducer(state = initialGoalState, action: { type: string; form: Goal; goals: Goal[]}) {
  switch (action.type) {
    case INIT_GOAL_FORM:
      return {
        ...state,
        status: INIT_GOAL_FORM,
        data: action.form,
      };
    case CREATE_GOAL:
      return {
        ...state,
        status: CREATE_GOAL,
        data: action.form,
      };
    default:
      return state;
  }
}

function goalListReducer(state: Goal[] = [], action: { type: string; goals: Goal[]}) {
  switch (action.type) {
    case GOAL_LIST:
      return {
        ...state,
        status: GOAL_LIST,
        data: action.goals,
      };
    default:
      return state;
  }
};

export default combineReducers({
  goalForm: goalReducer,
  goals: goalListReducer
})
