import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css'

const AddServices = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('https://obscure-dawn-92220.herokuapp.com/services',data)
      .then(res=>{
          if(res.data.insertedId){
              alert("Service Added Successfully");
              reset();
          }
      })

    
    };

    return (
       <div className="b-section">
            <div className="container ">
          <div className="row">
              <div className="col-md-5 mt-5">

              </div>
              <div className="col-md-7 mt-5 pt-5 ">
              <form className="w-100"  onSubmit={handleSubmit(onSubmit)}>

                    
                    <input className="p-2 w-75 mb-4" {...register("name")} placeholder="Service-Name"/>
                    <textarea className="w-75 mb-4" {...register("description")}placeholder="Description" />
                    <input className="p-2 w-75 mb-4" {...register("price")} placeholder="price"/>
                    <input className="p-2 w-75 mb-4" {...register("picture")} placeholder="picture url" />
                    <input className="p-2 w-75 mb-4" {...register("banner")} placeholder="Banner-url"/>
                    <br />
                    
                    <input type="submit" className="btn btn-success btn-lg" value="submit" />
                </form>
              </div>
          </div>
        </div>
       </div>
    );
};

export default AddServices;