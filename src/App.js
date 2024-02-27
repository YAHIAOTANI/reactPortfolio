import React, { Component } from "react";
import Navbar from "./Component/navbar";
import Index from "./Component/Index";
import Contact from "./Component/Contact";
import { BrowserRouter , Route, Routes } from "react-router-dom";
class App extends Component{
 render(){
  return (
    
    <BrowserRouter>
    <Navbar />
   <Routes>
   <Route exact path="/" Component={Index} />
    <Route exact path="/Contact" Component={Contact} />
   </Routes>
    </BrowserRouter>
    
  )
 }
}

export default App;
