
import React, { useEffect, useState } from "react";
import BookDetails from "./BookDetails";

const DisplayBook = ({books, searchQuery})=>{

  const [selectedBook, setSelectedBook] = useState(null);
  const filteredBooks = books.filter(book =>
    book.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleBookClick = book => {
    setSelectedBook(selectedBook === book ? null : book);
  };


    return (
      <div className="book-display">
         <h1>Books List</h1>
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <div
              className={`book-card ${selectedBook === book ? 'expanded' : ''}`}
              key={book.id}
              onClick={() => handleBookClick(book)}
              onTouchStart={() => handleBookClick(book)}
            >
              <p>{book.volumeInfo.title}</p>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              {selectedBook === book && <BookDetails book={selectedBook} />}
            </div>
          ))
        ) : (
          <p>No books found with the given search query.</p>
        )}
      </div>
      {selectedBook && <BookDetails book={selectedBook} />}
      </div>
    );
  };

export default DisplayBook
