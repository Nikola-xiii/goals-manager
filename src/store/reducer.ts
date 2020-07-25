import {INIT_GOAL_FORM} from "./actions";
import {combineReducers} from "redux";
import {Goal} from "./models/goal.model";

const initialGoalState = {
  goalForm: {
    objective: '',
    key: '',
    results: ''
  }
}

function goalReducer(state = initialGoalState, action: { type: string; form: Goal; }) {
  switch (action.type) {
    case INIT_GOAL_FORM:
      return {
        ...state,
        status: INIT_GOAL_FORM,
        data: action.form,
      };
    default:
      return state;
  }
}

export default combineReducers({
  goalForm: goalReducer
})
