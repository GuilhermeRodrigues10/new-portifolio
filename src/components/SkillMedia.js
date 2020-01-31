import React from "react";
import { Media } from "react-bootstrap";

class SkillMedia extends React.Component {
  render() {
    return (
      <div>
        <Media>
          <img
            width={84}
            height={110}
            className="mr-3"
            src={this.props.pic}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>Media Heading</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
              Donec lacinia congue felis in faucibus.
            </p>
          </Media.Body>
        </Media>
      </div>
    );
  }
}

export default SkillMedia;
