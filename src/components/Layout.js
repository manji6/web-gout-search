import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

export class Layout extends React.Component {
  constructor() {
    super();
    this.name = "hoge";
  }

  render() {
    return (
      <>
        <Header />
        <h1>It's {this.name}!</h1>
        <Footer />
      </>
    );
  }
}
