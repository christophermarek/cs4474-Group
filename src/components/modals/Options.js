import React, { useState } from "react";

export const Options = ({album_picture, song_name, song_info, setCurrModal}) => {
    
    const options_select = [
        {icon: require('../../assets/heart.svg').default, text: 'Liked'},
        {icon: require('../../assets/heart.svg').default, text: 'Add to Playlist'},
        {icon: require('../../assets/heart.svg').default, text: 'Add to queue'},
        {icon: require('../../assets/heart.svg').default, text: 'Share'},
        {icon: require('../../assets/heart.svg').default, text: 'Go to radio'},
        {icon: require('../../assets/heart.svg').default, text: 'View album'},
    ]

    return (
        <div className="options">
            <div className="options_top">
                <img src={album_picture} alt='album'/>
                <p>{song_name}</p>
                <p>{song_info}</p>
            </div>
            <div className="options_sel">
                {options_select.map((option) => 
                    <div className="option">
                        <img src={option.icon} alt='icon' />
                        <p>{option.text}</p>
                    </div>
                )}
            </div>

            <p id='options_close' onClick={() => setCurrModal('')}>Close</p>
        </div>
    );
};
