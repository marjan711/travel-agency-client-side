import React, { useState } from 'react';
import AddServices from '../AddServices/AddServices';
import AllServices from './AllServices/AllServices';
import ManageOrders from './ManageOrders/ManageOrders';


const Admin = () => {
    const [control,setControl]=useState("allservices")
    return (
        <div className="container">
            <div>
                <div className="row">
                    {/* dashbord */}
                    <div className="col-md-2">
                        <div className="mt-5">
                            <h5 className="fw-bolder">Admin Dash Board</h5>
                            <div className="menu">
                                

                        

                                <button className="btn mt-5" onClick={()=>setControl("allservices")}>
                                    All Services
                                </button>

                                <br />

                                <button className="btn mt-3" onClick={()=>setControl("addservices")}>
                                    Add Services
                                </button>

                                <br />

                                <button className="btn mt-3" onClick={()=>setControl("manageorders")}>
                                    Manage All Orders
                                </button>


                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 ">

                        {
                            control==="allservices" && <AllServices></AllServices>
                            
                            
                        }

                        {
                            control==="addservices" && <AddServices></AddServices>
                            
                            
                        }

                        {
                            control==="manageorders" && <ManageOrders></ManageOrders>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;