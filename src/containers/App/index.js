import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateExpense from "../../components/Expenses/CreateExpense/index";
import Header from "../../components/Header";

import "./index.css";
import ExpenseList from "../Expenses/ExpenseList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container fluid className="main-body">
          <Row>
            <Col xs={9} className="left-block d-flex">
              <pre>
                <CreateExpense />
              </pre>
            </Col>
            <Col xs={3} className="right-block d-flex flex-fill">
              <ExpenseList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
