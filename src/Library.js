import React, { useState } from 'react';

export const Library = () => {

    const genres = ['Pop', 'Alternative hip hop', 'Happy', 'Rock', 'Aggressive']

    const liked = [
        { picture: require('./assets/owenwilson.png'), title: 'WOW', description: 'Owen Wilson * Midnight i...' },
        { picture: require('./assets/ocean.png'), title: 'Bikini Bottom', description: 'Yung Squid, lil Star * Pine... ' },
        { picture: require('./assets/redtree.png'), title: 'Red Tree', description: 'Jane Smith * Red Tree' },
        { picture: require('./assets/valleys.png'), title: 'Valleys', description: 'Yung Christ * Sunshine ' },
        { picture: require('./assets/space_train.png'), title: 'Space Train', description: 'Makebelive, Imagination... ' },
        { picture: require('./assets/emoji.png'), title: 'Emoji', description: 'Sebastien Godbout * CS4474' }
    ]
    const heart = require('./assets/heart.svg').default;
    const three_dots = require('./assets/3dots.svg').default;


    return (
        <>
            <div id='lib_header'>
                <p>Liked Songs</p>
                <p>2,338 songs</p>
                <div id='genres'>
                    {genres.map((item, index) =>
                        <p className='genre'>{item}</p>
                    )}
                </div>
            </div>

            <div id='add_song'>
                <div id='add'><p>+</p></div>
                <p>Add Songs</p>
            </div>

            <div className='likes'>
                {liked.map((item, index) =>
                    <div className='liked'>
                        <img src={item.picture} />
                        <div id='info'>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                         </div>
                         <img src={heart} />
                         <img src={three_dots} />
                    </div>
                )}
            </div>
        </>
    )
}