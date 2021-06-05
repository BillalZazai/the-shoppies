import React, { useState } from "react";
import { useNominationsList } from "../../context/NominationsContext";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export const Nominations = () => {
  const [show, setShow] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const {
    nominations,
    clearNominations,
    sortNominations,
    getNominationInfo,
    removeNomination,
  } = useNominationsList();
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  let renderNominations =
    nominations.length > 0
      ? nominations.map((movie) => {
          return (
            <ListGroup.Item action key={movie.imdbID} eventKey={movie.imdbID}>
              {`${movie.Title}`}
            </ListGroup.Item>
          );
        })
      : "No nominations";

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body>
          <Container>
            <Row className="justify-content-md-center">
              <h4 style={{ textAlign: "center" }}>{modalInfo?.Title + " "}</h4>
            </Row>
            <Row className="justify-content-md-center">
              <Image rounded src={modalInfo?.Poster + " "} />
            </Row>
            <Row className="justify-content-md-center">
              <h4>{(modalInfo?.Type + " ").toUpperCase()}</h4>
            </Row>
            <Row className="justify-content-md-center">
              <h4>{modalInfo?.Year + " "}</h4>
            </Row>
            <Row className="justify-content-md-center">
              <Button
                variant="danger"
                onClick={() => {
                  if (modalInfo.imdbID) {
                    removeNomination (modalInfo.imdbID)
                    handleClose()
                  }
                }}
              >
                Remove
              </Button>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      <Row className="justify-content-md-center">
        <ListGroup
          onSelect={(event) => {
            console.log({ ...getNominationInfo(event) });
            setModalInfo({ eventID: event, ...getNominationInfo(event) });
            handleShow();
          }}
        >
          {renderNominations}
        </ListGroup>
      </Row>
      <Row className="justify-content-md-center">
        <Button
          variant="danger"
          onClick={() => {
            clearNominations();
          }}
        >
          Clear All
        </Button>
        <Button
          variant="success"
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
