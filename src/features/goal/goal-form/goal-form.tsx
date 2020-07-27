import React from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {Goal} from "../../../store/models/goal.model";

interface propsType {
  form: { goalForm: Goal },
  initGoal: (form: Goal) => {},
  updateGoal: (form: Goal) => {},
  createGoal: (form: Goal) => {},
  deleteGoal: (form: Goal) => {},
}

class GoalForm extends React.Component<propsType, Goal> {
  constructor(props: propsType) {
    super(props);
    this.state = props.form.goalForm;
  }

  handleObjectiveChange = (event: any) => {
    this.setState({
      objective: event.target.value
    })
  }

  handleKeyChange = (event: any) => {
    this.setState({
      key: event.target.value
    })
  }

  handleResultsChange = (event: any) => {
    this.setState({
      results: event.target.value
    })
  }

  render() {
    return(
      <Card>
        <Card.Body>
          <Card.Title>Add New OKR Goal</Card.Title>
          <Form>
            <Form.Group controlId="formObjectives">
              <Form.Label>Objectives</Form.Label>
              <Form.Control
                type="text" placeholder="Enter objective"
                value={this.state.objective}
                onChange={this.handleObjectiveChange}
              />
              <Form.Text className="text-muted">
                What are some things you want to accomplish this sprint?
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formKey">
              <Form.Label>Key</Form.Label>
              <Form.Control type="text"
                            placeholder="Enter key"
                            value={this.state.key}
                            onChange={this.handleKeyChange}
              />
              <Form.Text className="text-muted">
                What is the key to measure this goal?
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formResults">
              <Form.Label>Result</Form.Label>
              <Form.Control as="textarea"
                            placeholder="Enter result"
                            value={this.state.results}
                            onChange={this.handleResultsChange}
              />
              <Form.Text className="text-muted">
                What is the result to measure this goal?
              </Form.Text>
            </Form.Group>
            <Button variant="primary"
                    type="button"
                    onClick={(event) => this.props.createGoal(this.state)}
            >
              Add Goal
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default GoalForm;
