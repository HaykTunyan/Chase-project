import React from 'react';
import './RegisterPage.scss';
import { Link } from 'react-router-dom';
import TitleImage from '../../components/TitleImage/TitleImage';

const RegisterPage = () => {

    return (
        <>
            <div className="RegiterPage pt-5">
                <nav className='Navbar container d-flex justify-content-center align-items-center '>
                    <TitleImage />     
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-5">
                        <h3 className="text-center font-36">Create an account</h3>
                        <div className="d-flex justify-content-between mt-4">
                            <Link to="/login" type="button" className="btn-Custom mr-2"> Log In </Link>
                            <Link to="/register" type="button" className="btn-Custom btn-border ml-2"> Register</Link>
                        </div>
                        <form role="form" className="p-5"> 
                            <div class="form-group">
                                <label className="label-custom mb-0 font-12" for="InputName">Username</label>
                                <input type="email" class="form-control custom-control" id="InputName" aria-describedby="nameHelp" placeholder="Username"/>
                            </div>
                            <div class="form-group">
                                <label className="label-custom mb-0 font-12" for="InputEmail">Email</label>
                                <input type="email" class="form-control custom-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <label className="label-custom mb-0 font-12" for="InputPassword">Password</label>
                                <input type="password" class="form-control custom-control" id="InputPassword" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <label className="label-custom mb-0 font-12" for="InputConfirmpassword">Confirm password</label>
                                <input type="password" class="form-control custom-control" id="InputConfirmpassword" placeholder="Confirm password"/> 
                            </div>
                            <div className="mb-5">
                                <Link to={`${ process.env.PUBLIC_URL }/buy-tickets`} type="submit" class="btn-Login btn-block p-3">Create Account</Link>
                            </div>    
                        </form>
                        </div>
                        
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default RegisterPage
