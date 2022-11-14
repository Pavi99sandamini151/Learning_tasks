import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Message = (props: { message: String; }) => {
    const message = props.message;

    return(
        <Container className="p-2 m-2">
            <Col className="p-0">
                <Row className="m-0 p-2" style={{ color:'red', borderRadius:5,}}>
                    {message}
                </Row>
            </Col>
        </Container>
    );
};

export default Message;