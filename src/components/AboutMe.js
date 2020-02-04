import React from 'react';
import { CardColumns, Card, Col, Container, Row } from 'react-bootstrap';

import FadeIn from 'react-fade-in';
import Sidebar from './Sidebar.js'

import picture1 from '../images/AboutMe/p1.jpg'
import picture2 from '../images/AboutMe/p2.jpg'
import picture3 from '../images/AboutMe/p3.jpg'
import picture4 from '../images/AboutMe/p4.jpg'
import picture5 from '../images/AboutMe/p5.jpg'
import picture6 from '../images/AboutMe/p6.jpg'
import picture7 from '../images/AboutMe/p7.jpg'
import react from '../images/AboutMe/react.png'

class AboutMe extends React.Component {
  render() {
    return (
      <div>
      <Container>
        <Row>
          <Col xs={4}><Sidebar /></Col>
          <Col  xs={8} >
          <CardColumns>

            <FadeIn delay={50} >
              <Card className="p-3 text-center">
                <Card.Title>Bem vindo ao meu site pessoal!</Card.Title>
                <blockquote className="blockquote mb-0 card-body">
                <Card.Img variant="top" src={picture5} />
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Tenho 25 anos, sou pai do Leonardo e marido da Danielly
                    </small>
                  </footer>
                </blockquote>
              </Card>
            </FadeIn >


            <FadeIn delay={100}>
              <Card className="text-center">
                <Card.Img variant="top" src={picture1} />
                <Card.Body>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Parque do Kartódromo, São Carlos, São Paulo</small>
                </Card.Footer>
              </Card>
            </FadeIn >


            <FadeIn delay={150} >
              <Card className="text-center">
                <Card.Img variant="top" src={picture6} />
                <Card.Body>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Morro do Cuscuzeiro, Analândia, São Paulo</small>
                </Card.Footer>
              </Card>
            </FadeIn >


            <FadeIn delay={200}>
              <Card className="text-center">
                <Card.Img variant="top" src={picture2} />
                <Card.Body>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Morro do Cuscuzeiro, Analândia, São Paulo</small>
                </Card.Footer>
              </Card>
            </FadeIn >


            <FadeIn delay={250}>
              <Card bg="success" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Estou finalizando Ciência da Computação na UFSCar e atualmente
                    trabalho com Desenvolvimento Web!
                  </p>
                </blockquote>
              </Card>
            </FadeIn >


            <FadeIn delay={300}>
              <Card className="text-center">
                <Card.Img variant="top" src={picture3} />
                <Card.Body>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Cachoeira de Emas, Pirassununga, São Paulo</small>
                </Card.Footer>
              </Card>
            </FadeIn >


            <FadeIn delay={350}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    Resido em São Carlos/SP e algumas dessas fotos foram tiradas em
                    visitas à cidades vizinhas. Tirar fotos da natureza é uma das
                    minhas atividades favoritas!
                  </Card.Text>
                </Card.Body>
              </Card>
            </FadeIn >


            <FadeIn delay={400}>
              <Card className="text-center">
                <Card.Img variant="top" src={picture4} />
                <Card.Body>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Parque das Bandeiras, Campinas, São Paulo</small>
                </Card.Footer>
              </Card>
            </FadeIn >


            <FadeIn delay={450} >
              <Card className="text-center">
                <Card.Img variant="top" src={picture7} />
                <Card.Body>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">José Menino, Santos, São Paulo</small>
                </Card.Footer>
              </Card>
            </FadeIn >


            <FadeIn delay={500} >
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>
                    Este site foi desenvolvido utilizando react-bootstrap
                  </Card.Text>
                  <Card.Img src={react} />
                  <Card.Text>
                    <small className="text-muted"><a href="https://react-bootstrap.github.io/" target="_blank" >https://react-bootstrap.github.io/</a></small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </FadeIn >


          </CardColumns>

          </Col>
        </Row>
      </Container>




      </div>
    )
  }
}

export default AboutMe;
