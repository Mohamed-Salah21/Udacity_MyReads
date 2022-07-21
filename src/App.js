import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import SearchingBooks from "./pages/SearchingPage";
import shelves from "./components/shelves";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ContextHook from "./ContextHook";
const App = () => {
  const [books, setBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll()
      .then((res) => setBooks(res))
      .catch((err) => alert(err));
  }, []);
  return (
    <ContextHook.Provider
      value={{
        shelves,
        books,
        setBooks,
        BooksAPI,
        searchedBooks,
        setSearchedBooks,
      }}
    >
      <div className="app">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/search" element={<SearchingBooks />} />
        </Routes>
      </div>
    </ContextHook.Provider>
  );
};
export default App;
