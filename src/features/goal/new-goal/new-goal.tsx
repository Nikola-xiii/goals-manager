import GoalForm from "../goal-form/goal-form";
import React from "react";
import {createGoalForm, initGoalForm, removeGoalForm, updateGoalForm} from "../../../store/actions";
import {Goal} from "../../../store/models/goal.model";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
  form: state.goalForm
});

const mapDispatchToProps = (dispatch: any) => ({
  initGoal: (form: Goal) => dispatch(initGoalForm(form)),
  updateGoal: (form: Goal) => dispatch(updateGoalForm(form)),
  createGoal: (form: Goal) => dispatch(createGoalForm(form)),
  deleteGoal: (form: Goal) => dispatch(removeGoalForm(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm);
