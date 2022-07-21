import React,{ useContext } from "react";
import ContextHook from "../ContextHook";
import Book from "../components/Book";
import PropTypes from "prop-types";
const BooksShelf  = ({ heading, type }) => {
    const { books } = useContext(ContextHook);
    const filteredBooks = books.filter(({ shelf }) => shelf === type);
    return (
        <div className="bookshelf"  >
            <h2 className="bookshelf-title">{heading}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {filteredBooks.map(book => (
                        <li key={book.id}><Book book={book} /></li>
                    ))}
                </ol>
            </div>
        </div>
    );
};
BooksShelf.propTypes = {
    type: PropTypes.oneOf(["currentlyReading", "wantToRead", "read"]) && PropTypes.string,
    heading: PropTypes.string
};
export default BooksShelf;

