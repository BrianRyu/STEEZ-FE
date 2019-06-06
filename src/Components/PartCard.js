import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addPiece } from "../Redux/actions/MySteezActions";

class PartCard extends React.Component {
  handleClick = e => {
    console.log(this.props);
    let pieceId = this.props.part.id;
    let postId = this.props.currentPost.id;
    this.props.addPiece(pieceId, postId, localStorage);
    this.props.history.push("/mysteez");
  };

  render() {
    return (
      <div className="part-grid-item">
        <span
          onClick={this.handleClick}
          className="part-add"
          role="img"
          aria-label="x"
        >
          ➕
        </span>
        <p className="product-font">{this.props.part.name}</p>
        <br />
        <img
          className="product-part-image"
          src={this.props.part.img_url}
          alt={this.props.part.name}
        />
        <p id="part-description" className="product-font">
          {this.props.part.description}
        </p>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    currentPost: state.posts.currentPost
  };
};

export default connect(
  stateToProps,
  { addPiece }
)(withRouter(PartCard));
