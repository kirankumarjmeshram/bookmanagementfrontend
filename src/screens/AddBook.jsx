import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [isbn, setIsbn] = useState("");
  const [description, setDescription] = useState("");

  const handleOnSubmit = async (e) => {
    let result = await fetch('https://bookapp2-9ur9.onrender.com/api/books', {
      method: "post",
      body: JSON.stringify({
        title,
        img,
        author,
        publicationYear,
        isbn,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      
    }
    );

    result = await result.json();
    console.warn(result);
    if (result) {
      //alert("Data saved succesfully");
      setTitle("");
      setImg("");
      setAuthor("");
      setPublicationYear("");
      setIsbn("");
      setDescription("");
      window.location.href = '/';
    }
  };

  return (
    <>
      <Link className="btn btn-light" to="/">
        Go Back
      </Link>
      <Form>
        <Form.Group>
          <Form.Label>Title of the book</Form.Label>
          <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)}  type="text" placeholder="title of the book" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image link</Form.Label>
          <Form.Control value={img} onChange={(e)=>setImg(e.target.value)} type="text" placeholder="Image link" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control value={author} onChange={(e)=>setAuthor(e.target.value)} type="text" placeholder="Author of the book" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Publication Year</Form.Label>
          <Form.Control value={publicationYear} onChange={(e)=>setPublicationYear(e.target.value)} type="text" placeholder="Publication year" />
        </Form.Group>
        <Form.Group>
          <Form.Label>isbn</Form.Label>
          <Form.Control value={isbn} onChange={(e)=>setIsbn(e.target.value)} type="text" placeholder="isbn" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Description" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleOnSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddBook;
