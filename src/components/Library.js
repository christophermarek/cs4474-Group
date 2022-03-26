import React, { useState } from "react";
import { Options } from "./modals/Options";

export const Library = () => {
    // This is bad code but i am rushing separate into a hook after or something
    const [currModal, setCurrModal] = useState('');
    const [selSongInfo, setSelSongInfo] = useState(undefined);

    const options_modal = (song) => {
        setCurrModal('options')
        setSelSongInfo({ pic:song.picture, name: song.title, info: song.description})
    }

    const genres = ["Pop", "Alternative hip hop", "Happy", "Rock", "Aggressive"];

    const liked = [
        {
            picture: require("../assets/owenwilson.png"),
            title: "WOW",
            description: "Owen Wilson",
        },
        {
            picture: require("../assets/ocean.png"),
            title: "Bikini Bottom",
            description: "Yung Squid, lil Star",
        },
        {
            picture: require("../assets/redtree.png"),
            title: "Red Tree",
            description: "Jane Smith, Red Tree",
        },
        {
            picture: require("../assets/valleys.png"),
            title: "Valleys",
            description: "Yung Christ, Sunshine ",
        },
        {
            picture: require("../assets/space_train.png"),
            title: "Space Train",
            description: "Makebelive, Imagination ",
        },
        {
            picture: require("../assets/emoji.png"),
            title: "Emoji",
            description: "Sebastien Godbout",
        },
    ];
    const heart = require("../assets/heart.svg").default;
    const three_dots = require("../assets/3dots.svg").default;

    return (
        <div className="library">
            <div id="background"></div>

            <div className="lib_header">
                <div className="like-top">
                    <div className="words">
                        <div className="lib-greeting">
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
                                    <g
                                        id="Rounded"
                                        transform="translate(-548.000000, -3434.000000)"
                                    >
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
                            <p>Liked Songs</p>
                        </div>
                        <p className="lib-sub">2,338 songs</p>
                        <span className="download">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-arrow-down-circle"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="8 12 12 16 16 12"></polyline>
                                <line x1="12" y1="8" x2="12" y2="16"></line>
                            </svg>
                        </span>
                    </div>
                    <div className="play-button">
                        <span className="btn-play">
                            <svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 20 20"
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
                                    <g
                                        id="Rounded"
                                        transform="translate(-782.000000, -952.000000)"
                                    >
                                        <g id="AV" transform="translate(100.000000, 852.000000)">
                                            <g
                                                id="-Round-/-AV-/-play_circle_filled"
                                                transform="translate(680.000000, 98.000000)"
                                            >
                                                <g>
                                                    <rect
                                                        id="Rectangle-Copy-65"
                                                        x="0"
                                                        y="0"
                                                        width="24"
                                                        height="24"
                                                    ></rect>
                                                    <path
                                                        d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M10,15.5 L10,8.5 C10,8.09 10.47,7.85 10.8,8.1 L15.47,11.6 C15.74,11.8 15.74,12.2 15.47,12.4 L10.8,15.9 C10.47,16.15 10,15.91 10,15.5 Z"
                                                        id="🔹Icon-Color"
                                                        fill="#1db954"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </div>
                </div>
                <div id="genres">
                    {genres.map((item, index) => (
                        <p className="genre">{item}</p>
                    ))}
                </div>
            </div>

            <div className="add_song">
                <div className="add">
                    <p>+</p>
                </div>
                <div className="add_text">
                    <p>Add Songs</p>
                </div>
            </div>

            <div className="likes">
                {currModal === 'options' && selSongInfo &&
                    <Options setCurrModal={setCurrModal} album_picture={selSongInfo.pic} song_name={selSongInfo.name} song_info={selSongInfo.info}/>
                }
                {liked.map((item, index) => (
                    <div className="liked">
                        <div className="song-info">
                            <div className="song-thumb">
                                <img alt="song thumb" src={item.picture} />
                            </div>

                            <div className="song-desc">
                                <p className="song-title">{item.title}</p>
                                <p className="song-artist">{item.description}</p>
                            </div>
                        </div>

                        <div className="likes-icons">
                            <div className="likes-icon">
                                <img className="icon-heart" alt="heart thumb" src={heart} />
                            </div>
                            <div className="likes-icon">
                                <img className="icon-dots" alt="ellispse" src={three_dots} onClick={() => options_modal(item)}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
