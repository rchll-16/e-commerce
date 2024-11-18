import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const [activeNav, setActiveNav] = useState(''); // Track active nav
  const [cartCount] = useState(0); // Keep cartCount at 0 (static)
  const [isSearchActive, setIsSearchActive] = useState(false); // Track search bar activation

  const handleNavClick = (navItem) => {
    if (activeNav === navItem) {
      setActiveNav(''); // Deactivate if it's already active
    } else {
      setActiveNav(navItem); // Activate the clicked item
    }
  };

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive); // Toggle search bar activation
  };

  return (
    <header>
      <div className='top-text'>
        <p>Get your book pass now to take advantage of our amazing deals!
          <Link to="#" className='smd'>See more details.</Link>
        </p>
        <h6>Hi, <span className='name'>Guest</span> </h6>
        <Link to='/login' className='login'>Log In</Link>
      </div>

      <div className="navbar">
        <div className="side-menu">
          <Link to="#" onClick={() => handleNavClick('menu')}>
            <img
              src={activeNav === 'menu' ? require('../assets/icons/Menu-Active.png') : require('../assets/icons/Menu.png')}
              alt='Menu'
            />
          </Link>
        </div>
        
        <div className='shop-nav'>
          <ul>
            <li className='r-age'>
              <Link to="#" onClick={() => handleNavClick('reading-age')}
                className={activeNav === 'reading-age' ? 'active' : ''}>
                <img
                  src={activeNav === 'reading-age' ? require('../assets/icons/Carousel-Active.png') : require('../assets/icons/Carousel.png')}
                  alt='Shop by Reader'
                />
                Shop by Reading Age
              </Link>
            </li>
            <li className='b-genre'>
              <Link to="#" onClick={() => handleNavClick('book-genre')}
                className={activeNav === 'book-genre' ? 'active' : ''}>
                <img
                  src={activeNav === 'book-genre' ? require('../assets/icons/Open-Book-Active.png') : require('../assets/icons/Open-Book.png')}
                  alt='Shop by Book Genre'
                />
                Shop by Book Genre
              </Link>
            </li>
          </ul>
        </div>
        
        <div className='logo'>
          <img src={require('../assets/home-logo.png')} alt='Childhood Logo'/>
        </div>

        <div className='icons'>
          <div className={`icon2 ${activeNav === 'search' ? 'active-icon' : ''}`}>
            <Link to="#" onClick={handleSearchClick}>
              <img src={require('../assets/icons/Search.png')} alt='Search'/>
            </Link>
            {/* Search bar */}
            <div className={`search-bar ${isSearchActive ? 'active' : ''}`}>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className='icon2'>
            <Link to="/login" onClick={() => handleNavClick('user')}>
              <img
                src={activeNav === 'user' ? require('../assets/icons/User-Active.png') : require('../assets/icons/User.png')}
                alt='User'
              />
            </Link>
          </div>
          <div className={`icon2 cart-icon ${activeNav === 'cart' ? 'icon-active' : ''}`} onClick={() => handleNavClick('cart')}>
            <img src={require('../assets/icons/Shopping-Bag.png')} alt='Shopping Bag'/>
            <span className="badge">{cartCount > 0 ? cartCount : ''}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
