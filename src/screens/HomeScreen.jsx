import { useEffect, useState } from 'react';
import axios from 'axios'
import {Row, Col} from 'react-bootstrap';
import Book from '../components/Book';

const HomeScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    const fetchBooks = async ()=>{
      const {data} = await axios.get('https://bookapp2-9ur9.onrender.com/api/books');
      setBooks(data);
    };
    fetchBooks();
  },[])

  return (
    <>
        <h1>Books</h1>
        <Row>
            {books.map((book)=>(
                <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
                    <Book book={book}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen