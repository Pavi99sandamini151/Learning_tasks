import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import photo from "../assets/home.png";

const Home = () => {
    return(
        <Container>
            <Row className='border border-2 border-warning m-0 justify-content-end'>
                <Col className='border border-1 border-success p-0 float-end' xs={2}>
                    <a href={'/login'} style={{textDecoration:'none', color:'black'}}>log out</a>
                </Col>
            </Row>
            <Row className='m-0'>
                <Col className='border border-2 border-danger p-0'>
                    <Image src={photo} width='100%' fluid/>
                </Col>
                <Col className='border border-2 border-primary p-0'>
                    pavi
                </Col>
            </Row>
        </Container>
    );
};

export default Home;