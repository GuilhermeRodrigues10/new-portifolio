import React from "react";
import FadeIn from 'react-fade-in';
import { Container, Row, Col } from "react-bootstrap";
import NetworkCard from "./NetworkCard.js";

import face from "../images/Network/face.png";
import insta from "../images/Network/insta.png";
import linkedin from "../images/Network/linkedin.png";
import twitter from "../images/Network/twitter.png";

class Network extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <FadeIn delay={50}>
              <Col lg={6}>
                <NetworkCard pic={face} />
              </Col>
            </FadeIn>
            <FadeIn delay={100}>
              <Col lg={6}>
                <NetworkCard pic={insta} />
              </Col>
            </FadeIn>
          </Row>
          <Row >
          <FadeIn delay={150} >
            <Col lg={6}>
              <NetworkCard pic={twitter}/>
            </Col>
          </FadeIn>
          <FadeIn delay={200}>
            <Col lg={6}>
              <NetworkCard pic={linkedin} />
            </Col>
          </FadeIn>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Network;
