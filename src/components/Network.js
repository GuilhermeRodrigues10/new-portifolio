import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FadeIn from "react-fade-in";

import NetworkCard from "./NetworkCard.js";
import Sidebar from "./Sidebar.js";

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
            <Col xs={4}>
              <Sidebar />
            </Col>
            <Col xs={8}>
              <FadeIn delay={50}>
                <NetworkCard pic={face} name="Facebook" />
              </FadeIn>
              <FadeIn delay={100}>
                <NetworkCard pic={insta} name="Instagram" />
              </FadeIn>
              <FadeIn delay={150}>
                <NetworkCard pic={twitter} name="Twitter" />
              </FadeIn>
              <FadeIn delay={200}>
                <NetworkCard pic={linkedin} name="Linkedin" />
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Network;
