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

class GoalForm extends React.Component<propsType> {
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  render() {
    return(
      <Card>
        <Card.Body>
          <Card.Title>Add New OKR Goal</Card.Title>
          {console.log(this.props)}
          <Form>
            <Form.Group controlId="formObjectives">
              <Form.Label>Objectives</Form.Label>
              <Form.Control type="text" placeholder="Enter objective" value={this.props.form.goalForm.objective} />
              <Form.Text className="text-muted">
                What are some things you want to accomplish this sprint?
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formKey">
              <Form.Label>Key</Form.Label>
              <Form.Control type="text" placeholder="Enter key" value={this.props.form.goalForm.key} />
              <Form.Text className="text-muted">
                What is the key to measure this goal?
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formResults">
              <Form.Label>Result</Form.Label>
              <Form.Control as="textarea" placeholder="Enter result" value={this.props.form.goalForm.results} />
              <Form.Text className="text-muted">
                What is the result to measure this goal?
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Goal
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default GoalForm;
