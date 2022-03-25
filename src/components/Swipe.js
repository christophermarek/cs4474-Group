import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

const Swipe = ({ getActiveIndex }) => {
  const gifs = [
    <img
      alt="song preview"
      className="gif"
      src={require("../SpotifyGifs/Abstraction.gif")}
      key={0}
    />,
    <img
      alt="song preview"
      className="gif"
      src={require("../SpotifyGifs/Brainstorm.gif")}
      key={1}
    />,
    <img
      alt="song preview"
      className="gif"
      src={require("../SpotifyGifs/CityLights.gif")}
      key={2}
    />,
    <img
      alt="song preview"
      className="gif"
      src={require("../SpotifyGifs/CityScape.gif")}
      key={3}
    />,
    <img
      alt="song preview"
      className="gif"
      src={require("../SpotifyGifs/Friendship.gif")}
      key={4}
    />,
    <img
      alt="song preview"
      className="gif"
      src={require("../SpotifyGifs/HotAirBalloon.gif")}
      key={5}
    />,
    <img
      alt="song preview"
      className="gif"
      src={require("../SpotifyGifs/MadLips.gif")}
      key={6}
    />,
  ];

  return (
    <Swiper
      direction={"vertical"}
      modules={[Mousewheel]}
      slidesPerView={1}
      mousewheel={true}
      onSlideChange={(swiper) => {
        getActiveIndex(swiper.realIndex);
      }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {gifs.map((item) => {
        return <SwiperSlide>{item}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Swipe;
