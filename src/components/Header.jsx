import React from 'react';
import logo from '../img/Logo.svg'
import MyButton from './UI/Button/MyButton';

function Header(props) {
  return (
    <header className='header'>
      <div className='header__nav'>

        <a className="header__nav__logo">
          <img src={logo} alt="Pfoto logo" />
        </a>

        <div className="header__nav__button">
          <MyButton href='#Users'>
            Users
          </MyButton>
          <MyButton href='#Pagistration'>
            Sing up
          </MyButton>
        </div>

      </div>
    </header>
  );
}

export default Header;