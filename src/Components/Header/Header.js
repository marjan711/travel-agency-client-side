import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
            <Navbar className="pt-1 pb-1" collapseOnSelect expand="lg md"  bg="dark" sticky="top" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/home">
                <img
                        src="https://i.ibb.co/wJ7hG7J/Logo-Makr-2c-YCi-K.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                />
                <h6>J-TRAVELS</h6>
                </Navbar.Brand>
                <Navbar.Toggle />

                <NavbarCollapse className=" justify-content-end">
                <Nav className="me-lg-5 ">
                    <Nav.Link className="fw-bold " as={Link} to="/home"><li className="c-li">Home</li></Nav.Link>
                    <Nav.Link className="fw-bold " as={Link} to="/services"><li className="c-li">Services</li></Nav.Link>
                    {/* <Nav.Link className="fw-bold " as={Link} to="/aboutus"><li className="c-li">About US</li></Nav.Link> */}
                    
                    {
                        user.email?<Nav.Link className="fw-bold " as={Link} to="/myorders"><li className="c-li">My Orders</li></Nav.Link>:"null"
                    }
                </Nav>
                    {
                        user.email?<Nav.Link  as={Link} to="/admin"><button className="btn btn-danger">Admin</button></Nav.Link>:"null"
                    }
                    
                   <Nav className="ms-lg-5">
                     
                    
                    

                    <Navbar.Text className="mt-2">
                        <a href="#login">{user?.displayName }</a>
                     </Navbar.Text>
                    {
                        user?.email?<Nav.Link  as={Link} to="/login"><button onClick={logOut} className="btn btn-success">LogOut</button></Nav.Link>:
                        <Nav.Link  as={Link} to="/login"><button className="btn btn-success">Login</button></Nav.Link>
                        
                        
                    }

                    
                    
                    
                   
                </Nav>
                </NavbarCollapse>
                

                
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;