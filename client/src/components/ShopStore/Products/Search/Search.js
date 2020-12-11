import React from "react";

import Rate from "../Rate/Rate";

import "./Search.css";


const Search = ({ setSearchInput, searchRate, setSearchRate}) => {


  return (

    <div className="searchBar">

      <input

        type="text"

        placeholder="Please enter the product name"

        onChange={(e) => setSearchInput(e.target.value)}

      />

      
      <div className="searchByrate">
       <Rate rating={searchRate} setSearchRate={setSearchRate}/> 
       </div>
    </div>

  );

};



export default Search;