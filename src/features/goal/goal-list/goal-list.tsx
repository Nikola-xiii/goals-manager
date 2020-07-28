import React from 'react';
import GoalListItem from "../components/goal-list-item/goal-list-item";
import {Goal} from "../../../store/models/goal.model";
import {connect} from "react-redux";
import {getGoalList} from "../../../store/actions";
import {Goals} from "../../../data/goals";

const mapStateToProps = (state: any) => ({
  goals: state.goals.data
});

const mapDispatchToProps = (dispatch: any) => ({
  initGoalList: (goals: Goal[]) => dispatch(getGoalList(goals)),
});

class GoalList extends React.Component<any, any>{
  componentDidMount() {
    this.props.initGoalList(Goals);
  }

  render() {
    return this.props.goals ? this.props.goals.map((goal: Goal) => (<GoalListItem goal={goal}></GoalListItem>)) : <div>Goals not found</div> ;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalList);
