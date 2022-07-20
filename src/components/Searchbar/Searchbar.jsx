import React, { useState } from "react";
import "./searchbar.css";

function Searchbar({ searchTrack }) {
  // const [term, setTerm] = useState("");

  const handleChange = (e) => {
    searchTrack(e.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleChange}
      />
      <button className="SearchButton">SEARCH</button>
    </div>
  );
}

export default Searchbar;
