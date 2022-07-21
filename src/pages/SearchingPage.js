import React, { useContext, useState } from "react";
import ContextHook from "../ContextHook";
import Book from "../components/Book";
import { Link } from "react-router-dom";
const SearchingBooks = () => {
  const [input, setInput] = useState("");
  const { BooksAPI, searchedBooks, setSearchedBooks } = useContext(ContextHook);
  const handleSearch = (query) => {
    setInput(query);
    if (query.length > 0) BooksAPI.search(query.trim(), 20).then(res => res ? setSearchedBooks(res) : [])
    else setSearchedBooks([]);
  }
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/"
          className="close-search"
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={input}
            autoFocus
            onChange={event => handleSearch(event.target.value)}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {!input ? <h3>Search for the book you want</h3> : searchedBooks.error
            ? <h3>No results are found for {input} </h3>
            : searchedBooks.map(book => {
              return (
                <li key={book.id} >< Book book={book} /></li>
              )
            })}
        </ol>
      </div>
    </div>
  );
};
export default SearchingBooks;