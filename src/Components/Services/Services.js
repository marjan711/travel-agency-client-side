import React, { useEffect, useState } from 'react';
import { faUserAlt,faClock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Services.css'
import { Link} from 'react-router-dom';

const person = <FontAwesomeIcon icon={faUserAlt} />

const Services = () => {
    
    const [services,setServices]=useState([]);
    useEffect(()=>{
            fetch('https://obscure-dawn-92220.herokuapp.com/allServices')
            .then(res=>res.json())
            .then(data=>setServices(data))
    },[])
     
    return (
        <div>
            
            <div className="container">
                <h1 className="fw-bolder mt-5">OUR PACKAGES</h1>
            <div className="row">
            {
                        services.map(service =>(
                            
                            <div key={service._id} className="col-md-4 gy-md-5 gy-sm-4 gy-5">
                               
                                 <div  className="card c-card border border-dark" >
                                        <div className="img-div pe-2">
                                        <img src={service.picture} className="card-img-top" alt="..."/>
                                        </div>
                                     <div className="card-body">
                                             <h3 className="fw-bolder">{service.name}</h3>
                                             <hr />
                                             <p><FontAwesomeIcon icon={faClock} /> <span>3 days</span></p>
                                             <p>Type:International</p>
                                             <p>Personal Tour Guide</p>
                                             <p>24 hour Support</p>
                                        
                                       
                                         <h5 className="fw-bolder"><span className="c-price">${service.price}</span> <span className="c-span">/{person}</span></h5>

                                         <Link to={`/services/${service._id}`}>
                                         <button type="button" className="btn btn-success me-4 mb-md-1">More Details</button>
                                         </Link>

                                         <Link to={`/order/${service._id}`}>
                                         <button type="button" className="btn btn-success mb-md-1">Booking Now</button>
                                         </Link>
                                     
                                         <br/>
                                         
                                     </div>
                                 </div>
                             </div>
                            
                            ))
                    }
            </div>
            </div>
        </div>
    );
};

export default Services;