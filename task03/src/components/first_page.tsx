import React from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import coffee from '../assets/coffee.png';

const Firstpage = () => {

    return(
        <Container>
            <Row className='m-0 justify-content-end'>
                <Col className='p-0 float-end' xs={2}>
                        <a href={'/login'} style={{textDecoration:'none', color:'black'}}>log in</a>
                </Col>
            </Row>
            <Row className='m-0'>
                <Col className='p-0'>
                    <Image src={coffee} width='100%' fluid/>
                </Col>
                <Col className='p-0 mt-5'>
                    <h1>Initial page</h1>
                </Col>
            </Row>

        </Container>
    );

};

export default Firstpage;