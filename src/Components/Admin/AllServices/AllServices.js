import React, { useEffect, useState } from 'react';

const AllServices = () => {

    const [services,setServices]=useState([])
    const [deleteCount,setDeleteCount]=useState(false);

    useEffect(()=>{
        fetch('https://obscure-dawn-92220.herokuapp.com/allServices')
        .then(res=>res.json())
        .then(data=>setServices(data))
},[deleteCount])

const handleDelete =(id)=>{
    fetch(`https://obscure-dawn-92220.herokuapp.com/deleteService/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>setDeleteCount(data))
}
    return (
        <div>
            <h1>All Services</h1>
            <h2>Now Service Available:{services.length}</h2>
            <div className="container">
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
                                        
                                       
                                         <h5 className="fw-bolder"><span className="c-price">${service.price}</span></h5>
                                     
                                         <br/>

                                         <button className="btn btn-danger" onClick={()=>handleDelete(service?._id)}>
                                             Remove
                                         </button>
                                         
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

export default AllServices;