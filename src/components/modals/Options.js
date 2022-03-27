import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "../Heart";

export const Options = ({ album_picture, song_name, song_info, setCurrModal }) => {
    const [selected, setSelected] = useState(false);
    const heart_filled = require("../../assets/heart_filled.svg").default;

    const options_select = [
        { icon: require('../../assets/heart.svg').default, text: 'Liked' },
        { icon: require('../../assets/options_buttons/playlist.svg').default, text: 'Add to Playlist' },
        { icon: require('../../assets/options_buttons/queue.svg').default, text: 'Add to queue' },
        { icon: require('../../assets/options_buttons/share.svg').default, text: 'Share' },
        { icon: require('../../assets/options_buttons/radio.svg').default, text: 'Go to radio' },
        { icon: require('../../assets/options_buttons/album.svg').default, text: 'View album' },
    ]

    return (
        <div className="options">
            <div className="options_top">
                <img src={album_picture} alt='album' />
                <p>{song_name}</p>
                <p>{song_info}</p>
            </div>
            <div className="options_sel">
                {options_select.map((option) => 
                    <>
                        {option.text === 'Liked' ?
                            (
                                <motion.div whileTap={{ scale: 0.95 }} className="option">
                                    <img onClick={() => setSelected(!selected)} alt="heart thumb" src={selected === false ? (option.icon) : (heart_filled)} />
                                    <p>{option.text}</p>
                                </motion.div>
                            )
                            :
                            (
                                <motion.div whileTap={{ scale: 0.95 }} className="option">

                                    <img src={option.icon} alt='icon' />
                                    <p>{option.text}</p>
                                </motion.div>
                            )}
                    </>
                )}
            </div>

            <p id='options_close' onClick={() => setCurrModal('')}>Close</p>
        </div>
    );
};
