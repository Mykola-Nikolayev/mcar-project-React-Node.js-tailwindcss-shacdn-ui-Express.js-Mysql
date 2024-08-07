import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import { IconMenuBurger, IconClose } from '../Icons';

export const Header = () => {
  const [navOpened, setNavOpened] = useState(false)


  const onCloseNav = () => setNavOpened(false)

  return (
    <div className="header-wrapper bg-black">
      <div className="logo">mcar</div>
      <div className='mobile-only open-icon-wrapper' onClick={() => setNavOpened(true)}>
        <IconMenuBurger />
      </div>
      <nav className={`nav-list ${!navOpened ? 'nav-list-close' : ''}`}>
        <div className='mobile-only close-icon-wrapper' onClick={onCloseNav}>
          <IconClose />
        </div>
        <Link to="/" onClick={onCloseNav}>Home</Link>
        <Link to="/info" onClick={onCloseNav}>Info</Link>
        <Link to="/modeles" onClick={onCloseNav}>Modeles</Link>
        <Link to="/shop" onClick={onCloseNav}>Shop</Link>
      </nav>
    </div>
  );
};

