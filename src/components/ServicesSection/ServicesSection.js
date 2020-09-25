import React from 'react';
import './ServicesSection.scss';
import { Img } from '../UI/Img';
import InternetLottery from '../../assets/images/internet-lottery.png';
import BuyTickets from '../../assets/images/buy-tickets.png';
import GroupSpace from '../../assets/images/groupspace.png';
import { Link } from 'react-router-dom';


const ServicesSection = () => {
  return (
    <>
    {/* <section className='ServicesSection d-flex'>

      <div className="ServicesSection__container d-flex justify-content-around">
        <div className='info-wrap d-flex flex-column align-items-center'>
          <div className="image-wrap">
            <Img src={ InternetLottery }/>
          </div>

          <div className='text-wrap d-flex flex-column align-items-center'>
            <h2 className='text-uppercase'>INTERNET LOTTERY</h2>
            <p className='text-center'>
              Completely certified internet lottery Allowing you to stay home and play When it's cold out or just
              because
              you don't want to go outside
            </p>
          </div>

          <Link to={ `${ process.env.PUBLIC_URL }/` } className='btn btn-small'>Buy Now</Link>

        </div>

        <div className='info-wrap d-flex flex-column align-items-center'>
          <div className="image-wrap">
            <Img src={ BuyTickets }/>
          </div>

          <div className='text-wrap d-flex flex-column align-items-center'>
            <h2 className='text-uppercase'>buy tickets</h2>
            <p className='text-center'>
              Buy tickets to draw
            </p>
          </div>

          <Link to={ `${ process.env.PUBLIC_URL }/buy-tickets` } className='btn btn-small'>Buy Now</Link>

        </div>

      </div>
     
    </section> */}
    <section className="ServicesSection d-flex ">
    <div className="col-12 col-md-6 offset-md-3">
      <div className="d-flex flex-column">
        <h2 className="text-center font-38 text-uppercase">buy tickets</h2>
        <h3 className="text-center font-20 mt-3">Buy tickets to draw</h3>
        <div className='info-image d-flex justify-content-around mt-5 p-4'>
       
          <div className="text-wrap  ">
            <img src={GroupSpace} alt="GROUPSPACE" />
          </div>
          <div className='text-wrap d-flex flex-column '>
            <h2 className='text-uppercase font-48'>TICKET NAME</h2>
            <p className='text-left font-38 mt-3'>
               250$
            </p>
            <Link to={ `/payment-page` } className='btn btn-small mt-4'>Buy Now</Link>
            <Link to={ `${ process.env.PUBLIC_URL }/buy-tickets ` } className="mt-5"> How buy Ticket  <span className="ml-2"> > </span>  </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>

  );
};

export default ServicesSection;
