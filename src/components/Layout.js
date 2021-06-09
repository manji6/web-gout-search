import React from "react";

export class Layout extends React.Component {
  constructor() {
    super();
    this.name = "hoge";
  }

  render() {
    return <h1>It's {this.name}!</h1>;
  }
}
