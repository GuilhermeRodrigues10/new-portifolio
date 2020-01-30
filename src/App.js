import React from 'react';
import Sidebar from './components/Sidebar.js'
import AboutMe from './components/AboutMe.js'
import Historic from './components/Historic.js'
import { Container, Row, Col } from 'react-bootstrap';
import './stylesheet/App.css';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={4}><Sidebar /></Col>
          <Col className="bottomCard" xs={8}><Historic /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
