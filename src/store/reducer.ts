import {CREATE_GOAL, GOAL_ITEM, GOAL_LIST, INIT_GOAL_FORM} from "./actions";
import {combineReducers} from "redux";
import {Goal} from "./models/goal.model";
import {Goals} from "../data/goals";

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

function goalListReducer(state: Goal[] = [], action: { type: string; goals?: Goal[]; id?: string}) {
  switch (action.type) {
    case GOAL_LIST:
      return {
        ...state,
        status: GOAL_LIST,
        data: action.goals,
      };
    case GOAL_ITEM:
      return {
        ...state,
        status: GOAL_ITEM,
        data: Goals.find(item => item.id === action.id),
      };
    default:
      return state;
  }
};

export default combineReducers({
  goalForm: goalReducer,
  goals: goalListReducer
})
