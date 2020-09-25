import React from 'react';
import './BuyTicketsPage.scss';
import TitleImage from '../../components/TitleImage/TitleImage';
import { Img } from '../../components/UI/Img';
import TicketsPattern from '../../assets/images/tickets-pattern.png';
import PokerImage from '../../assets/images/poker-image.png';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import USER from '../../assets/images/Vector.png';
import NumberOne from '../../assets/images/number-one.png';
import NumberTwo from '../../assets/images/number-two.png';

const BuyTicketsPage = () => {
  return (
    <div className='BuyTicketsPage '>
      <nav className='d-flex container-fluid align-items-center'>
        <div className="col-6 ml-auto d-flex justify-content-center">
        <TitleImage/>
        </div>
        <div className="col-3 d-flex nav-user">
          <Link >
            <img src={USER} alt="VECTOR" />
          </Link>
          <Link to={`${ process.env.PUBLIC_URL }/`} className="font-22">
             <span>Logout</span>
          </Link>
        </div>
        
        {/* <Link to={ `${ process.env.PUBLIC_URL }/winning-numbers` } className='btn'>Winning numbers</Link> */}
      </nav>

      <div className="cover d-flex flex-column justify-content-center align-items-center">
        <h2>HOW TO BUY TICKETS?</h2>
        <h3>What you need to know during and after purchase.</h3>
        <Link to={ `${ process.env.PUBLIC_URL }/winning-numbers` } className='btn mt-3 '>Back to top</Link>
      </div>

      <section className='text-section d-flex'>
        <div className="left-text">
          <h3>BEFORE YOU LEAVE THE COUNTER: <br/>
            DOUBLE-CHECK YOUR TICKETS</h3>
          <p>
            The numbers on your LOTTO ticket should match the numbers you chose on your selection slip.
            Your INSTANT ticket should be free of damage or defects. If your ticket seems unusually damaged, call the
            OLG Support Centre at 1-800-000-0000.
          </p>
        </div>

        <div className="right-image">
          <Img src={ TicketsPattern }/>
          {/* <img src= { NumberOne} /> */}
        </div>
      </section>

      <section className='text-section d-flex'>
        <div className="right-image">
          <Img src={ TicketsPattern }/>
          {/* <img src= { NumberTwo}  /> */}
        </div>

        <div className="left-text">
          <h3>AFTER YOU BUY: AVOID EXTRA <br/>
            MARKINGS ON YOUR TICKET</h3>
          <p>
            Unknown markings can increase the time it takes to process your prize claim. The only information that
            should be written on the ticket is your signature or printed name and the personal information required to
            complete the back of the ticket.
          </p>
        </div>
      </section>

      {/* <section className='tickets-section'>
        <div className="tickets-wrap d-flex justify-content-between">
          <div className="ticket-one d-flex">
            <div className="ticket-one__left d-flex align-items-center">
              <Img src={ PokerImage }/>

              <div className='text-wrap'>
                <p>TICKET <br/> NAME</p>
                <p>100 USD <br/> GET VOUCHER</p>
              </div>
            </div>
            <div className="ticket-one__right">
              <div className='roted-text d-flex flex-column'>
                <p>Buy one get one free -</p>
               
              </div>
            </div>
          </div>

          <div className="ticket-one d-flex">
            <div className="ticket-one__left d-flex align-items-center">
              <Img src={ PokerImage }/>

              <div className='text-wrap'>
                <p>TICKET <br/> NAME</p>
                <p>100 USD <br/> GET VOUCHER</p>
              </div>
            </div>
            <div className="ticket-one__right">
              <div className='roted-text d-flex flex-column'>
                <p>Buy one get one free -</p>
              
              </div>
            </div>
          </div>

          
        </div>
      </section> */}

      <Footer/>

    </div>
  );
};

export default BuyTicketsPage;
