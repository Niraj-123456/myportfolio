import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header />
          <Home />
          <About />
        <Footer />
    </div>
  );
}

export default App;
