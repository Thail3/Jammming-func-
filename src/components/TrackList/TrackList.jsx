import React from "react";
import Track from "../Track/Track";
import "./tracklist.css";

function Tracklist({ tracks, addTrack, isRemoval, removeTrack }) {
  console.log("Tracklist : tracks", tracks);

  return (
    <div className="TrackList">
      {tracks?.map((track) => {
        return (
          <Track
            key={track.id}
            track={track}
            addTrack={addTrack}
            isRemoval={isRemoval}
            removeTrack={removeTrack}
          />
        );
      })}
    </div>
  );
}

export default Tracklist;
