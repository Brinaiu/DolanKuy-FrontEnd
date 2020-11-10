import React from 'react';
import '../Components/Components.css'
import NavbarTop from "../Components/NavbarTop";
import Footer from "../Components/Footer";
import contoh from '../Components/Gallery/contoh.jpg';
import contoh1 from '../Components/Gallery/contoh1.jpg';
import contoh2 from '../Components/Gallery/contoh2.jpg';
import map from '../Components/Gallery/map.jpg';
import { FaPhoneAlt, FaTags, FaMapMarkerAlt } from 'react-icons/fa';
import { TiStar } from 'react-icons/ti';
import { BsFillClockFill } from 'react-icons/bs';
import { Badge, ResponsiveEmbed, Container, Image, Row, Col } from 'react-bootstrap';
import axios from "axios";

function Details() {
    React.useEffect(() => {
        axios
          .get("https://ghibliapi.herokuapp.com/films")
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        return () => {};
      }, []);

    return (
        <div>
            <NavbarTop/>
            <div id="container">
                <Image className="mt-2" id="image" src={contoh1} fluid/>
                <div id="textStyle">
                    <Container>
                        <h1>Wisata Taman Sari, Mengkhayalkan Para Putri</h1>
                        <h4 style={{fontWeight: 'bold'}}>4.5<TiStar id="icon"/></h4>
                    </Container>
                </div>
            </div>
            <Container className='my-5'>
                <p id="deskripsi">
                    Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan 
                    dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar 
                    contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak 
                    dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk 
                    menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad,
                    tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan 
                    apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya 
                    lembaran-lembaran Letraset yang menggunakan kalimat-kalimat 
                    dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop 
                    Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.
                </p>
            </Container>
            <Container className='my-5'>
                <h4 id="title">Tags <FaTags style={{fontSize: '16px'}}/></h4>
                <Badge className="mx-1" id="badges" variant="secondary">pantai</Badge>
                <Badge className="mx-1" id="badges" variant="secondary">gunung</Badge>
                <Badge className="mx-1" id="badges" variant="secondary">panas</Badge>
            </Container>
            <Container className='my-5'>
                <h2 id="title">Photos & Videos</h2>
                <Row className="my-3">
                    <Col>
                        <img id="galeri" src={contoh} alt="1"/>
                    </Col>
                    <Col>
                        <img id="galeri" src={contoh1} alt="2"/>
                    </Col>
                    <Col>
                        <img id="galeri" src={contoh2} alt="3"/>
                    </Col>
                </Row>
                <ResponsiveEmbed className="my-5" aspectRatio="21by9">
                    <embed id="video" src="https://www.youtube.com/embed/cFOvDNIe5-8"/>
                </ResponsiveEmbed>
            </Container>
            <Container className='my-5'>
                <Row>
                    <Col className='mt-4'>
                        <h2 id="title">Detail Location</h2>
                    </Col>
                </Row>
                <Image className="mt-3" id="image" src={map} fluid/>
                <Row>
                    <Col className="mt-3">
                        <p style={{fontFamily: 'Roboto'}}><FaMapMarkerAlt/> <strong>Location:</strong> Nginden Intan Timur II No.A2-41, Ngenden Jangkungan, Kec. Sukolilo, Kota SBY, Jawa Timur 60118</p>
                        <p style={{fontFamily: 'Roboto'}}><FaPhoneAlt/> <strong>Contact:</strong> 082345213534</p>
                        <p style={{fontFamily: 'Roboto'}}><BsFillClockFill/> <strong>Open:</strong> 08.00 AM.</p>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default Details;