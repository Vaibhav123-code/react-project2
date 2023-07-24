import React from 'react';

const BookDetails = ({ book }) => {
  return (
    <div className='book-details'>
      <h2>Book Details</h2>
      <div>
        <p>Title: {book.volumeInfo.title}</p>
        <p>Author: {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
        <p>Publisher: {book.volumeInfo.publisher}</p>
        {/* <p>description : {book.volumeInfo.description}</p> */}
      
      </div>
    </div>
  );
};

export default BookDetails;
