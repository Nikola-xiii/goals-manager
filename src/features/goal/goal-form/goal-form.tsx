import React from 'react';
import {Button, Card, Form} from "react-bootstrap";

const GoalForm = () => {
  return(
    <Card>
      <Card.Body>
        <Card.Title>Add New OKR Goal</Card.Title>
        <Form>
          <Form.Group controlId="formObjectives">
            <Form.Label>Objectives</Form.Label>
            <Form.Control type="text" placeholder="Enter objective" />
            <Form.Text className="text-muted">
              What are some things you want to accomplish this sprint?
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formKey">
            <Form.Label>Key</Form.Label>
            <Form.Control type="text" placeholder="Enter key" />
            <Form.Text className="text-muted">
              What is the key to measure this goal?
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formResults">
            <Form.Label>Result</Form.Label>
            <Form.Control type="text" placeholder="Enter result" />
            <Form.Text className="text-muted">
              What is the result to measure this goal?
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default GoalForm;
