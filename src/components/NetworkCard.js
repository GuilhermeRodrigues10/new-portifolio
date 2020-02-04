import React from "react";
import { Card, Image, Container } from "react-bootstrap";

class NetworkCard extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Card.Title>
            <Card.Body>
              <a href="#">
                <Image src={this.props.pic} />
                <Card.Text>{this.props.name}</Card.Text>
              </a>
            </Card.Body>
          </Card.Title>
        </Container>
      </div>
    );
  }
}

export default NetworkCard;
