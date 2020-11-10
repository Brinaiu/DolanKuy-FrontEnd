import React from 'react';
import '../Components/Components.css'
import NavbarTop from "../Components/NavbarTop";
import Footer from "../Components/Footer";
import avatar from '../Components/Gallery/avatar.jpg';
import {Button, Container, Form, Row, Col} from 'react-bootstrap';

function Profile() {
    return (
        <div>
            <NavbarTop/>
            <Container className="my-5">
                <Row>
                    <Col className="mt-5">
                        <img id="profilePicture" src={avatar} alt='profile'/>
                        <h4 className="mt-5 mx-5" id="editProfile">
                            <a href='#' style={{color: "black"}}>Edit Photo Profile</a>
                        </h4>
                    </Col>
                    <Col className="mt-5">
                        <Form className="mb-5">
                            <Form.Group>
                                <Form.Label>Nama</Form.Label>
                                <Form.Control type="text" placeholder="Masukkan Nama"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Masukkan Email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Masukkan Password"/>
                            </Form.Group>
                        </Form>
                        <Button className='mt-5' id="saveButton" variant="basic" block>Simpan Perubahan</Button>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default Profile;