import { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo-kratoos.png';
import menu_icon from '../../assets/menu-icon.png';
  import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    if(location.pathname === "/team" || location.pathname === "/ourPrinciples") {
      setSticky(true);
    }
  }, [location.pathname]);
  
  return (
    <nav className={`container ${sticky || location.pathname == "/team" || location.pathname=="/ourPrinciples" ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo"/>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <HashLink smooth to="/#hero">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about">
            About Us
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#products">
            Products
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#principles">
            Principles
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#testimonials">
            Testimonials
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact" className="btn">
            Contact Us
          </HashLink>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
