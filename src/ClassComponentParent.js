import React, { Component } from "react";
import ClassComponentApi from "./ClassComponentApi";

export class ClassComponentParent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hideShow: true,
      name: "",
    };
  }

  OnButton = () => {
    this.setState((prevState) => ({
      hideShow: !prevState.hideShow,
    }));
  };

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(e) => {
            this.setState({ ...this.state, name: e.target.value });
          }}
        />
        <button onClick={this.OnButton}>
          {" "}
          {!this.state.hideShow ? "Show" : "Hide"}
        </button>
        {this.state.hideShow ? (
          <ClassComponentApi  />
        ) : null}
      </div>
    );
  }
}

export default ClassComponentParent;
