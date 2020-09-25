import React from 'react'
import BuyTicketsPage from '../pages/BuyTicketsPage/BuyTicketsPage';

const token = localStorage.token

const Redirect = () =>{
    return (
        <BuyTicketsPage />
    )
}
export default Redirect