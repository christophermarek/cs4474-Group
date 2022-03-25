import React from "react";
import "./App.css";

import SpotifyContainer from "./components/SpotifyContainer";
import PhoneContainer from "./components/PhoneContainer";

function App() {
  return (
    <div className="App">
      <PhoneContainer>
        <SpotifyContainer />
      </PhoneContainer>
    </div>
  );
}

export default App;
