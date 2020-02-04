import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

import profile from "../images/Sidebar/pic.jpg";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sideCard">
        <Card style={{ width: "20.5rem" }}>
          <Card.Img variant="top" src={profile} />
          <Card.Body>
            <Card.Title>Guilherme Rodrigues</Card.Title>
            <Card.Text>
              guilherme_rodrigues10@outlook.com <br />
              +55 (16) 981516645
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <ListGroup className="list-group-flush">
              <Link to="/">
                <ListGroupItem>About Me</ListGroupItem>
              </Link>
              <Link to="/historic">
                <ListGroupItem>Histórico</ListGroupItem>
              </Link>
              <Link to="/skills">
                <ListGroupItem>Habilidades</ListGroupItem>
              </Link>
              <Link to="/network">
                <ListGroupItem>Redes Sociais</ListGroupItem>
              </Link>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Sidebar;
