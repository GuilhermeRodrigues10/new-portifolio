import React from "react";
import { Media } from "react-bootstrap";
import html from "../images/Skill/html.png";
import css from "../images/Skill/css.png";
import js from "../images/Skill/js.png";
import react from "../images/Skill/react.png";
import redux from "../images/Skill/redux.png";
import SkillMedia from "./SkillMedia.js";

class Skill extends React.Component {
  render() {
    return (
      <div>
        <SkillMedia
          pic={html}
          title=""
          text=""
        />
        <SkillMedia pic={css} />
        <SkillMedia pic={js} />
        <SkillMedia pic={react} />
        <SkillMedia pic={redux} />

      </div>
    );
  }
}

export default Skill;
