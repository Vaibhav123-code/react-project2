import React, { useEffect, useState } from "react";
import DisplayBook from "./Component/DisplayBook"
import SearchBook from "./Component/SearchBook"


const App = ()=>{

  let [books,setBooks] = useState([])
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    
    const fetchBooks = async () => {
      try {
        // Fetch data for "Harry Potter" books
        const harryPotterResponse = await fetch(
          'https://www.googleapis.com/books/v1/volumes?q=harry+potter'
        );
        const harryPotterData = await harryPotterResponse.json();

        // Fetch data for "Sherlock Holmes" books
        const sherlockHolmesResponse = await fetch(
          'https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes'
        );
        const sherlockHolmesData = await sherlockHolmesResponse.json();

        // Combine and store the data from both API calls
        const combinedBooksData = [
          ...harryPotterData.items,
          ...sherlockHolmesData.items,
        ];
        setBooks(combinedBooksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = query => {
    setSearchQuery(query);
  };

  return(
    <div>
  <SearchBook  onSearch={handleSearch}/>
  <DisplayBook books={books} searchQuery={searchQuery} />
  
 
  </div>
  )
  
}

export default App;
