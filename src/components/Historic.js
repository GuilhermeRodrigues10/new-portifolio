import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FadeIn from "react-fade-in";

import HistoricCard from "./HistoricCard.js";
import Sidebar from "./Sidebar.js";

import mapfre from "../images/Historic/mapfre.jpg";
import ringa from "../images/Historic/ringa.png";
import catijr from "../images/Historic/catijr.png";
import ufscar from "../images/Historic/ufscar.png";
import etec from "../images/Historic/etec.png";

class Historic extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={4}>
              <Sidebar />
            </Col>
            <Col xs={8}>
              <FadeIn delay={50} >
                <HistoricCard
                  text="Comecei minha jornada como Atendente de Call
                  Center e desde Janeiro de 2020 trabalho como Supervisor de
                  Operações."
                  pic={mapfre}
                  year="Dez 2013 - Atual"
                />
              </FadeIn>

              <FadeIn delay={150} >
                <HistoricCard
                  text="Atualmente trabalho com Desenvolvimento Web utilizando as mais
                  modernas Linguagens (React e Ruby on Rails) e ferramentas de
                  Desenvolvimento Ágil (Scrum e Kanban)."
                  pic={ringa}
                  year="Set 2018 - Atual"
                />
              </FadeIn>

              <FadeIn delay={250} >
                <HistoricCard
                  text="A Cati Jr é uma Empresa Junior criada e administrada exclusivamente
                  por alunos da Universidade Federal de São Carlos. Trabalhei como Product Owner
                  e pude ter um primeiro contato com o universo empreendedor."
                  pic={catijr}
                  year="Mar 2018 - Set 2018"
                />
              </FadeIn>

              <FadeIn delay={350} >
                <HistoricCard
                  text="Atualmente estou cursando Bacharelado em Ciência da Computação."
                  pic={ufscar}
                  year="Mar 2013 - Ago 2020"
                />
              </FadeIn>

              <FadeIn delay={450} >
                <HistoricCard
                  text="Ensino Médio integrado com o Ensino Técnico em Informática.
                  Neste ponto que escolhi qual carreira seguiria após o colegial."
                  pic={etec}
                  year="Mar 2010 - Dez 2012"
                />
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Historic;
