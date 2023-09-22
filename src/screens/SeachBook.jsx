import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBook = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch("https://bookapp2-9ur9.onrender.com/api/books")
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.filter((el) =>
          el.title.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filteredResults);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <Link className="btn btn-light mb-5" to="/">
            Go Back
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaSearch />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Type to search..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
          {results.length > 0 ? (
            <ul className="list-group mt-3">
              {results.map((result) => (
                <li className="list-group-item" key={result._id}>
                  <Link to={`/book/${result._id}`}>
                    <Card.Title as="div" className="product-title">
                      <strong>{result.title}</strong>
                    </Card.Title>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBook;
