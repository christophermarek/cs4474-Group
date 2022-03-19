import React, { useState } from 'react';

export const FriendsRecomendations = ({ setFriendsReccomendations }) => {

    const [friends, setFriends] = useState([
        { expanded: false, icon: require('./assets/fred.png'), name: 'Sebastien Godbout', song: 'Je Suis une Pizza * Charlotte Diamond', album: 'Quil y ait toujours le soleil', crowns: '2,000,000', active: true, last_active: 0 },
        { expanded: false, icon: require('./assets/spongebob.png'), name: 'Matthew Stewart', song: 'Mooo! * Doja Cat', album: 'Amala (Deluxe Version)', crowns: '300', active: true, last_active: 0 },
        { expanded: false, icon: require('./assets/ninja_turtle.png'), name: 'Barak Obama', song: 'Alright * Kendrick Lamar ', album: 'To Pimp A Butterfly', crowns: '270', active: true, last_active: 0 },
        { expanded: false, icon: require('./assets/dog.png'), name: 'Amir HaghighatiMaleki', song: 'Panda * Desiigner', album: 'Panda', crowns: '180', active: false, last_active: 2 },
        { expanded: false, icon: require('./assets/shrek_gun.png'), name: 'Shrek', song: 'All Star * Smash Mouth', album: 'Youre the Reason Our Kids Are So Ugly', crowns: '35', active: true, last_active: 0 },
        { expanded: false, icon: require('./assets/guy.png'), name: 'Coronavirus', song: 'Never Gonna Give You Up * Rick Astley', album: 'Please, Daddy, Dont Get Drunk This Christmas', crowns: '1', active: false, last_active: 17 },
    ]);

    const reccomended = [
        { picture: require('./assets/owenwilson.png'), title: 'WOW', description: 'Owen Wilson * Midnight i...' },
        { picture: require('./assets/ocean.png'), title: 'Bikini Bottom', description: 'Yung Squid, lil Star * Pine... ' },
        { picture: require('./assets/redtree.png'), title: 'Red Tree', description: 'Jane Smith * Red Tree' }

    ]

    const three_dots = require('./assets/3dots.svg').default;

    const expandFriend = (index) => {
        let friends_copy = [...friends];
        friends_copy[index].expanded = !friends_copy[index].expanded;
        setFriends(friends_copy);
    }

    return (
        <>
            <input type='button' value='Back' onClick={() => setFriendsReccomendations(false)} />
            <div>
                {friends.map((item, index) =>
                    <div className='friend'>
                        <img src={item.icon} />
                        <div className='friend_listening'>
                            <p>{item.name}</p>
                            <p>{item.song}</p>
                            <p>{item.album}</p>
                        </div>
                        <div className='friend_stats'>
                            <p>{item.crowns}</p>
                        </div>
                        <input type='button' value='Expand' onClick={() => expandFriend(index)} />
                        {friends[index].expanded &&
                            <>
                                <p>Recomended:</p>
                                {reccomended.map((rec, index) =>
                                    <div className='reccomended_item'>
                                        <img src={rec.picture} />
                                        <p>{rec.title}</p>
                                        <p>{rec.description}</p>
                                        <img src={three_dots} />
                                    </div>

                                )}
                            </>
                        }
                    </div>
                )}
            </div>
        </>
    )

}
