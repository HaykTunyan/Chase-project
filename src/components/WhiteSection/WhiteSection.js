import React from 'react';
import './WhiteSection.scss';

const WhiteSection = () => {
  return (
    <div className='blue-rectangles-background'>
      <section className='WhiteSection d-flex justify-content-center align-items-center'>
        <div className='WhiteSection__text-wrap d-flex flex-column justify-content-center align-items-center'>
          <h2 className='text-center text-capitalize'>The More tickets you buy the better chance of winning</h2>
          <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius nobis omnis minima similique pariatur
            voluptatem facere quia, unde sequi.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhiteSection;
