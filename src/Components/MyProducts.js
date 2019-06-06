import React from "react";
import { connect } from "react-redux";

class MyProducts extends React.Component {
  render() {
    return <div>HELLO</div>;
  }
}

const stateToProps = state => {
  console.log(state);
};

export default connect(stateToProps)(MyProducts);
