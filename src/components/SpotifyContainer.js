import React, { useState } from "react";

import { HomePage } from "./HomePage";
import { Footer } from "./Footer";
import { Discover } from "./Discover";
import { Library } from "./Library";

const SpotifyContainer = () => {
  const [pageSelected, setPageSelected] = useState("Home");

  return (
    <div className="spotify-container">
      {pageSelected === "Home" && <HomePage />}
      {pageSelected === "Discover" && <Discover />}
      {pageSelected === "Your Library" && <Library />}
      <Footer pageSelected={pageSelected} setPageSelected={setPageSelected} />
    </div>
  );
};

export default SpotifyContainer;
