import React, { useState } from "react";

export const Discover = () => {
  const [counter, setCounter] = useState(0);

  const heart = require("../assets/heart.svg").default;
  const share = require("../assets/share.svg").default;
  const three_dots = require("../assets/3dots.svg").default;

  const gifs = [
    require("../SpotifyGifs/Abstraction.gif"),
    require("../SpotifyGifs/Brainstorm.gif"),
    require("../SpotifyGifs/CityLights.gif"),
    require("../SpotifyGifs/CityScape.gif"),
    require("../SpotifyGifs/Friendship.gif"),
    require("../SpotifyGifs/HotAirBalloon.gif"),
    require("../SpotifyGifs/MadLips.gif"),
  ];

  const titles = [
    "Maniac",
    "Cool Kids",
    "Live and Learn",
    "Need Me",
    "Brazil",
    "Love Letter",
    "Moods",
  ];

  const artists = [
    "Sound Of Legend",
    "Helion, Alfons, Olympis",
    "Jackboy",
    "JJ",
    "Declan McKenna",
    "Scorey",
    "Scorey",
  ];

  return (
    <div className="discover">
      {/* <input type='button' value='previous' onClick={counter === 0 ? () => setCounter(gifs.length - 1) : () => setCounter(counter - 1)}/>
            <input type='button' value='next' onClick={counter === gifs.length - 1 ? () => setCounter(0) : () => setCounter(counter + 1)}/> */}

      <div className="discover_body">
        <div className="discover_bio">
          <p className="discover_title">{titles[counter]}</p>
          <p className="discover_artist">{artists[counter]}</p>
        </div>
        <div className="discover_buttons">
          <img alt="discover icon" src={heart} />
          <img alt="discover icon" src={share} />
          <img alt="discover icon" src={three_dots} />
        </div>
      </div>

      <img
        alt="song preview"
        className="gif"
        src={gifs[counter]}
        onClick={
          counter === gifs.length - 1
            ? () => setCounter(0)
            : () => setCounter(counter + 1)
        }
      />
    </div>
  );
};
