import React, { useState } from "react";
import { Options } from "./modals/Options";
import { Share } from "./modals/Share";

import Swipe from "./Swipe";

export const Discover = () => {
    // This is bad code but i am rushing separate into a hook after or something
    const [currModal, setCurrModal] = useState('');
    const [selSongInfo, setSelSongInfo] = useState(undefined);
    // diff implementation than in Library and Friends page
    const options_modal = (song) => {
        setCurrModal('options')
        setSelSongInfo({ pic: gifs[index], name: titles[index], info: artists[index] })
    }
    const share_modal = (song) => {
        setCurrModal('share')
        setSelSongInfo({ pic: gifs[index], name: titles[index], info: artists[index] })
    }

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
    const gifs = [
        require("../SpotifyGifs/Abstraction.gif"),
        require("../SpotifyGifs/Brainstorm.gif"),
        require("../SpotifyGifs/CityLights.gif"),
        require("../SpotifyGifs/CityScape.gif"),
        require("../SpotifyGifs/Friendship.gif"),
        require("../SpotifyGifs/HotAirBalloon.gif"),
        require("../SpotifyGifs/MadLips.gif")
    ];

    const getActiveIndex = (index) => {
        setIndex(index);
        console.log(index);
    };

    return (
        <>
            {currModal === 'options' && selSongInfo &&
                <Options setCurrModal={setCurrModal} album_picture={selSongInfo.pic} song_name={selSongInfo.name} song_info={selSongInfo.info} />
            }
            {currModal === 'share' && selSongInfo &&
                <Share setCurrModal={setCurrModal} album_picture={selSongInfo.pic} song_name={selSongInfo.name} song_info={selSongInfo.info} />
            }
            <div className="discover">


                {/* can just pass up the gif src instead of rewriting this or copy gifs and redo here*/}
                <Swipe getActiveIndex={getActiveIndex} />
                <div className="discover_body">
                    <div className="discover_bio">
                        <p className="discover_title">{titles[index]}</p>
                        <p className="discover_artist">{artists[index]}</p>
                    </div>
                    <div className="discover_buttons">
                        <img alt="discover icon" src={heart} />
                        <img alt="discover icon" src={share} onClick={() => share_modal()} />
                        <img className="discover icon" alt="ellispse" src={three_dots} onClick={() => options_modal()} />
                    </div>
                </div>
            </div>
        </>
    );
};
