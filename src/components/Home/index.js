import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { search } from "../../utils/requestor";
import { Movie } from "../Movie";
import _ from "lodash"
import { useNominationsList } from "../../context/NominationsContext";

export function Home() {
  const [query, setQuery] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { nominations, setNominations, doesNominationExist } = useNominationsList();

  const fetchMovies = async (query) => {
    let movies = await search(query);
    console.log(movies);
    movies = _.uniqWith(movies, _.isEqual)
    console.log (movies)
    setLoading(false);
    setMovieResults(movies);
  };
  const searchOnChange = (element) => {
    setLoading(true);
    const inputValue = element.target.value;
    fetchMovies(inputValue);
    setQuery(inputValue);
  };
  const renderResults = () => {
    return movieResults ? (
      movieResults.map((elem) => {
        return (
          <Movie
            title={elem.Title}
            year={elem.Year}
            poster={elem.Poster}
            type={elem.Type}
            onClick={() => {
              if ( doesNominationExist (elem)) {
                console.log (JSON.stringify (elem) + " already exists!")
              }
              else {
                setNominations([...nominations, elem]);
              }


            }}
          />
        );
      })
    ) : (
      <p>{""}</p>
    );
  };

  let renderLoading = loading ? <Spinner animation="border" /> : "";

  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <Form>
          <FormControl
            style={{ borderRadius: "15px", margin: "10px" }}
            type="text"
            placeholder="Search"
            value={query}
            onChange={searchOnChange}
          />
        </Form>
      </Row>
      <Row className="justify-content-md-center">{renderLoading}</Row>
      <Row className="justify-content-md-center">{renderResults()}</Row>
    </React.Fragment>
  );
}
