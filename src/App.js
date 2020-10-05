import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Helmets from "./Components/Helmet";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Helmets />
    </div>
  );
}

export default App;
