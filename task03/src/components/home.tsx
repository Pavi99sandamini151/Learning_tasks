import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import photo from "../assets/home.png";

const Home = () => {
    return(
        <Container>
            <Row className='border border-2 border-warning m-0'>
                <Col className='border border-1 border-light p-0' xs={5}>A</Col>
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