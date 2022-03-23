import React from "react";

import "./PhoneContainer.scss";

const PhoneContainer = (props) => {
  const spotifyView = props.children;

  return (
    <div class="iphone">
      <div class="iphone-top">
        <span class="camera"></span>
        <span class="sensor"></span>
        <span class="speaker"></span>
      </div>
      <div class="top-bar"></div>
      <div class="iphone-screen">{spotifyView}</div>
      <div class="buttons">
        <span class="on-off"></span>
        <span class="sleep"></span>
        <span class="up"></span>
        <span class="down"></span>
      </div>
      <div class="bottom-bar"></div>
      <div class="iphone-bottom">
        <span></span>
      </div>
    </div>
  );
};

export default PhoneContainer;
