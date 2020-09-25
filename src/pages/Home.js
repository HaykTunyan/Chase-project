import React from 'react';
import './Home.scss';
import { Img } from '../components/UI/Img';
import GameImage from '../assets/images/game-main-image.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    
    <div className='Home container-fluid pt-5'>
      <div className="d-flex justify-content-end">
          <div className="login-signup d-flex align-items-center">
            <Link to={`/login`} className="mr-3 font-18">Log In</Link>
            <Link to={`${ process.env.PUBLIC_URL }/register`} className='btn btn-small signup-btn'>Sign Up</Link>
          </div>
      </div>
      <div className='Home__content d-flex flex-column align-items-center '>

        <div className="main-image-wrap d-flex justify-content-center">
          <Img src={ GameImage }/>
        </div>

        <div className="main-buttons  d-flex justify-content-center">

          {/* <Link to={ `${ process.env.PUBLIC_URL }/` } className='btn'>
            Pick a card
          </Link> */}
    
          <Link to={ `${ process.env.PUBLIC_URL }/landing-page` } className='btn'>
            Buy ticket
          </Link>

        </div>
      </div>
    </div>

    </>
  );
};

export default Home;
