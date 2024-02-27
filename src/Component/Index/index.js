import React, { Component } from "react";
import Home from "./../home";
import About from "./../about";
import Footer from "./../footer";
import Media from "./../media";
import Portfolio from "./../portfoli";
import Profile from "./../profile";
import Work from "./../work";


class Index extends Component{
 render(){
  return (
    <div className="Index">
     <Home />
     <Work />
     <Portfolio />
     <Profile />
     <About />
     <Media />
     <Footer />
    </div>
  )
 }
}

export default Index;