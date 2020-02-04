import React from "react";
import { Media, ProgressBar } from "react-bootstrap";

class SkillMedia extends React.Component {
  render() {
    return (
      <div>
        <Media>
          <img
            width={104}
            height={124}
            className="mr-3"
            src={this.props.pic}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>{this.props.title}</h5>
            <p>{this.props.text}</p>
            <ProgressBar
              variant={this.props.color}
              now={this.props.now}
              label={`${this.props.now}%`}
              animated
            />
          </Media.Body>
        </Media>
      </div>
    );
  }
}

export default SkillMedia;
