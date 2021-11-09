import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Service.css'
import { Link } from 'react-router-dom';




const Service = () => {
    const {serviceId}=useParams();
    const [service,setService]=useState([]);
    useEffect(()=>{
        const url=`https://obscure-dawn-92220.herokuapp.com/service/${serviceId}`;
        console.log(url)
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[serviceId])

    const {name,banner,description}=service;
    return (
        <div>
            <div className="container">
                <div className="row">
                     <h1 className="fw-bolder mb-4">{name}</h1>
                    <div className="col-8">
                        <img src={banner} className="img-fluid"alt="" />
                    </div>

                    <div className="col-4">
                      <div className="div">
                          
                          <h3>You Can Book Your Packages</h3>
                          <Link to={`/order/${service._id}`}>
                                         <button type="button" className="btn btn-success mb-md-1">Booking Now</button>
                         </Link>
                          
                      </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                      <h6 className="c-style mt-4 mb-4">{description}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;