# Book Management Application - Frontend

This is the frontend part of the Book Management Application. It provides a user interface for managing and exploring a collection of books.

## Setup

1. Install Node.js and npm (if not already installed).

2. Install project dependencies:
```
   npm install
```
Running the Client
Start the development server:
```
npm start
```
Access the application at http://localhost:3000.

## Folder Structure
### pages/: Contains the Next.js pages.
### components/: Contains reusable React components.
### styles/: Contains CSS styles for the components.
Features
Home Page:
Display  a list of all books in a card layout.

### Endpoint: GET /
Description: Retrieves a  list of all books.
Search Page:
Allow users to search for books using the title of the book
Use client-side routing for navigation.

Endpoint: POST /search
Description: Searches for books based on title,img, author, publishingYear, description.
Delete Book:
Allow users to delete a book.

Endpoint: DELETE /books/:id
Description: Deletes a book based on its unique ID.
