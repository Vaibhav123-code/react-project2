import React, { useState , useEffect} from "react";

const SearchBook = ({onSearch})=>{

    const [searchQuery, setSearchQuery] = useState('');
   
    const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      
      <div className="book-search">
        <input
          type="text"
          placeholder="Search book by title..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
    
}
export default SearchBook


