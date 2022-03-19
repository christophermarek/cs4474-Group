import React, { useState } from 'react';
import { FriendsRecomendations } from './FriendsRecommendations';

export const HomePage = () => {

    const [friendsReccomendations, setFriendsReccomendations] = useState(false);

    //import images
    const chill_vibes = require('./assets/chill_vibes.png')
    const album_pic_large = require('./assets/album_pic_large.png')

    const recently_played = [
        { name: 'Chill Vibes', src: chill_vibes },
        { name: 'Running from demons', src: chill_vibes },
        { name: 'Fance in Pillow', src: chill_vibes },
        { name: 'Welcome to Chillies', src: chill_vibes },
        { name: 'Dubsep Yo Mama', src: chill_vibes },
        { name: 'I miss her (not)', src: chill_vibes },
    ]

    return (
        <>
            {friendsReccomendations ?

                (
                    <FriendsRecomendations setFriendsReccomendations={setFriendsReccomendations}/>
                )
                :
                (
                    <>
                        <p>Good Morning</p>
                        <input type='button' onClick={() => setFriendsReccomendations(true)} value='friends' />

                        <div id='rec_played_grid'>
                            {recently_played.map((item, index) =>
                                <div key={index} id='recently_played_entry'>
                                    <img src={item.src} alt='recently played' />
                                    <p>{item.name}</p>
                                </div>
                            )}
                        </div>

                        <p>Made for you</p>
                        <div className='sidebysidealbums'>
                            <img src={album_pic_large} />
                            <img src={album_pic_large} />
                        </div>
                        <p>Popular Playlist</p>
                        <div className='sidebysidealbums'>
                            <img src={album_pic_large} />
                            <img src={album_pic_large} />
                        </div>
                    </>

                )
            }

        </>
    )

}
