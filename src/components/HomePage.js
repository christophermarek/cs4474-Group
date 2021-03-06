import React, { useState } from "react";
import { FriendsRecomendations } from "./FriendsRecommendations";
import { motion } from "framer-motion";

export const HomePage = ({ currModal, setCurrModal }) => {
    const [friendsReccomendations, setFriendsReccomendations] = useState(false);

    //import images
    const chill_vibes = require("../assets/plalists/chill_vibes.png");
    const album_pic_large = require("../assets/album_pic_large.png");
    const album_pic_1 = require("../assets/album1.png");
    const album_pic_2 = require("../assets/album2.png");
    const album_pic_3 = require("../assets/album3.png");

    const recently_played = [
        { name: "Chill Vibes", src: chill_vibes },
        { name: "Running from demons", src: require('../assets/plalists/lisa.png') },
        { name: "Fance in Pillow", src: require('../assets/plalists/face.png') },
        { name: "Welcome to Chillies", src: require('../assets/plalists/chillies.png') },
        { name: "Dubstep Yo Mama", src: require('../assets/plalists/dubstep.png') },
        { name: "I miss her (not)", src: require('../assets/plalists/her.png') },
    ];

    const rec_played = require("../assets/rec_viewed.svg").default;
    const bell = require("../assets/bell.svg").default;
    const settings = require("../assets/Setting.svg").default;
    const friends = require("../assets/friends.svg").default;

    return (
        <>
            {friendsReccomendations ? (
                <FriendsRecomendations
                    currModal={currModal} setCurrModal={setCurrModal}
                    setFriendsReccomendations={setFriendsReccomendations}
                />
            ) : (
                <>
                    <div className={"homepage "  + (currModal!== '' ? 'blur' : '')} id="homepage">
                        <div id="background"></div>

                        <div id="top">
                            <div className="top-greeting">
                                <p>Good Morning</p>
                            </div>

                            <div className="top-icons">
                                <motion.div
                                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                >
                                    <img alt="recently played" src={rec_played} />
                                </motion.div>
                                <motion.div
                                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                >
                                    <img alt="bell" src={bell} />
                                </motion.div>
                                <motion.div
                                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                >
                                    <img alt="settings" src={settings} />
                                </motion.div>
                                <motion.div
                                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                >
                                    <img
                                        alt="friends"
                                        src={friends}
                                        onClick={() => setFriendsReccomendations(true)}
                                    />
                                </motion.div>

                            </div>

                            {/* <input type='button' onClick={() => setFriendsReccomendations(true)} value='friends' /> */}
                        </div>

                        <div id="rec_played_grid">
                            {recently_played.map((item, index) => (
                                <motion.div whileTap={{ scale: 0.95 }} key={index} id="recently_played_entry">
                                    <img
                                        className="img-thumb"
                                        src={item.src}
                                        alt="recently played"
                                    />
                                    <p className="rec_played_text">{item.name}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div id="bottomhome">
                            <div>
                                <p className="large">Made for you</p>
                                <div className="sidebysidealbums">
                                    <motion.div whileTap={{ scale: 0.95 }} className="albumdivleft">
                                        <img alt="album thumb" src={album_pic_large} />
                                    </motion.div>
                                    <motion.div whileTap={{ scale: 0.95 }} className="albumdivright">
                                        <img alt="album thumb" src={album_pic_3} />
                                    </motion.div>
                                </div>
                            </div>
                            <div>
                                <p className="large">Popular Playlist</p>
                                <div className="sidebysidealbums">
                                    <motion.div whileTap={{ scale: 0.95 }} className="albumdivleft">
                                        <img alt="album thumb" src={album_pic_2} />
                                    </motion.div>
                                    <motion.div whileTap={{ scale: 0.95 }} className="albumdivright">
                                        <img alt="album thumb" src={album_pic_1} />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
