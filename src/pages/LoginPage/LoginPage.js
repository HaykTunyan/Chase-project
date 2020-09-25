import React from 'react';
import './LoginPage.scss';
import { Link } from 'react-router-dom';
import TitleImage from '../../components/TitleImage/TitleImage';
import { Field, reduxForm } from 'redux-form';


import { login } from '../../redux/LoginReducer'

import { connect } from 'react-redux';



import Redirect from '../../contacts/Redirect';
import BuyTicketsPage from '../BuyTicketsPage/BuyTicketsPage';

const token = localStorage.token

const Login =(props) =>{

    
    const onSubmit = (formData) =>{
        
        props.login(formData.login,formData.password)
    }

    return( 
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}



const LoginPage = (props) => {

    console.log("props start", props);

    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <>
            <div className="LoginPage pt-5">
                <nav className='Navbar container d-flex justify-content-center align-items-center '>
                    <TitleImage />     
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-5">
                        <h3 className="text-center font-36">Welcome back</h3>
                        <div className="d-flex justify-content-between mt-4">
                            <Link to="/login" type="button" className="btn-Custom btn-border  mr-2"> Log In </Link>
                            <Link to="/register" type="button" className="btn-Custom  ml-2"> Register</Link>
                        </div>
                        <form role="form" className="p-5" onSubmit={handleSubmit} > 

                            <div class="form-group">
                                <label className="label-custom mb-0 font-12" htmlFor="InputEmail">Email address</label>
                                <Field component={"input"} type="email" name={"login"}  class="form-control custom-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Email" />
                                {/* <input type="email" class="form-control custom-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Email"/> */}
                            </div>
                            <div class="form-group">
                                <label className="label-custom mb-0 font-12" htmlFor="InputPassword">Password</label>
                                <Field component={"input"} type="password" name={"password"}  class="form-control custom-control" id="InputPassword" placeholder="Password" /> 
                                {/* <input type="password" class="form-control custom-control" id="InputPassword" placeholder="Password"/> */}
                                <Link to="forgot-password" className="label-custom font-12 float-right">Forgot Password?</Link> 
                            </div>
                            <div class="form-group form-check">
                                <Field component={"input"} type="checkbox" class="form-check-input checkbox-custom" id="Check" /> 
                                {/* <input type="checkbox" class="form-check-input checkbox-custom" id="Check" /> */}
                                <label class="form-check-label check-text" for="Check">Remember me</label>
                            </div>
                            <div className="mb-5">
                            {!token ? 
                                <Link  
                                to={`${ process.env.PUBLIC_URL }/buy-tickets`} 
                                type="submit" class="btn-Login btn-block p-3"
                                >
                                    Log In
                                </Link>
                                : Login
                            }

                            </div>
                            <div className="d-flex justify-content-center pt-4 ">
                                <span className="font-12">Don't have an account?</span>
                                <Link to="/register" className="reg-link font-12 ml-1">Sign Up</Link>
                            </div>       
                        </form>
                        </div>
                        
                    </div>

                </div>
            </div>
            
        </>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginPage)

const mapStateToProps =(state) => {

    console.log("stat map props", state)

    return {
        
        isAuth : state.auth.isAuth,
        
    }
    
}

export default connect(mapStateToProps,{login})(Login)