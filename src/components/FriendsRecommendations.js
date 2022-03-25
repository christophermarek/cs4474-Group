import React, { useState } from "react";

export const FriendsRecomendations = ({ setFriendsReccomendations }) => {
  const [friendIndex, setFriendIndex] = useState();

  const [friends, setFriends] = useState([
    {
      expanded: false,
      icon: require("../assets/fred.png"),
      name: "Sebastien Godbout",
      song: "Je Suis une Pizza - Charlotte Diamond",
      album: "Quil y ait toujours le soleil",
      crowns: "2,000,000",
      active: true,
      last_active: 0,
    },
    {
      expanded: false,
      icon: require("../assets/spongebob.png"),
      name: "Matthew Stewart",
      song: "Mooo! - Doja Cat",
      album: "Amala (Deluxe Version)",
      crowns: "300",
      active: true,
      last_active: 0,
    },
    {
      expanded: false,
      icon: require("../assets/ninja_turtle.png"),
      name: "Barak Obama",
      song: "Alright - Kendrick Lamar ",
      album: "To Pimp A Butterfly",
      crowns: "270",
      active: true,
      last_active: 0,
    },
    {
      expanded: false,
      icon: require("../assets/dog.png"),
      name: "Amir HaghighatiMaleki",
      song: "Panda - Desiigner",
      album: "Panda",
      crowns: "180",
      active: false,
      last_active: 2,
    },
    {
      expanded: false,
      icon: require("../assets/shrek_gun.png"),
      name: "Shrek",
      song: "All Star - Smash Mouth",
      album: "Youre the Reason Our Kids Are So Ugly",
      crowns: "35",
      active: true,
      last_active: 0,
    },
    {
      expanded: false,
      icon: require("../assets/guy.png"),
      name: "Coronavirus",
      song: "Never Gonna Give You Up - Rick Astley",
      album: "Please, Daddy, Dont Get Drunk This Christmas",
      crowns: "1",
      active: false,
      last_active: 17,
    },
  ]);

  const reccomended = [
    {
      picture: require("../assets/owenwilson.png"),
      title: "WOW",
      description: "Owen Wilson - Midnight",
    },
    {
      picture: require("../assets/ocean.png"),
      title: "Bikini Bottom",
      description: "Yung Squid, lil Star - Pine... ",
    },
    {
      picture: require("../assets/redtree.png"),
      title: "Red Tree",
      description: "Jane Smith - Red Tree",
    },
  ];

  const three_dots = require("../assets/3dots.svg").default;

  const expandFriend = (index) => {
    setFriendIndex(index);
    let friends_copy = [...friends];
    friends_copy[index].expanded = !friends_copy[index].expanded;
    setFriends(friends_copy);
  };

  return (
    <div className="recommendations">
      <div id="background"></div>
      <div className="friend-header lib-greeting">
        <a href="#back" onClick={() => setFriendsReccomendations(false)}>
          <svg
            width="11px"
            height="20px"
            viewBox="0 0 11 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Rounded" transform="translate(-548.000000, -3434.000000)">
                <g
                  id="Navigation"
                  transform="translate(100.000000, 3378.000000)"
                >
                  <g
                    id="-Round-/-Navigation-/-arrow_back_ios"
                    transform="translate(442.000000, 54.000000)"
                  >
                    <g>
                      <polygon
                        id="Path"
                        opacity="0.87"
                        points="0 0 24 0 24 24 0 24"
                      ></polygon>
                      <path
                        d="M16.62,2.99 C16.13,2.5 15.34,2.5 14.85,2.99 L6.54,11.3 C6.15,11.69 6.15,12.32 6.54,12.71 L14.85,21.02 C15.34,21.51 16.13,21.51 16.62,21.02 C17.11,20.53 17.11,19.74 16.62,19.25 L9.38,12 L16.63,4.75 C17.11,4.27 17.11,3.47 16.62,2.99 Z"
                        id="🔹-Icon-Color"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
        <p>Friend's Recommendations</p>
      </div>
      <div className="friends-container">
        {friends.map((item, index) => (
          <div className="friend">
            <div className="friend-thumb">
              <img className="avatar" alt="friend thumb" src={item.icon} />
            </div>
            <div className="friend_listening">
              <p className="friend-title song-title ">{item.name}</p>
              <p className="friend-artist song-artist ">{item.song}</p>
              <div className="icon-div">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="14.5" stroke="#A8A8A8" />
                  <circle cx="15" cy="15" r="3.5" stroke="#B3B3B3" />
                </svg>
                <p className="friend-artist song-artist ">{item.album}</p>
              </div>

              <div className="expandBtn" onClick={() => expandFriend(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-down"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              {friends[index].expanded && (
                <>
                  <p>Recomended:</p>
                  {reccomended.map((rec, index) => (
                    <div className="reccomended_item">
                      <div className="recommend-thumb">
                        <img alt="album thumb" src={rec.picture} />
                      </div>
                      <div className="recommend-body">
                        <div>
                          <p className="friend-artist song-title">
                            {rec.title}
                          </p>
                          <p className="friend-artist song-artist">
                            {rec.description}
                          </p>
                        </div>
                        <div className="options">
                          <img alt="icon thumb" src={three_dots} />
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="friend_stats">
              <p>{item.crowns}</p>
              <svg
                width="24"
                height="18"
                viewBox="0 0 42 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.3475 8.80289C40.3539 8.91738 40.3454 9.03389 40.3164 9.14962L37.7257 19.4163C37.5951 19.9335 37.1272 20.2972 36.5893 20.3L21.0454 20.3778C21.0433 20.3778 21.0415 20.3778 21.0394 20.3778H5.49533C4.95459 20.3778 4.4834 20.0128 4.35277 19.493L1.76212 9.18742C1.73228 9.06858 1.72365 8.9488 1.73119 8.83136C0.728994 8.51853 0 7.5894 0 6.49444C0 5.14344 1.10927 4.04444 2.4729 4.04444C3.83652 4.04444 4.94579 5.14344 4.94579 6.49444C4.94579 7.25527 4.59394 7.93598 4.04299 8.38569L7.28649 11.6234C8.10624 12.4418 9.24377 12.911 10.4075 12.911C11.7836 12.911 13.0955 12.2635 13.9217 11.1788L19.2522 4.18133C18.8044 3.738 18.5271 3.12542 18.5271 2.45C18.5271 1.099 19.6364 0 21 0C22.3636 0 23.4729 1.099 23.4729 2.45C23.4729 3.1052 23.2104 3.69989 22.786 4.13996C22.7874 4.14182 22.7891 4.14338 22.7905 4.1454L28.0824 11.1622C28.9082 12.2573 30.2249 12.9111 31.6049 12.9111C32.7793 12.9111 33.8837 12.458 34.7141 11.6351L37.9781 8.4014C37.4155 7.95185 37.0542 7.2646 37.0542 6.49444C37.0542 5.14344 38.1635 4.04444 39.5271 4.04444C40.8907 4.04444 42 5.14344 42 6.49444C42 7.56016 41.3084 8.46658 40.3475 8.80289ZM37.4729 24.0333C37.4729 23.389 36.9457 22.8667 36.2954 22.8667H5.83557C5.18523 22.8667 4.658 23.389 4.658 24.0333V26.8333C4.658 27.4776 5.18523 28 5.83557 28H36.2954C36.9457 28 37.4729 27.4776 37.4729 26.8333V24.0333Z"
                  fill="#B6B843"
                />
              </svg>

              <svg
                width="14"
                height="18"
                viewBox="0 0 32 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="4" height="34" fill="#C4C4C4" />
                <rect x="7" y="24" width="4" height="10" fill="#C4C4C4" />
                <rect x="14" y="16" width="4" height="18" fill="#C4C4C4" />
                <rect x="21" y="8" width="4" height="26" fill="#C4C4C4" />
                <rect x="28" y="22" width="4" height="12" fill="#C4C4C4" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
