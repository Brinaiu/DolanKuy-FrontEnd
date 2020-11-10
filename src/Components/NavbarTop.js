import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Components.css';
import {Button, Container, Nav, Navbar, Form} from 'react-bootstrap';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import ListWisata from '../Pages/ListWisata';
import Akomodasi from '../Pages/Akomodasi';
import SignIn from '../Pages/Auth/SignIn';
import Dashboard from '../Pages/Dashboard';
const brand = {
    color: '#FF6329',
    fontFamily: 'Montserrat',
    fontWeight: '600',
};

const NavbarTop = () => {
    return (
 
        <div>          
            <Container className='mb-5' fluid>
                <Navbar className='border' style={{backgroundColor: 'white'}} fixed="top">
                    <Navbar.Brand id="brand">
                                <Nav.Link   >
                                   <Link id="navLink" to="/dashboard" >
                                       <h2 id="navLink">Dolankuy</h2>
                                    </Link>
                               </Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="ml-auto">
                            <Form inline>
                                <Form.Control className='mr-sm-2' style={{fontFamily: 'Montserrat'}} placeholder='search'/>
                            </Form>

                            <Nav.Item>
                                
                               <Nav.Link  >
                                   <Link id="navLink" to="/list_wisata">
                                        List Wisata
                                   </Link>
                               </Nav.Link>  

                            </Nav.Item>
                            <Nav.Item>
                               <Nav.Link >
                                    <Link id="navLink" to="/akomodasi">
                                        Akomodasi
                                    </Link>
                                </Nav.Link>      
                            </Nav.Item>
                            
                            <Button id="buttonLogIn" className="mx-2" variant="basic">
                                <Link id="buttonLogIn" to="/sign_in">
                                    Login
                                </Link>
                            </Button>

                            <Button id="buttonSignUp" className="mx-2" variant="basic">
                                <Link id="buttonSignUp" to="/sign_up">
                                    Sign Up
                                </Link>
                            </Button>

                        
                           
                        </Nav>
                    </Navbar.Collapse>  
                </Navbar>
            </Container>
            </div>
    )
};


export default NavbarTop;   