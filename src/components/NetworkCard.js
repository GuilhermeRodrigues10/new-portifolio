import React from "react";
import { Card, Image, Container } from "react-bootstrap";

class NetworkCard extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Card.Body>
            <a href="#">
              <Image src={this.props.pic} />
            </a>
            <Card.Text>{this.props.name}</Card.Text>
          </Card.Body>
        </Container>
      </div>
    );
  }
}

export default NetworkCard;
