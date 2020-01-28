import React from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import picture1 from '../images/p1.jpg'
import picture2 from '../images/p2.jpg'
import picture3 from '../images/p3.jpg'
import picture4 from '../images/p4.jpg'
import picture5 from '../images/p5.jpg'
import picture6 from '../images/p6.jpg'
import picture7 from '../images/p7.jpg'
import react from '../images/react.png'

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <CardColumns>

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

          <Card className="text-center">
            <Card.Img variant="top" src={picture1} />
            <Card.Body>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Parque do Kartódromo, São Carlos, São Paulo</small>
            </Card.Footer>
          </Card>

          <Card className="text-center">
            <Card.Img variant="top" src={picture6} />
            <Card.Body>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Morro do Cuscuzeiro, Analândia, São Paulo</small>
            </Card.Footer>
          </Card>

          <Card className="text-center">
            <Card.Img variant="top" src={picture2} />
            <Card.Body>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Morro do Cuscuzeiro, Analândia, São Paulo</small>
            </Card.Footer>
          </Card>

          <Card bg="success" text="white" className="text-center p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Estou finalizando Ciência da Computação na UFSCar e atualmente
                trabalho com Desenvolvimento Web!
              </p>
            </blockquote>
          </Card>

          <Card className="text-center">
            <Card.Img variant="top" src={picture3} />
            <Card.Body>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Cachoeira de Emas, Pirassununga, São Paulo</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Body>
              <Card.Text>
                Resido em São Carlos/SP e algumas dessas fotos foram tiradas em
                visitas à cidades vizinhas. Tirar fotos da natureza é uma das
                minhas atividades favoritas!
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center">
            <Card.Img variant="top" src={picture4} />
            <Card.Body>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Parque das Bandeiras, Campinas, São Paulo</small>
            </Card.Footer>
          </Card>

          <Card className="text-center">
            <Card.Img variant="top" src={picture7} />
            <Card.Body>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">José Menino, Santos, São Paulo</small>
            </Card.Footer>
          </Card>

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

        </CardColumns>
      </div>
    )
  }
}

export default AboutMe;
