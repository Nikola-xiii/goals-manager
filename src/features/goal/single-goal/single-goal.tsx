import {getGoalItem} from "../../../store/actions";
import GoalSingleItem from "../components/goal-single-item/goal-single-item";
import {connect} from "react-redux";
import React from "react";

const mapStateToProps = (state: any) => ({
  goal: state.goals.data
});

const mapDispatchToProps = (dispatch: any) => ({
  getGoalItem: (id: string) => dispatch(getGoalItem(id)),
});

class SingleGoal extends React.Component<any, any> {
  componentDidMount() {
    this.props.getGoalItem('1');
  }

  render() {
    console.log(this.props);
    return (this.props.goal ? <GoalSingleItem goal={this.props.goal}/> : <div>Goal not found</div>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleGoal);
