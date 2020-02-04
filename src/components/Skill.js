import React from "react";
import { Media, Row, Col, Container } from "react-bootstrap";
import FadeIn from "react-fade-in";
import Sidebar from './Sidebar.js'

import html from "../images/Skill/html.png";
import css from "../images/Skill/css.png";
import js from "../images/Skill/js.png";
import react from "../images/Skill/react.png";
import redux from "../images/Skill/redux.png";
import bootstrap from "../images/Skill/bootstrap.png";
import gimp from "../images/Skill/gimp.png";
import ror from "../images/Skill/ror.png";
import sql from "../images/Skill/sql.png";
import SkillMedia from "./SkillMedia.js";

class Skill extends React.Component {
  render() {
    return (
      <div className="topRightSide">
      <Container>
        <Row>
        <Col xs={4}><Sidebar /></Col>
        <Col  xs={8} >
        <FadeIn delay={100}>
          <SkillMedia
            pic={html}
            title="HTML 5"
            now={100}
            color="success"
            text="Conhecimento sólido e dificilmente recorro a alguma fonte quando enfrento adversidades."
          />
        </FadeIn>

        <FadeIn delay={150}>
          <SkillMedia
            pic={css}
            title="CSS 3"
            now={90}
            color="success"
            text="Conhecimento sólido e em poucos casos busco ajuda para solicionar adversidades."
          />
        </FadeIn>

        <FadeIn delay={200}>
          <SkillMedia
            pic={js}
            title="Java Script"
            now={100}
            color="success"
            text="Conhecimento sólido e dificilmente recorro a alguma fonte quando enfrento adversidades."
          />
        </FadeIn>

        <FadeIn delay={250}>
          <SkillMedia
            pic={bootstrap}
            title="Bootstrap"
            now={90}
            color="success"
            text="Conhecimento sólido e em poucos casos busco ajuda para solicionar adversidades."
          />
        </FadeIn>

        <FadeIn delay={300}>
          <SkillMedia
            pic={react}
            title="React JS"
            now={80}
            color="success"
            text="Prática em mais de um projeto e em alguns casos preciso de ajuda para solucionar adversidades."
          />
        </FadeIn>

        <FadeIn delay={350}>
          <SkillMedia
            pic={redux}
            title="Redux"
            now={60}
            color="warning"
            text="Em processo de aprendizado, mas já trabalho em alguns projetos utilizando o recurso."
          />
        </FadeIn>

        <FadeIn delay={400}>
          <SkillMedia
            pic={ror}
            title="Ruby On Rails"
            now={90}
            color="success"
            text="Conhecimento sólido e em poucos casos busco ajuda para solicionar adversidades"
          />
        </FadeIn>

        <FadeIn delay={450}>
          <SkillMedia
            pic={sql}
            title="SQL"
            now={80}
            color="success"
            text="Prática em mais de um projeto e em alguns casos preciso de ajuda para solucionar adversidades."
          />
        </FadeIn>

        <FadeIn delay={500}>
          <SkillMedia
            pic={gimp}
            title="GIMP"
            now={60}
            color="warning"
            text="Sei o suficiente para sobreviver! (haha) "
          />
        </FadeIn>



        </Col>
        </Row>
        </Container>


      </div>
    );
  }
}

export default Skill;
