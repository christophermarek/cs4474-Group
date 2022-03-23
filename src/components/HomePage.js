import React, { useState } from "react";
import { FriendsRecomendations } from "./FriendsRecommendations";

export const HomePage = () => {
  const [friendsReccomendations, setFriendsReccomendations] = useState(false);

  //import images
  const chill_vibes = require("../assets/chill_vibes.png");
  const album_pic_large = require("../assets/album_pic_large.png");

  const recently_played = [
    { name: "Chill Vibes", src: chill_vibes },
    { name: "Running from demons", src: chill_vibes },
    { name: "Fance in Pillow", src: chill_vibes },
    { name: "Welcome to Chillies", src: chill_vibes },
    { name: "Dubstep Yo Mama", src: chill_vibes },
    { name: "I miss her (not)", src: chill_vibes },
  ];

  const rec_played = require("../assets/rec_viewed.svg").default;
  const bell = require("../assets/bell.svg").default;
  const settings = require("../assets/Setting.svg").default;
  const friends = require("../assets/friends.svg").default;

  return (
    <>
      {friendsReccomendations ? (
        <FriendsRecomendations
          setFriendsReccomendations={setFriendsReccomendations}
        />
      ) : (
        <>
          <div className="homepage" id="homepage">
            <div id="background"></div>

            <div id="top">
              <div className="top-greeting">
                <p>Good Morning</p>
              </div>

              <div className="top-icons">
                <img alt="recently played" src={rec_played} />
                <img alt="bell" src={bell} />
                <img alt="settings" src={settings} />
                <img
                  alt="friends"
                  src={friends}
                  onClick={() => setFriendsReccomendations(true)}
                />
              </div>

              {/* <input type='button' onClick={() => setFriendsReccomendations(true)} value='friends' /> */}
            </div>

            <div id="rec_played_grid">
              {recently_played.map((item, index) => (
                <div key={index} id="recently_played_entry">
                  <img
                    className="img-thumb"
                    src={item.src}
                    alt="recently played"
                  />
                  <p className="rec_played_text">{item.name}</p>
                </div>
              ))}
            </div>
            <div id="bottomhome">
              <div>
                <p className="large">Made for you</p>
                <div className="sidebysidealbums">
                  <div className="albumdivleft">
                    <img alt="album thumb" src={album_pic_large} />
                  </div>
                  <div className="albumdivright">
                    <img alt="album thumb" src={album_pic_large} />
                  </div>
                </div>
              </div>
              <div>
                <p className="large">Popular Playlist</p>
                <div className="sidebysidealbums">
                  <div className="albumdivleft">
                    <img alt="album thumb" src={album_pic_large} />
                  </div>
                  <div className="albumdivright">
                    <img alt="album thumb" src={album_pic_large} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
