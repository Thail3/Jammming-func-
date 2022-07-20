import { useState } from "react";
import Playlist from "../Playlist/Playlist";
import Searchbar from "../Searchbar/Searchbar";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";
import Spotify from "../../utils/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTrack, setPlaylistTrack] = useState([]);

  console.log("App : playlistTrack", playlistTrack);
  // console.log("App : playlistName", playlistName);
  console.log(Spotify.getAccessToken());

  const addTrack = (track) => {
    let tracks = playlistTrack;
    if (tracks.find((saveTrack) => saveTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    setPlaylistTrack((prevTrack) => [...prevTrack]);
  };

  const removeTrack = (track) => {
    let tracks = playlistTrack;
    tracks = tracks.filter((current) => current.id !== track.id);
    setPlaylistTrack(tracks);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = async () => {
    const trackUrls = playlistTrack.map((track) => track.id);

    await Spotify.savePlaylist(playlistName, trackUrls);
    setPlaylistName("New Playlist");
    setPlaylistTrack([]);
  };

  const searchTrack = async (track) => {
    const spotifyTrack = await Spotify.search(track);
    setSearchResults(spotifyTrack);
    console.log(spotifyTrack);
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <Searchbar searchTrack={searchTrack} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} addTrack={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTrack={playlistTrack}
            removeTrack={removeTrack}
            updatePlaylistName={updatePlaylistName}
            savePlaylist={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
