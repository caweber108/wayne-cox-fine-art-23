import React from "react";
import "./App.scss";
import { Route, Navigate, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Works from "./components/works";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Wayne Cox Fine Art</h1>
        <NavBar></NavBar>
      </header>
      <div className="App-main">
        <Routes>
          <Route path="/home" element={<Home/>} />
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/about" element={<About/>} />
          <Route path="/works" element={<Works/>} />
          {/* <Route path="/works" component={<Works/>} /> */}
          {/* <Navigate from="/" exact to="/home" /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
