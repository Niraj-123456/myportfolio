import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
