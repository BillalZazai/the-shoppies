import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Movie = (props) => {


    return (
        <Card text="white" style={{ width: "18rem", margin: "10px" }} className="movie-item" >
            <Card.Img variant="top" src={props.poster} height="380" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{`Type: ${props.type}`}</Card.Text>
                <Card.Text>{props.year}</Card.Text>
                <Button variant="outline-warning" onClick={props.onClick }>Nominate </Button>
            </Card.Body>
        </Card>
    );
};
