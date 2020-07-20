import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

import "./index.css";
import CreateExpenseMutation from "../../../containers/Expenses/CreateExpenseMutation";
const CreateExpense = () => {
  const initialFormData = Object.freeze({
    category: "",
    amount: 0,
    date: ""
  });
  const [validated, setValidated] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);
  const handleChange = e => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      //error
    }

    setValidated(true);
    console.log(formData);
    // call mutation event
    CreateExpenseMutation(formData.category, formData.amount, formData.date, () => {
      //callback
      console.log(`Mutation completed`);
    });
  };
  return (
    <Container fluid className="create-expense">
      <h3 className="mb-3"> Add new expense </h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="txtcategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="Enter Category"
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="txtAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            placeholder="Enter Amount"
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="txtDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            placeholder="Select Date"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default CreateExpense;
