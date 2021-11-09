import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
             <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom "
                    src="https://i.ibb.co/DMMtpmR/pexels-vincent-gerbouin-1174732-1.jpg"
                    alt="First slide"
                    /> 
                            
                    <Carousel.Caption>
                    
                    <h1 className="fw-bolder ">WELCOME TO  </h1>
                    <br/>
                    <br/>
                    <h1 className="fw-bolder text-danger ">J-TRAVELS </h1>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src="https://i.ibb.co/bB4jxnT/pexels-elina-sazonova-1914982-1.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 className="fw-bolder  animate__animated animate__flash animate__slow">DISCOVER THE BEST PLACES <span className="fw-bolder">YOUR BODY</span> </h1>
                    <br />
                    <br />
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src="https://i.ibb.co/7Cg663q/pexels-christian-heitz-842711-1.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1 className="fw-bolder  animate__animated animate__flash animate__slow">SELECT YOUR DESTINATION</h1>
                    <Link to="/services">
                        <button className="btn btn-success">SET YOUR PACKAGE</button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;