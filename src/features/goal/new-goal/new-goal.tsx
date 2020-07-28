import GoalForm from "../components/goal-form/goal-form";
import {
  createGoalForm,
  initGoalForm
} from "../../../store/actions";
import {Goal} from "../../../store/models/goal.model";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
  form: state.goalForm
});

const mapDispatchToProps = (dispatch: any) => ({
  initGoal: (form: Goal) => dispatch(initGoalForm(form)),
  createGoal: (form: Goal) => dispatch(createGoalForm(form))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm);
