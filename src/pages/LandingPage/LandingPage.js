import React from 'react';
import './LandingPage.scss';
import Header from '../../components/Header/Header';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import WhiteSection from '../../components/WhiteSection/WhiteSection';
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <Header/>
      <WelcomeSection/>
      <ServicesSection/>
      <WhiteSection/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
