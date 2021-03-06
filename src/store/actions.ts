import {Goal} from "./models/goal.model";

export const INIT_GOAL_FORM = 'INIT_GOAL_FORM';
export const CREATE_GOAL = 'CREATE_GOAL';
export const UPDATE_GOAL = 'UPDATE_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';
export const GOAL_LIST = 'GOAL_LIST';
export const GOAL_ITEM = 'GOAL_ITEM';

export const initGoalForm = (form: Goal) => ({
  type: INIT_GOAL_FORM,
  form
});

export const createGoalForm = (form: Goal) => ({
  type: CREATE_GOAL,
  form
});

export const updateGoalForm = (form: Goal) => ({
  type: UPDATE_GOAL,
  form
});

export const removeGoalForm = (form: Goal) => ({
  type: REMOVE_GOAL,
  form
});

export const getGoalList = (goals: Goal[]) => ({
  type: GOAL_LIST,
  goals
});

export const getGoalItem = (id: string) => ({
  type: GOAL_ITEM,
  id
});
