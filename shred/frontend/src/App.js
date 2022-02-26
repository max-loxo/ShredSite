import React, { Component } from "react";
import { NavItem } from "reactstrap";
import Modal from "./components/Modal";
import axios from "axios";
import Homepage from "./pages/Homepage"
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;