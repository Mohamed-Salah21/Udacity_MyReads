import React, { useContext } from "react";
import ContextHook from "../ContextHook";
import PropTypes from "prop-types";
const Book = ({ book }) => {
  const { books } = useContext(ContextHook);
  let correctShelf = "none";
  const { setBooks, BooksAPI, shelves } = useContext(ContextHook);
  const handleChange = (updatedTitle, book) => {
    BooksAPI.update(book, updatedTitle).then(() => {
      book.shelf = updatedTitle;
      setBooks(books => (
        books.filter(curr => curr.id !== book.id).concat(book)
      ))
    })
  };
  book.hasOwnProperty("shelf")
    ? correctShelf = book.shelf
    : books.map(existed => existed.id === book.id ? correctShelf = existed.shelf : null);
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : null})`
          }}
        ></div>
        <div className="book-shelf-changer">
          <select value={correctShelf} onChange={(event) => handleChange(event.target.value, book)}>
            <option disabled >
              Move to...
            </option>
            {shelves.map(({ heading, type }) => (
              <option key={type} value={type} >{correctShelf === type && "✓ "} {heading}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors"  >
        {book.authors && book.authors.map(author => <p key={author} >{author}</p>)}
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired
};
export default Book;