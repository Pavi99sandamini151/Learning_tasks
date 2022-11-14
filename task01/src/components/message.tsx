import React from "react";
import { Container } from "react-bootstrap";

const Message = (props: { message: String; }) => {
    const message = props.message;
    return(
        <Container>
            {message}
        </Container>
    );
};

export default Message;