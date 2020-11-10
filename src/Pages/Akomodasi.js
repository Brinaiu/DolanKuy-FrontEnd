import React from 'react';
import NavbarTop from "../Components/NavbarTop";
import Footer from "../Components/Footer";
import contoh from '../Components/Gallery/contoh.jpg';
import '../Components/Components.css'
import {Button, Container, Card, CardColumns, CardDeck, Row, Col} from 'react-bootstrap';
import { MdPlace } from 'react-icons/md';
import { MdGrade } from 'react-icons/md';

function ListWisata() {
    return (
        <div>
            <NavbarTop/>
            <Container className='my-5'>
                <Row>
                    <Col className='mt-5'>
                        <h2 id="brand">Kategori</h2>
                    </Col>
                </Row>
                <CardDeck className='my-2'>
                    <Card className='mr-0' id="card">
                        <Card.Img style={{borderRadius: '0%'}} src={contoh} alt="1"/>
                        <Button id="buttonCard1" variant='block'>Kuliner</Button>
                    </Card>
                    <Card className='mr-0' id="card">
                        <Card.Img style={{borderRadius: '0%'}} src={contoh} alt="1"/>
                        <Button id="buttonCard1" variant='block'>Tempat Ibadah</Button>
                    </Card>
                    <Card className='mr-0' id="card">
                        <Card.Img style={{borderRadius: '0%'}} src={contoh} alt="1"/>
                        <Button id="buttonCard1" variant='block'>SPBU</Button>
                    </Card>
                    <Card id="card">
                        <Card.Img style={{borderRadius: '0%'}} src={contoh} alt="1"/>
                        <Button id="buttonCard1" variant='block'>Market</Button>
                    </Card>
                </CardDeck>
            </Container>
            <Container className='my-5'>
                <Row>
                    <Col className='mt-5'>
                        <h2 id="brand">Akomodasi di sekitar Jogjakarta</h2>
                    </Col>
                </Row>
                <Container className="border" id="cardList">
                        <Row>
                        <Col xs={6} md={4}>
                        <img id="imageListCard" src={contoh}></img>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row> <h5>Wisata Taman Sari, Menghayalkan Para Putri</h5> </Row>
                            <Row> <p>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</p></Row>
                            <Row><p id="ratingListCard">4.5<MdGrade color="orange"/></p></Row>
                            <Row>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                        <Button id="mapsCard"><MdPlace/>Patehan,Jogja</Button>    
                        <Button id="detailsButtonCard">Details</Button>
                        </Col>
                    </Row>
                </Container>

                <Container className="border" id="cardList">
                        <Row>
                        <Col xs={6} md={4}>
                        <img id="imageListCard" src={contoh}></img>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row> <h5>Wisata Taman Sari, Menghayalkan Para Putri</h5> </Row>
                            <Row> <p>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</p></Row>
                            <Row><p id="ratingListCard">4.5<MdGrade color="orange"/></p></Row>
                            <Row>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                        <Button id="mapsCard"><MdPlace/>Patehan,Jogja</Button>    
                        <Button id="detailsButtonCard">Details</Button>
                        </Col>
                    </Row>
                </Container>

                <Container className="border" id="cardList">
                        <Row>
                        <Col xs={6} md={4}>
                        <img id="imageListCard" src={contoh}></img>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row> <h5>Wisata Taman Sari, Menghayalkan Para Putri</h5> </Row>
                            <Row> <p>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</p></Row>
                            <Row><p id="ratingListCard">4.5<MdGrade color="orange"/></p></Row>
                            <Row>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                        <Button id="mapsCard"><MdPlace/>Patehan,Jogja</Button>    
                        <Button id="detailsButtonCard">Details</Button>
                        </Col>
                    </Row>
                </Container>

                <Container className="border" id="cardList" >
                        <Row>
                        <Col xs={6} md={4}>
                        <img id="imageListCard" src={contoh}></img>
                        </Col>
                        <Col xs={6} md={4} >
                            <Row> <h5>Wisata Taman Sari, Menghayalkan Para Putri</h5> </Row>
                            <Row> <p>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</p></Row>
                            <Row><p id="ratingListCard">4.5<MdGrade color="orange"/></p></Row>
                            <Row>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                        <Button id="mapsCard"><MdPlace/>Patehan,Jogja</Button>    
                        <Button id="detailsButtonCard">Details</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer/>
        </div>
    );
}

export default ListWisata;