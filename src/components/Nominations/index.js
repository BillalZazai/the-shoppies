import React from "react";
import { useNominationsList } from "../../context/NominationsContext";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export const Nominations = () => {
  const { nominations, clearNominations, sortNominations, removeNomination } = useNominationsList();

  let renderNominations =
    nominations.length > 0
      ? nominations.map((movie) => {
          return (
            <ListGroup.Item action key={movie.imdbID} eventKey= {movie.imdbID}>
              {`${movie.Title} | ${movie.imdbID}`}
              <Button onClick={()=>{removeNomination(movie.Title, movie.Year)}} >Remove</Button>
            </ListGroup.Item>
          );
        })
      : "No nominations";

  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <h1 style={{ textAlign: "center" }}>Nominations</h1>
      </Row>

      <Row className="justify-content-md-center">
        <ListGroup>{renderNominations}</ListGroup>
      </Row>
      <Row className="justify-content-md-center">
        <Button
          variant='danger'
          onClick={() => {
            clearNominations();
          }}
        >
          Clear All
        </Button>
        <Button
          variant='success'
          onClick={() => {
            sortNominations();
          }}
        >
          Sort
        </Button>
      </Row>
    </React.Fragment>
  );
};
