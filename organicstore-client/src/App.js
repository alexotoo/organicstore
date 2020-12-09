import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main className="py-3">
          <Route path="/" exact component={HomePage} />
          <Route path="/Product/:id" component={ProductPage} />
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
