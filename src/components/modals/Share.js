import React, { useState } from "react";

export const Share = ({album_picture, song_name, song_info, setCurrModal}) => {
    
    const share_select = [
        {icon: '../../assets/heart.svg', text: 'Liked'},
        {icon: '../../assets/heart.svg', text: 'Add to Playlist'},
        {icon: '../../assets/heart.svg', text: 'Add to queue'},
        {icon: '../../assets/heart.svg', text: 'Share'},
        {icon: '../../assets/heart.svg', text: 'Go to radio'},
        {icon: '../../assets/heart.svg', text: 'View album'},
    ]

    return (
        <div className="options">
            <p>SHARE</p>

            <div className="options_top">
                <img src={album_picture} alt='album'/>
                <p>{song_name}</p>
                <p>{song_info}</p>
            </div>
            <div className="options_sel">
                <p>SHARE</p>
                {share_select.map((option) => 
                    <div className="option">
                        <img src={option.icon} alt='icon' />
                        <p>{option.text}</p>
                    </div>
                )}
            </div>

            <p id='share_close' onClick={() => setCurrModal('')}>Close</p>
        </div>
    );
};
