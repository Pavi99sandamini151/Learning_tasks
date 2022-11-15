import React from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import coffee from '../assets/coffee.png';
// import {useNavigate} from "react-router-dom";

const Firstpage = () => {
    // const navigate = useNavigate();
    return(
        <Container>
            <Row className='border border-2 border-warning m-0 justify-content-end'>
                <Col className='border border-1 border-success p-0 float-end' xs={2}>

                        <a href={'/login'}>log in</a>

                </Col>
            </Row>
            <Row className='m-0'>
                <Col className='border border-2 border-danger p-0'>
                    <Image src={coffee} width='100%' fluid/>
                </Col>
                <Col className='border border-2 border-primary p-0'>
                    pavi
                </Col>
            </Row>

        </Container>
    );

};

export default Firstpage;