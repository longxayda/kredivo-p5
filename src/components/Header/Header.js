import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import LogoP5 from "../../Image/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <NavLink to="/" onClick={closeMenu}>
              <img src={LogoP5} alt="Logo" />
            </NavLink>
          </div>
          <button className="menu-button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Trang Chủ</NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Về chúng tôi</NavLink>
              </li>
              <li>
                <NavLink to="/product" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Sản phẩm</NavLink>
              </li>
              <li>
                <NavLink to="/person" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Con người</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Liên hệ</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
