import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;
  const userDetails = JSON.parse(JSON.stringify(user));

  const logout = () => {
    navigate("/");
  };

  return (
    <Container>
      <Row className="m-0 justify-content-end">
        <Col className="p-0 float-end' xs={2}">
          <button
            style={{
              width: 150,
              padding: 5,
              borderRadius: 7,
              backgroundColor: "#ff735f",
            }}
            onClick={logout}
          >
            Log Out
          </button>
        </Col>
      </Row>
      <Row className="m-0">
        <Col className="p-0"></Col>
        <Col className="p-0 mt-4">
          <h1>Home page</h1>
          <h2>User Name</h2>
          {userDetails.name}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
