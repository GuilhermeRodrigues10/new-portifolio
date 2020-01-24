import React from 'react';
import Sidebar from './components/Sidebar.js'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={3}><Sidebar /></Col>
          <Col xs={9}>2 of 3 (wider)</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
