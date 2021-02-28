import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './css/portfolio.css';
import './css/styles.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </Wrapper> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;