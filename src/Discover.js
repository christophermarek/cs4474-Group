import React, { useState } from 'react';

export const Discover = ( ) => {

    const [counter, setCounter] = useState(0);


    const heart = require('./assets/heart.svg').default;
    const share = require('./assets/share.svg').default;
    const three_dots = require('./assets/3dots.svg').default;

    const gifs = [
        require('./SpotifyGifs/Abstraction.gif'),
        require('./SpotifyGifs/Brainstorm.gif'),
        require('./SpotifyGifs/CityLights.gif'),
        require('./SpotifyGifs/CityScape.gif'),
        require('./SpotifyGifs/Friendship.gif'),
        require('./SpotifyGifs/HotAirBalloon.gif'),
        require('./SpotifyGifs/MadLips.gif'),
    ]

    return (
        <div className='discover'>
            <input type='button' value='previous' onClick={counter === 0 ? () => setCounter(gifs.length - 1) : () => setCounter(counter - 1)}/>
            <input type='button' value='next' onClick={counter === gifs.length - 1 ? () => setCounter(0) : () => setCounter(counter + 1)}/>

            <div className='discover_buttons'>
                <img src={heart} />
                <img src={share} />
                <img src={three_dots} />
            </div>

            <img src={gifs[counter]}/>

        </div>
    )
}