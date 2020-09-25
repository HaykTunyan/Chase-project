import React, { useState } from 'react';
import { Button } from './Button';
import { Img } from '../Img';
import WishlistEmpty from '../../../assets/icons/wishlist-empty.png';
import WishlistFilled from '../../../assets/icons/wishlist-filled.png';

export const WishlistButton = () => {

  const [toggle, setToggle] = useState(false);

  const toggleWishlist = () => {
    setToggle(!toggle);
  };

  return (
    <Button onClick={ toggleWishlist }>
      <Img src={ toggle ? WishlistFilled : WishlistEmpty }/>
    </Button>
  );
};
