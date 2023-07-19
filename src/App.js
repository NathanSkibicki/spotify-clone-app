import Login from './Login';
import './App.css';
import React, {useEffect, useState  } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

//super variable used to communicate w spotify
const spotify = new SpotifyWebApi();

function App() {

  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(()=> {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;  

    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //gives access token to the api
      spotify.setAccessToken(_token);
      //grabs the token
      spotify.getMe().then((user) =>{
        console.log(user);
        dispatch({
          type: 'SET_USER', 
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
    }
  }, []);

  return (
    //reads and checks if there is a token read (meaning user is logged in)
    <div className="app">
      {
        token ? (
          <Player spotify = {spotify}/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
