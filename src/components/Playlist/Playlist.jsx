import React from "react";
import Tracklist from "../TrackList/TrackList";

import "./playlist.css";

function Playlist({
  playlistName,
  playlistTrack,
  removeTrack,
  updatePlaylistName,
  savePlaylist,
}) {
  console.log("Playlist : playlistTrack", playlistTrack);
  const handleChangeName = (e) => {
    updatePlaylistName(e.target.value);
  };

  const handleClickSavePlaylist = (e) => {
    savePlaylist();
  };

  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleChangeName} />
      <Tracklist
        tracks={playlistTrack}
        isRemoval={true}
        removeTrack={removeTrack}
      />
      <button className="Playlist-save" onClick={handleClickSavePlaylist}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
