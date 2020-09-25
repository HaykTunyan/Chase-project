import React from 'react';
import './ForgotPassword.scss';
import { Link } from 'react-router-dom';
import TitleImage from '../../components/TitleImage/TitleImage';

const ForgotPassword = () => {

    return (
        <>
            <div className="ForgotPassword pt-5">
                <nav className='Navbar container d-flex justify-content-center align-items-center '>
                    <TitleImage />     
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-5">
                        <h3 className="text-center font-36">Write your new password</h3>
                        <form role="form" className="p-5"> 
                            <div class="form-group">
                                <label className="label-custom mb-0 font-12" for="InputNewPassword">New password</label>
                                <input type="password" class="form-control custom-control" id="InputNewPassword" placeholder="New password"/>
                            </div>
                            <div class="form-group">
                                <label className="label-custom mb-0 font-12" for="InputConfirmpassword">Confirm password</label>
                                <input type="password" class="form-control custom-control" id="InputConfirmpassword" placeholder="Confirm password"/> 
                            </div>
                            <div className="mb-5">
                                <Link type="submit" class="btn-Login btn-block p-3">Submit</Link>
                            </div>    
                        </form>
                        </div>                  
                    </div>
                </div>
            </div>           
        </>
    )
}

export default ForgotPassword
