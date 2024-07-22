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
import ProfileDaoXuanSon from "./components/Menu-Linked/Profile/ProfileDaoXuanSon";
import ProfileDaoTienPhong from "./components/Menu-Linked/Profile/ProfileDaoTienPhong";
import ProfileHangSamNang from "./components/Menu-Linked/Profile/ProfileHangSamNang";
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
            <Route path="/ProfileDaoXuanSon" element={<ProfileDaoXuanSon />} />
            <Route path="/ProfileDaoTienPhong" element={<ProfileDaoTienPhong />} />
            <Route path="/ProfileHangSamNang" element={<ProfileHangSamNang />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
