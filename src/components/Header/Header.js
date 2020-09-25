import React from 'react';
import './Header.scss';
import Navbar from '../Navbar/Navbar';
import { Img } from '../UI/Img';
import ArGlassesImage from '../../assets/images/ar-glasses-image.png';
import GamePagImage from '../../assets/images/gamepad-image.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar/>

      <div className="container header-content d-flex flex-column align-items-center">
        <Img src={ ArGlassesImage } classes='ar-glasses'/>
        <h1 className='text-uppercase'>Internet Lottery</h1>
        <p>Buy tickets every week for a chance to pick a card and win the JACKPOT</p>

        {/* <a href='#welcome-section' className='btn see-more-btn'>See more</a> */}
        <Img src={ GamePagImage } classes='gamepad'/>
      </div>

    </header>
  );
};

export default Header;
