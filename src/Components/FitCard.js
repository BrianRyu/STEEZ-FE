import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { deletePiece } from "../Redux/actions/MySteezActions";

class FitCard extends React.Component {
  handleClick = e => {
    // console.log(e)
    // let id = this.props.product.id
    // console.log(this.props)
    // this.props.deletePiece(id)
  };

  render() {
    return (
      <nav className="grid-item">
        <span
          onClick={this.handleClick}
          className="product-delete"
          role="img"
          aria-label="x"
        >
          ❌
        </span>
        <p className="product-font">{this.props.product.name}</p>
        <br />
        <Link to={`/product/${this.props.product.id}`}>
          <img
            className="product-image"
            src={this.props.product.img_url}
            alt={this.props.product.name}
          />
        </Link>
        <br />
      </nav>
    );
  }
}

const stateToProps = state => {
  return {
    currentPost: state.posts.currentPost,
    currentUser: state.users.currentUser
  };
};

export default connect(
  stateToProps,
  { deletePiece }
)(FitCard);
