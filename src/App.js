import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import React, { useState} from "react";
import Spinner from "react-bootstrap/Spinner";
import {search} from "./utils/requestor"


function App() {
  const [query, setQuery] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [loading, setLoading] = useState(false);
  //useEffect trigger for after query State change
  // useEffect(() => {
  //   fetchMovies(query);
  // }, [query]);

  const fetchMovies =  async(query) => {
    let movies =  await search (query)
    console.log (movies)
    setLoading(false);
    setMovieResults(movies);
  };
  const searchOnChange = (element) => {
    setLoading(true);
    const inputValue = element.target.value;
    fetchMovies (inputValue)
    setQuery(inputValue);
  };
  const renderResults = () => {
    return movieResults ? (
      movieResults.map ((elem)=>{return <p>{JSON.stringify (elem)}</p>})
    ) : (
      <p>{""}</p>
    );
  };

  let renderLoading = loading ? <Spinner animation="border" /> : "";

  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <h1 style={{ textAlign: "center" }}>OMDB</h1>
      </Row>
      <Row className="justify-content-md-center">
        <Form>
          <FormControl
            type="text"
            placeholder="Search"
            value={query}
            onChange={searchOnChange}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Row>
      <Row className="justify-content-md-center">
        {renderLoading}
        {renderResults()}
      </Row>
    </React.Fragment>
  );
}

export default App;
