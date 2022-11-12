import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return(
        <Container>
            <Col className="p-0">
                <Row className="m-0 p-2">
                    <h1>Welcome Home</h1>
                </Row>
                <Row className="m-0 p-2">
                    <h3>
                        { location.state.name }
                    </h3>
                </Row>
                <Row className="m-0 p-2">
                    <h2>Your Password is:</h2>
                </Row>
                <Row className="m-0 p-2">
                    <h3>
                        { location.state.password }
                    </h3>
                </Row>
                <Col className="p-0 m-2" xs={5}>
                    <Row className="m-0 p-2">
                        <Button onClick={()=> navigate('/' , )}>Log Out</Button>
                    </Row>
                </Col>

            </Col>
        </Container>
    );
};

export default Home;
