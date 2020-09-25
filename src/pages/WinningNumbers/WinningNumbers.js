import React, { useState } from 'react';
import './WinningNumbers.scss';
import TitleImage from '../../components/TitleImage/TitleImage';
import { Link } from 'react-router-dom';
import { Img } from '../../components/UI/Img';
import Lottario from '../../assets/images/lottario-image.png';
import Dice from '../../assets/images/dice-image.png';
import Wheel from '../../assets/images/wheel-of-fortune-image.png';
import PokerImage from '../../assets/images/poker-image.png';
import LotarioBig from '../../assets/images/lottario-image-big.png';
import WhiteSection from '../../components/WhiteSection/WhiteSection';
import Footer from '../../components/Footer/Footer';
import Flesh from '../../assets/images/Fleshcards.png';
import Rectangle from '../../assets/images/Rectanglecard.png';
import CardFlesh from '../../assets/images/Groupcardpng.png';
import FooterTop from '../../assets/images/FooterTop.png';
import ChaseCard from '../../components/ChaseCard/ChaseCard';
import WinningPopup from '../../components/WinningPopup/WinningPopup';

const WinningNumbers = () => {

  // const [ topNumbers ] = useState([20, 17, 37, 20, 15, 63]);
  // const [ bottomNumbers ] = useState([20, 19, 37, 20]);

  const array = [
    "qyap@2", 
    "qyap@3", 
    "qyap@4", 
    "qyap@5", 
    "qyap@6",
    "qyap@7", 
    "qyap@8", 
    "qyap@9", 
    "qyap@10", 
    "qyap@A",
    "qyap@J", 
    "qyap@K", 
    "qyap@Q", 
    "sirt@2", 
    "sirt@3",
    "sirt@4", 
    "sirt@5", 
    "sirt@6", 
    "sirt@7", 
    "sirt@8",
    "sirt@9", 
    "sirt@10", 
    "sirt@A", 
    "sirt@J", 
    "sirt@Q",
    "sirt@K", 
    "xach@2",
    "xach@3", 
    "xach@4",
    "xach@5",
    "xach@6",
    "xach@7",
    "xach@8",
    "xach@9",
    "xach@10",
    "xach@A",
    "xach@J",
    "xach@Q",
    "xach@K",
    "xar@2",
    "xar@3", 
    "xar@4",
    "xar@5",
    "xar@6",
    "xar@7",
    "xar@8",
    "xar@9",
    "xar@10",
    "xar@A",
    "xar@J",
    "xar@Q",
    "xar@K"
  ];

      const images = array.map(image => {
        return <img key={image} src={require(`../../assets/images/ChaseCard/${image}.png`)}  />
      });


  return (
    <div className='WinningNumbers'>
      <nav className='d-flex justify-content-center align-items-center'>
        <TitleImage/>
      </nav>

      <section className="header-section d-flex justify-content-center align-items-center">
         <Img src={Flesh} />
      </section>
      <section className="d-flex justify-content-center">
        <h3 className="font-36 text-center banner-title mt-5">Please open one card</h3>
      </section>
      <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2  d-flex justify-content-center mt-5">
        <Link className="btn win-btn  font-20" > Check wining card </Link>
        {/* <WinningPopup /> */}
      </div>
      <section className="main-cards ">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2 d-flex justify-content-center flex-wrap">
              {/* card 1 */}
              <ChaseCard />  
              {/* card 2 */}
              <ChaseCard />
              {/* card 3 */}
              <ChaseCard />
              {/* card 4 */}
              <ChaseCard />
              {/* card 5 */}
              <ChaseCard />
              {/* card 6 */}
              <ChaseCard />
              {/* card 7 */}
              <ChaseCard />
              {/* card 8 */}
              <ChaseCard />
              {/* card 9 */}
              <ChaseCard />
              {/* card 10 */}
              <ChaseCard />
              {/* card 11 */}
              <ChaseCard />
              {/* card 12 */}
              <ChaseCard />
              {/* card 13 */}
              <ChaseCard />
              {/* card 14 */}
              <ChaseCard />
              {/* card 15 */}
              <ChaseCard />
              {/* card 16 */}
              <ChaseCard />
              {/* card 17 */}
              <ChaseCard />
              {/* card 18 */}
              <ChaseCard />
              {/* card 19 */}
              <ChaseCard />
              {/* card 20 */}
              <ChaseCard />
              {/* card 21 */}
              <ChaseCard />
              {/* card 22 */}
              <ChaseCard />
              {/* card 23 */}
              <ChaseCard />
              {/* card 24 */}
              <ChaseCard />
              {/* card 25 */}
              <ChaseCard />
              {/* card 26 */}
              <ChaseCard />
              {/* card 27 */}
              <ChaseCard />
              {/* card 28 */}
              <ChaseCard />
              {/* card 29 */}
              <ChaseCard />
              {/* card 30 */}
              <ChaseCard />
              {/* card 31 */}
              <ChaseCard />
              {/* card 32 */}
              <ChaseCard />
              {/* card 33 */}
              <ChaseCard />
              {/* card 34 */}
              <ChaseCard />
              {/* card 35 */}
              <ChaseCard />
              {/* card 36 */}
              <ChaseCard />
              {/* card 37 */}
              <ChaseCard />
              {/* card 38 */}
              <ChaseCard />
              {/* card 39 */}
              <ChaseCard />
              {/* card 40 */}
              <ChaseCard />
              {/* card 41 */}
              <ChaseCard />
              {/* card 42 */}
              <ChaseCard />
              {/* card 43 */}
              <ChaseCard />
              {/* card 44 */}
              <ChaseCard />
              {/* card 45 */}
              <ChaseCard />
              {/* card 46 */}
              <ChaseCard />
              {/* card 47 */}
              <ChaseCard />
              {/* card 48 */}
              <ChaseCard />
              {/* card 49 */}
              <ChaseCard />
              {/* card 50 */}
              <ChaseCard />
              {/* card 51 */}
              <ChaseCard />
              {/* card 52 */}
              <ChaseCard />


            
            {/* <div className="card-flesh m-3">
              
            </div> */}
          </div>
        </div>
      </section>

      {/* <section className="lotto-images-section d-flex justify-content-between align-items-center">
        <Img src={ Lottario }/>
        <Img src={ Dice }/>
        <Img src={ Wheel }/>
        <Img src={ PokerImage }/>
      </section> */}
{/* 
      <section className="winning-numbers d-flex justify-content-center align-items-center pb-5">
        <div className="winning-numbers-wrap d-flex flex-column align-items-center">
          <Img src={ LotarioBig }/>
          <h3>May 25, 2020</h3>

          <div className="top-numbers">

            <div className='top-numbers-wrap d-flex justify-content-between'>
              { topNumbers.map((number, idx) => (
                <div key={ idx } className="number-circle d-flex justify-content-center align-items-center">
                  { number }
                </div>
              )) }

              <p>+</p>

              <div className="number-circle d-flex justify-content-center align-items-center">
                27
              </div>
              BONUS
            </div>

            <div className='bottom-numbers-wrap d-flex justify-content-between'>
              { bottomNumbers.map((number, idx) => (
                <div key={ idx } className="number-circle d-flex justify-content-center align-items-center">
                  { number }
                </div>
              )) }


            </div>

            <h3 className='text-center mt-5'>0502169</h3>

          </div>
        </div>
      </section> */}
      {/* <WhiteSection/> */}
      <section className="container">
      {/* <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                       { images }
                    </div> */}

        {/*  it is working   */}
      </section>
      <Img src={FooterTop}  classes="footer-top"/>
      <Footer/>
    </div>
  );
};

export default WinningNumbers;
