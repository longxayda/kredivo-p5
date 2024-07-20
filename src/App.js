// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
