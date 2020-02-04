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
                <NetworkCard
                  pic={face}
                  name="Facebook"
                  url="https://www.facebook.com/guilherme.rodrigues.942"
                />
              </FadeIn>
              <FadeIn delay={100}>
                <NetworkCard
                  pic={insta}
                  name="Instagram"
                  url="https://www.instagram.com/guillhermerodrigues/"
                />
              </FadeIn>
              <FadeIn delay={150}>
                <NetworkCard
                  pic={twitter}
                  name="Twitter"
                  url="https://twitter.com/guilhermerdrges"
                />
              </FadeIn>
              <FadeIn delay={200}>
                <NetworkCard
                  pic={linkedin}
                  name="Linkedin"
                  url="https://www.linkedin.com/in/guilherme-rodrigues10/"
                />
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Network;
