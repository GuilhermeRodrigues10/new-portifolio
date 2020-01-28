import React from 'react';
import Sidebar from './components/Sidebar.js'
import AboutMe from './components/AboutMe.js'
import { Container, Row, Col } from 'react-bootstrap';
import './stylesheet/App.css';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="fixedSide" xs={4}><Sidebar /></Col>
          <Col xs={8}><AboutMe /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
