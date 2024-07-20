import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import AboutUs from "./components/Menu-Linked/AboutUs";
import Product from "./components/Menu-Linked/Product";
import Honor from "./components/Menu-Linked/Honor";
import Contact from "./components/Menu-Linked/Contact";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="/product" element={<Product />} />
            <Route path="/honor" element={<Honor />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
