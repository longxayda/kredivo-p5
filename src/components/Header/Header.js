import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import LogoP5 from "../../Image/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <NavLink to="/" onClick={() => { scrollToTop(); closeMenu(); }}>
              <img src={LogoP5} alt="Logo" />
            </NavLink>
          </div>
          <button className="menu-button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => { scrollToTop(); closeMenu(); }}>
                  Trang Chủ
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => { scrollToTop(); closeMenu(); }}>
                  Về chúng tôi
                </NavLink>
              </li>
              <li>
                <NavLink to="/product" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => { scrollToTop(); closeMenu(); }}>
                  Dịch vụ
                </NavLink>
              </li>
              <li>
                <NavLink to="/honor" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => { scrollToTop(); closeMenu(); }}>
                  Tôn Vinh
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => { scrollToTop(); closeMenu(); }}>
                  Liên hệ
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
