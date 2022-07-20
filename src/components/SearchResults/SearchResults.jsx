import React from "react";
import Tracklist from "../TrackList/TrackList";
import "./searchResults.css";

function SearchResults({ searchResults, addTrack }) {
  console.log("SearchResults : searchResults", searchResults);
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist tracks={searchResults} addTrack={addTrack} isRemoval={false} />
    </div>
  );
}

export default SearchResults;
