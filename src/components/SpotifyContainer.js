import React, { useState } from "react";

import { HomePage } from "./HomePage";
import { Footer } from "./Footer";
import { Discover } from "./Discover";
import { Library } from "./Library";
import { Options } from "./modals/Options";

const SpotifyContainer = () => {
    const [pageSelected, setPageSelected] = useState("Home");
    const [currModal, setCurrModal] = useState('');

    return (
        <div className="spotify-container">
            {
                currModal === 'options' &&
                <Options />
            }
            {pageSelected === "Home" && <HomePage setCurrModal={setCurrModal}/>}
            {pageSelected === "Discover" && <Discover setCurrModal={setCurrModal}/>}
            {pageSelected === "Your Library" && <Library setCurrModal={setCurrModal}/>}
            <Footer pageSelected={pageSelected} setPageSelected={setPageSelected} />
        </div>
    );
};

export default SpotifyContainer;
