import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../stylesheet/Sidebar.css'
import profile from '../images/Sidebar/pic.jpg'

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sideCard">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={profile} />
          <Card.Body>
            <Card.Title>
              Guilherme Rodrigues
            </Card.Title>
            <Card.Text>
                guilherme_rodrigues10@outlook.com <br/>
                +55 (16) 981516645
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>About Me</ListGroupItem>
              <ListGroupItem>Histórico</ListGroupItem>
              <ListGroupItem>Habilidades</ListGroupItem>
              <ListGroupItem>Redes Sociais</ListGroupItem>
              <ListGroupItem>Interesses</ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Sidebar;
