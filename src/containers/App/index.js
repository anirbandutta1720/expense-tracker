import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import CreateExpense from '../../components/CreateExpense';
import Header from '../../components/Header';
import { addExpense } from '../../actions/expense';
import './index.css';
const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Container fluid className="main-body">
        <Row>
          <Col xs={9} className="left-block d-flex"><pre>
          {
            JSON.stringify(props)
          }
        </pre></Col>
          <Col xs={3} className="right-block d-flex flex-fill">
            <CreateExpense {...props} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  addExpense: (data) => dispatch(addExpense(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
