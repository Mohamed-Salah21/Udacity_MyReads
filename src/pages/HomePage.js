import React, { useContext} from "react";
import { Link } from "react-router-dom";
import BooksShelf from "../components/BooksShelf";
import ContextHook from "../ContextHook";
const HomePage: React.FC = () => {
    const { shelves } = useContext(ContextHook);
    return (
        <div className="list-books">
            <div className="list-books-title"  >
                <h1>MyReads</h1>
            </div>
            {shelves.filter(({ type }) => type !== "none").map(({ type, heading }) => (
                <div className="list-books-content" key={type}>
                    <div>
                        < BooksShelf type={type} heading={heading} />
                    </div>
                </div>
            ))}
            <div className="open-search">
                <Link to="/search" >Add a book</Link>
            </div>
        </div>
    );
};
export default HomePage;