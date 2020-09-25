import React from 'react';
import './WelcomeSection.scss';
import { Img } from '../UI/Img';
import CasinoWheel from '../../assets/images/casino-wheel.png';
import Particles from '../../assets/images/particles-image.svg';

const WelcomeSection = () => {
  return (
    <section className='WelcomeSection'>

      <div className="WelcomeSection__container">
        <h2 className='text-center text-uppercase' id='welcome-section'>
          Welcome to a world of possibilities
        </h2>

        <div className='wheel-text-wrap d-flex justify-content-between'>
          <Img src={ CasinoWheel }/>
          <div className="text-box">
            <h3 className='text-capitalize'>About our lottery</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
            <Img src={ Particles }/>
          </div>
        </div>
      </div>

    </section>
  );
};

export default WelcomeSection;
