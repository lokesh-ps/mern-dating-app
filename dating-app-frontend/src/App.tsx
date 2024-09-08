import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import DatingCards from "./components/datingCards/DatingCards";
import SwipeButtons from "./components/swipeButtons/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
