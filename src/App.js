import { useState, useEffect } from "react";
import Login from "./components/Login/Login.js";
import Player from "./components/Player/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import "./assets/styles.scss";
import { useDataLayerValue } from "./components/DataLayer.js";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token; //"_" denotes that the variable is temp

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log({ user });
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist("4Ogw0Av7Zlpedzey04qScS").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);

  console.log({ user });
  console.log({ token });
  return (
    <div className="App">
      <header className=""></header>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
