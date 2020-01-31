import React from 'react';
import Sidebar from './components/Sidebar.js'
import AboutMe from './components/AboutMe.js'
import Historic from './components/Historic.js'
import Skill from './components/Skill.js'
import Network from './components/Network.js'
import { Container, Row, Col } from 'react-bootstrap';
import './stylesheet/App.css';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={4}><Sidebar /></Col>
          <Col  xs={8}><Skill /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
