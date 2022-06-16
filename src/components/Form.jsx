import { useState} from "react";
import React from "react";


const Form = ( {searchShows} ) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    searchShows(searchValue);
    setSearchValue("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}id="search" className="search">
        <input type="search" placeholder="Search for a title..." value={searchValue} onChange={handleChange}/>
        <div className="searchResults"></div>
      </form>
    </>
  );
}
 
export default Form;