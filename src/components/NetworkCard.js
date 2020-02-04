import React from "react";
import { Card, Image } from "react-bootstrap";

class NetworkCard extends React.Component {
  render() {
    return (
      <div>
        <Card className="card-body" style={{ width: "18rem" }}>
          <a href="#">
            <Image src={this.props.pic} />
          </a>
        </Card>
      </div>
    );
  }
}

export default NetworkCard;
