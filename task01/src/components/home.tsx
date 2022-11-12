import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Button, Col, Container, Row} from "react-bootstrap";

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return(
        <Container>
            <Col>
                <Row>
                    <h1>Welcome Home</h1>
                </Row>
                <Row>
                    { location.state.name }
                </Row>
                <Row>
                    <h2>Your Password is:</h2>
                </Row>
                <Row>
                    { location.state.password }
                </Row>
                <Col className="border border-2 border-red" xs={5}>
                    <Row className="xs">
                        <Button onClick={()=> navigate('/' , )}>Log Out</Button>
                    </Row>
                </Col>

            </Col>
        </Container>
    );
};

export default Home;