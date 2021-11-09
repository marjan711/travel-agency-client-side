import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css';


const person = <FontAwesomeIcon icon={faEnvelope} />


const Login = () => {
    
    

    const {signInUsingGoogle }=useAuth();
    const location =useLocation();
    const history =useHistory();
    const redirect_url =location.state?.from || '/home'


    // for redirect desire location using gmail
    
    const handleGoogleLogIn =()=>{
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_url)
        })
    } 
    
    
    


    
    return (
        <div className="custom-bg">
            <div className=" container  ">
               
               <div className="row">
                  <div className=" col-md-4 mt-5 pt-5">
                  <div className="">
                      <img className="w-50" src="https://i.ibb.co/wJ7hG7J/Logo-Makr-2c-YCi-K.png" alt="" />
                      <h1 className="text-white fw-bolder">J-<span className="text-danger">Travels</span></h1>
                      <h2 className="pb-5 text-white fw-bolder">Log in to your account</h2>
                      <button onClick={handleGoogleLogIn} className="btn btn-success mb-5"><span>{person}</span> Sign In</button>
                  </div>
                  </div>

                  <div className="col-md-8 mt-5 pt-5">
                        <h1 className="fw-bolder mt-md-5"><span className="text-danger">JOIN</span> WITH <span className="text-danger">US</span></h1>
                  </div>
               </div>
           
            
           </div>
        </div>
    );
};

export default Login;