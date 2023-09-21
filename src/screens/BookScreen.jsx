import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import axios from "axios";

const ProductScreen = () => {
  const [book, setBook] = useState([]);
  const { id: bookId } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const { data } = await axios.get(`https://bookapp2-9ur9.onrender.com/api/books/${bookId}`);
      setBook(data);
    };
    fetchBook();
  }, [bookId]);

  function deleteBook(id){
    fetch(`/api/books/${bookId}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((response)=>{
        window.location.href = '/';
      })
    })
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={book.img} alt={book.title} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{book.title}</h3>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>Author: {book.author}</ListGroup.Item>
            <ListGroup.Item>
              Publication Year: {book.publicationYear}
            </ListGroup.Item>
            <ListGroup.Item>Description: {book.description}</ListGroup.Item>
            <ListGroup.Item>
                <Row>
                  <Col>isbn: </Col>
                  <Col>{book.isbn}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <Button className="btn-block" type="buttom" onClick={(e)=>{deleteBook(book?._id)}}>
                      Delete
                    </Button>
                  </Col>
                  {/* <Col>
                    <Button className="btn-block" type="buttom">
                      Update
                    </Button>
                  </Col> */}
                </Row>
              </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
