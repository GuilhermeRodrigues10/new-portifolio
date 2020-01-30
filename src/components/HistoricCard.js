import React from "react";
import { Card, Row, Container, Col } from "react-bootstrap";

class HistoricCard extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="yearCard" md={4}>
               {this.props.year} ↦
            </Col>
              <Col  md={8}>
              <Card>
                <Card.Img fluid variant="top" src={this.props.pic} />
                <Card.Body>
                  <Card.Text className="cardText">{this.props.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HistoricCard;
