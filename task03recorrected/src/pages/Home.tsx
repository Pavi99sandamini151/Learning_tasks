import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import photo from '../assets/home.png';

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state;
    const x  =JSON.parse(JSON.stringify(user));

    const logout = () => {navigate('/login');}

    return(
        <Container>
            <Row className="m-0 justify-content-end">
                <Col className="p-0 float-end' xs={2}">
                    <button onClick={logout} style={{ border:'none', outline:'none', backgroundColor:'#fff' }}>
                        Log Out
                    </button>
                </Col>
            </Row>
            <Row className="m-0">
                <Col className="p-0">
                    <Image src={photo} width="100%" fluid/>
                </Col>
                <Col className="p-0 mt-4">
                    <h1>Home page</h1>
                    <h2>User Name</h2>
                    {x.name}
                </Col>
            </Row>
        </Container>
    );
}

export default Home;