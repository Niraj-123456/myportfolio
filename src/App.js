import React, { Component } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Certification from './components/Certification'


class App extends Component {
  render(){
    console.log("Hello")
    return (
      <div className="App">
          <Header />
            <Home />
            <About />
            <Contact />
            <Certification />
          <Footer />
      </div>
    );
  }
  
}

export default App;
