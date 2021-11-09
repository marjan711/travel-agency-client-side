import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { Card } from 'react-bootstrap';

const PlaceOrder = () => {
    const {user}=useAuth()
    const {serviceId}=useParams();
    const [service,setService] =useState({});
    const { register, handleSubmit,reset } = useForm();

    useEffect(()=>{
        const url =`https://obscure-dawn-92220.herokuapp.com/service/${serviceId}`
        console.log(url)
        fetch(url)
       
        .then(res=>res.json())
        .then(data=>setService(data))
    },[serviceId])
    

        const onSubmit = data => {
            const selectOrder=service;
            
            data.email=user.email;
            console.log(user.email)
            data.order=selectOrder;
            data.status="Pending";
            
            axios.post('https://obscure-dawn-92220.herokuapp.com/confirmOrder',data)
            .then(res=>{
                if(res.data.insertedId){
                    alert("Service Added Successfully");
                    reset();
                }
            })
        }
      
          
        
    
    return (
        <div>
            <h1>CONFIRM YOUR ORDER</h1>
            <div className="container">
          <div className="row">
              <div className="col-md-5 ms-4  mt-5">
              <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={service.picture} />
                    <Card.Body>
                        <Card.Title><h3 className="fw-bolder">{service.name}</h3></Card.Title>
                       
                        <h4>${service?.price}</h4>
                        
                        
                    </Card.Body>
                </Card>
              </div>

              <div className="col-md-6 mt-4 pt-5 ">
              <form className="w-100"  onSubmit={handleSubmit(onSubmit)}>

                    
                    <input className="p-2 w-75 mb-4"  {...register("name")} placeholder="Name"/>
                    <input className="p-2 w-75 mb-4" {...register("phone")} placeholder="Phone"/>
                    <input className="p-2 w-75 mb-4" {...register("person")} placeholder="Person" />
                    <input className="p-2 w-75 mb-4" type="date" {...register("date")} placeholder="Booking-Date"/>
                    <br />
                    
                    <input type="submit" className="btn btn-success btn-lg" value="submit" />
                </form>
              </div>
          </div>
        </div>
            
        </div>
    );
};

export default PlaceOrder;