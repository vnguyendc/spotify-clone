import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Login from "./Login"
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type:'SET_TOKEN',
        token:_token
      })

      // get token
      spotify.setAccessToken(_token) //give spotify api access token

      // get user
      spotify.getMe().then(user => {
        // console.log('🧔', user )

        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      // get playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcDKK9F1D2mc2')
      .then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        }))

    }


  }, []);

  console.log("User >>", user)
  console.log("I have a token >> ", token)

  return <div className="App">{

    token ? <Player spotify={spotify} /> : <Login />

    }
    </div>;
}

export default App;
