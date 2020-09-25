import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import TitleImage from '../TitleImage/TitleImage';

const Navbar = () => {
  return (
    <nav className='Navbar container d-flex justify-content-between align-items-end p-0'>
      <div className="useful-block"/>
      <TitleImage/>

      <div className="login-signup d-flex align-items-center">
        <Link to={ `/login` }>Log In</Link>
        <Link to={ `/register` } className='btn btn-small signup-btn'>Sign Up</Link>
      </div>

    </nav>
  );
};

export default Navbar;
