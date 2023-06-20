import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';


const Menu = () => {
    return (
        <>
          <p><a href="#home">Home</a></p>
          <p><a href="#wBnB">About Us</a></p>
          {/* <p><a href="#possibility">Open AI</a></p> */}
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
          <p><a href="#contact">Contact Us</a></p>
        </>
    )
}


const Navbar = () => {
  
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="BnB__navbar">
      <div className="BnB__navbar-links">
        <div className="BnB__navbar-links_logo">
          <img src={logo} alt='logo'/>
        </div>
        <div className="BnB__navbar-links_container">
        <Menu />
        </div>
      </div>
      <div className="BnB__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="BnB__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="BnB__navbar-menu_container scale-up-center">
          <div className="BnB__navbar-menu_container-links">
          <Menu />
          </div>

          <div className="BnB__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
