import React from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
    const location = useLocation();
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
            </Col>
        </Container>
    );
};

export default Home;