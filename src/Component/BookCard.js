import React, { useState } from "react";

const BookCard = (book)=>{

    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
      setShowDetails((prevState) => !prevState);
    };
    return(
        
        <div className="book-card" onClick={toggleDetails}>
        <h2>{book.volumeInfo.title}</h2>
        <p>Authors: {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
        { 
        showDetails && (
          <div className="book-details">
            <p>Publisher: {book.volumeInfo.publisher}</p>
            <p>Published Date: {book.volumeInfo.publishedDate}</p>
            <p>Description: {book.volumeInfo.description}</p>
          </div>
        )}
      </div>
    )
}

export default BookCard 