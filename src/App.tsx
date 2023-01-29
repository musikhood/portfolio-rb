import React from "react";
import "./App.scss";
import { Header, Projects, About } from "./Layout";

function App() {
  return (
    <div className="App">
      <div className="App__Eclipse App__Eclipse--1"></div>
      <div className="App__Eclipse App__Eclipse--2"></div>
      {/* <div className="App__Eclipse App__Eclipse--2"></div> */}

      <Header />
      <Projects />
      <About />
    </div>
  );
}

export default App;
