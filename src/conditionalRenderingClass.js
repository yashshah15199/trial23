import React, { Component } from "react";

class conditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: true,
    };
  }
  render() {
    let message = "";
   this.state.isLogged ? 
      message = (
        <div>
          <h2>Hello Raj</h2>
        </div>
      ):
      message = (
        <div>
          <h2>Hello Guest</h2>
        </div>
      );
    
    return message;
  }
}

export default conditionalRendering;
