import React from 'react';

const Agents = () => {
    return (
        <div>
            <div className="container">
                <h1 className="fw-bold mt-4 mb-2">TOUR GUIDES</h1>
                <h5 className="fw-bold text-secondary mb-5">WE ALSO PROVIDE PERSONAL TRAVEL GUIDES</h5>
                <div className="row">
                    <div className="col-md-4">
                        <div className="img">
                           <img className="img-fluid w-75" src="https://templatekit.jegtheme.com/travenu/wp-content/uploads/sites/22/2020/12/Team-25GTXVP.jpg" alt="" />
                        </div>
                        <h3 className="fw-bold mt-4">SARAH ALISON</h3>
                        <h6 className="fw-bold text-secondary">TOUR AGENT</h6>
                    </div>

                    <div className="col-md-4">
                        <div className="img">
                          <img className="img-fluid w-75" src="https://templatekit.jegtheme.com/travenu/wp-content/uploads/sites/22/2020/12/Team-6PXK2U2.jpg" alt="" />
                        </div>
                        <h3 className="fw-bold mt-4">DAVID NICHOL</h3>
                        <h6 className="fw-bold text-secondary">TOUR AGENT</h6>
                    </div>

                    <div className="col-md-4">

                        <div className="img">
                          <img className="img-fluid w-75" src="https://templatekit.jegtheme.com/travenu/wp-content/uploads/sites/22/2020/12/Team-HDPRZQ7.jpg" alt="" />
                        </div>
                        <h3 className="fw-bold mt-4">NORA LAM</h3>
                        <h6 className="fw-bold text-secondary">TOUR AGENT</h6>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agents;