import React from "react";
import "./track.css";

function Track({ track, isRemoval, addTrack, removeTrack }) {
  console.log("Track : track", track);
  const renderAction = () => {
    return isRemoval ? (
      <button className="Track-action" onClick={() => removeTrack(track)}>
        -
      </button>
    ) : (
      <button className="Track-action" onClick={() => addTrack(track)}>
        +
      </button>
    );
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
