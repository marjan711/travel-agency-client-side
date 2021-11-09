import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { faUserAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const person = <FontAwesomeIcon icon={faUserAlt} />

const MyOrders = () => {
    const {user}=useAuth();
    
    const email=user.email || "180207109@gmail.com";
    
    
    const [orders,setOrders]=useState([])
    const [deleteCount,setDeleteCount]=useState(false)
    
    
    useEffect(()=>{
        
        
        const url =`https://obscure-dawn-92220.herokuapp.com/myorders/${email}`;
        
        fetch(url)
        .then(res=>res.json())
         .then(data=>setOrders(data))
    },[email,deleteCount])

    const handleDelete =(id)=>{
            const proceed=window.confirm("ARE YOU SURE ?");
            if(proceed){
                fetch(`https://obscure-dawn-92220.herokuapp.com/deleteOrder/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>setDeleteCount(data))
            }
            
    }
    return (
        <div className="container">
            <h1>MY ORDERS</h1>
            <div className="row">
            {
                orders?.map(order=>(
                    <div key={order?._id} className="col-md-4 gy-md-5 gy-sm-4 gy-5">
                               
                    <div  className="card c-card border border-dark" >
                           <div className="img-div pe-2">
                           <img src={order?.order.picture} className="card-img-top" alt="..."/>
                           </div>
                        <div className="card-body">
                                <h3 className="fw-bolder">{order?.order.name}</h3>
                                <hr />
                           
                          
                            <h5 className="fw-bolder"><span className="c-price">${order.order.price}</span> <span className="c-span">/{person}</span></h5>

                            
                        
                            <br/>
                            <button onClick={()=>handleDelete(order?._id)} className="btn btn-danger">Remove</button>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    );
};

export default MyOrders;