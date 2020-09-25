import React from 'react';
import './PaymentPage.scss';
import { Link } from 'react-router-dom';
import TitleImage from '../../components/TitleImage/TitleImage';
import VISACARD from '../../assets/images/VisaCard.svg';
import GroupCard  from '../../assets/images/GroupCard.png'

const PaymentPage = () => {

    return (
        <>
            <div className="PaymentPage pt-5">
                <nav className='Navbar container d-flex justify-content-center align-items-center '>
                    <TitleImage />     
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-5">
                        <h3 className="text-center font-36">PAyment info</h3>
                        <form role="form" className="p-5"> 
                            <div class="form-group">
                                <label className="label-custom mb-0 font-12" for="InputCardholder">Cardholder Name</label>
                                <input type="text" class="form-control custom-control" id="InputCardholder" />
                            </div>
                            <div class="form-group">
                                <label className="label-custom mb-0 font-12" for="InputCard">Card Number</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control custom-control" id="InputCard"/>
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><img src={GroupCard} alt="GROUPCARD" /> </div>
                                        </div>
                                    </div>
                               
                            </div>
                            <div class="form-group">
                                <div className="row">
                                    <div class="col-4">
                                        <label className="label-custom font-12" for="InputPassword">Expiration</label>
                                        <input type="number" class="form-control" placeholder="MM" /> 

                                    </div>
                                    <div class="col-4">
                                        <label className="label-custom  font-12" for="InputPassword">CVV</label>
                                        <input type="number" class="form-control" placeholder="YY" />
                                    </div>
                                    <div class="col-4">
                                        <label className="label-custom  font-12" for="InputPassword">
                                            <img src={VISACARD} alt="VISACARD" />
                                        </label>
                                        <input type="text" class="form-control" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <Link to={ `${ process.env.PUBLIC_URL }/buy-tickets` } type="submit" class="btn-Login btn-block p-3">Confirm</Link>
                            </div>
                            <div className="d-flex justify-content-center pt-4">
                                <span className="font-12 text-center px-5">
                                    Some secureity information Lorem ipsum dolor sit amet, 

                                    consectetur adipisicing elit, sed
                                </span>
                            </div>       
                        </form>
                        </div>
                        
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default PaymentPage
