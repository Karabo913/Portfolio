import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../Assets/logo2.png';
import Contact from '../../Assets/contact.png';
import menu from '../../Assets/menu.png';
import { Link } from 'react-scroll';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    const offset = -100; 
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={20} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-65} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='Resume' spy={true} smooth={true} offset={-280} duration={500} className="desktopMenuListItem">Resume</Link>
        <Link activeClass='active' to='MyPortfolio' spy={true} smooth={true} offset={-10} duration={500} className="desktopMenuListItem">Projects</Link>
      </div>
      <button className='desktopMenuBtn' onClick={scrollToContact}>
        <img src={Contact} alt="" className='desktopMenuing' /> Contact Me
      </button>




      <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='Resume' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Resume</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='MyPortfolio' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;
