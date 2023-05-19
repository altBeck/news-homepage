import { useState } from 'react';

import './nav.css';
import logo from '../../assets/images/logo.svg';
import open from '../../assets/images/icon-menu.svg';
import close from '../../assets/images/icon-menu-close.svg';

const Menu = () => (
  <>
    <li><a href="#home">Home</a></li>
    <li><a href="#new">New</a></li>
    <li><a href="popular">Popular</a></li>
    <li><a href="#trending">Trending</a></li>
    <li><a href="#categories">Categories</a></li>
  </>
)

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={isOpen ? "main-container" : ""}  onClick={{toggleNavbar}} />
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? (
          <img src={close} alt="close" />
        ) : (
          <img src={open} alt="open" />
        )}
        </div>

        <div className="navbar-items">
          <Menu />
        </div>


      </nav>
    </div>
  )
}

export default Nav