import React from 'react';
import NavbarTop from "../Components/NavbarTop";
import Footer from "../Components/Footer";
import contoh from '../Components/Gallery/contoh.jpg';
import contoh1 from '../Components/Gallery/contoh1.jpg';
import contoh2 from '../Components/Gallery/contoh2.jpg';
import '../Components/Components.css'
import {Button, Container, Carousel, Card, CardColumns} from 'react-bootstrap';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <NavbarTop/>
            <Carousel>
                <Carousel.Item className="mt-2" active>
                    <img id="image" src={contoh} alt='1'/>
                    <Carousel.Caption>
                        <h3 id="judulGambar">Istana Ratu Boko, Reruntuhan Balairung Para Raja</h3>
                        <p style={{fontFamily: 'Montserrat'}}>Jika berkunjung ke Prambanan, destinasi lain yang sangat sayang untuk dilewatkan adalah Istana Ratu Boko.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="mt-2">
                    <img id="image" src={contoh1} alt='2'/>
                    <Carousel.Caption>
                        <h3 id="judulGambar">Istana Ratu Boko, Reruntuhan Balairung Para Raja</h3>
                        <p style={{fontFamily: 'Montserrat'}}>Jika berkunjung ke Prambanan, destinasi lain yang sangat sayang untuk dilewatkan adalah Istana Ratu Boko.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="mt-2">
                    <img id="image" src={contoh2} alt='3'/>
                    <Carousel.Caption>
                        <h3 id="judulGambar">Istana Ratu Boko, Reruntuhan Balairung Para Raja</h3>
                        <p style={{fontFamily: 'Montserrat'}}>Jika berkunjung ke Prambanan, destinasi lain yang sangat sayang untuk dilewatkan adalah Istana Ratu Boko.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className='my-5'>
                <h2 id="brand">Tempat Wisata Indonesia</h2>
                <CardColumns className='my-3'>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Link id="buttonCard" to="/details">
                                    <Button id="buttonCard" variant='block'>Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Link id="buttonCard" to="/details">
                                    <Button id="buttonCard" variant='block'>Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Link id="buttonCard" to="/details">
                                    <Button id="buttonCard" variant='block'>Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </Container>
            <Footer/>
        </div>
    );
}

export default Dashboard;