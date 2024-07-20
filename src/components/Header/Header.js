// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import LogoP5 from "../../Image/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <Link to="/">
              <img src={LogoP5} alt="Logo" />
            </Link>
          </div>
          <button className="menu-button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/">Trang Chủ</Link></li>
              <li><Link to="/">Về chúng tôi</Link></li>
              <li><Link to="/">Sản phẩm</Link></li>
              <li><Link to="/">Con người</Link></li>
              <li><Link to="/">Liên hệ</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
