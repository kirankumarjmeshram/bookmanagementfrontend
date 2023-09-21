import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Book = ({book}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/book/${book._id}`}>
            <Card.Img src ={book.img} variant="top" />
        </Link>
        <Card.Body>
            <Link to={`/book/${book._id}`}>
                <Card.Title as="div" className="product-title">
                    <strong>{book.title}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="h3">
               {book.author}
            </Card.Text>
            <Card.Text as="div">
                {book.description}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Book