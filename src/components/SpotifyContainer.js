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
            {pageSelected === "Home" && <HomePage currModal={currModal} setCurrModal={setCurrModal}/>}
            {pageSelected === "Discover" && <Discover currModal={currModal} setCurrModal={setCurrModal}/>}
            {pageSelected === "Your Library" && <Library currModal={currModal} setCurrModal={setCurrModal}/>}
            <Footer currModal={currModal} pageSelected={pageSelected} setPageSelected={setPageSelected} />
        </div>
    );
};

export default SpotifyContainer;
