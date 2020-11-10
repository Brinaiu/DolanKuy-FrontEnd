import React from 'react';
import './Components.css';
import DolanKuy from './Gallery/DolanKuy.png';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import {Container,Jumbotron, Row, Col} from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
        <Jumbotron className="mb-0" fluid>
            <Container>
                <Row>
                    <Col>
                        <img width="159" height="121" src={DolanKuy} alt='logo'/>
                    </Col>
                    <Col>
                        <h5 className="judulFooter">About Us</h5>
                        <p className="teksFooter">DolanKuy adalah Aplikasi sebagai referensi wisata yang ada di suatu daerah</p>
                    </Col>
                    <Col>
                        <h5 className="judulFooter">Contact</h5>
                        <p className="teksFooter"><FaEnvelope/> ouremail@gmail.com</p>
                        <p className="teksFooter"><FaPhoneAlt/> +62 8123 4567 8374</p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        </div>
    )
}

export default Footer;   