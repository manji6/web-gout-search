import React,{ useEffect } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";



export class Layout extends React.Component {  

  constructor() {
    super();
    this.name = "hoge";
  }

  

  render() {

    const { data, getData } = useData();
    useEffect(() => {
      async function onPageLoad (){
        await getData();
      }
      onPageLoad();
      
    }, []);

    return (
      <>
        <Header />
        <h1>It's {this.name}!</h1>
        <Footer />
      </>
    );
  }
}
