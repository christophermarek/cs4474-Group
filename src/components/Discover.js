import React, { useState } from "react";

import Swipe from "./Swipe";

export const Discover = () => {
  const [index, setIndex] = useState(0);

  const heart = require("../assets/heart.svg").default;
  const share = require("../assets/share.svg").default;
  const three_dots = require("../assets/3dots.svg").default;

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

  const getActiveIndex = (index) => {
    setIndex(index);
    console.log(index);
  };

  return (
    <div className="discover">
      <Swipe getActiveIndex={getActiveIndex} />
      <div className="discover_body">
        <div className="discover_bio">
          <p className="discover_title">{titles[index]}</p>
          <p className="discover_artist">{artists[index]}</p>
        </div>
        <div className="discover_buttons">
          <img alt="discover icon" src={heart} />
          <img alt="discover icon" src={share} />
          <img alt="discover icon" src={three_dots} />
        </div>
      </div>
    </div>
  );
};
