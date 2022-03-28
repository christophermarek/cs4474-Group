import React, { useState } from "react";
import { motion } from "framer-motion";

const share_select = [
  {
    icon: require("../../assets/share_profiles/pp1.png"),
    text: "Hugh Campbell",
  },
  {
    icon: require("../../assets/share_profiles/pp2.png"),
    text: "Kait Bananana",
  },
  {
    icon: require("../../assets/share_profiles/pp3.png"),
    text: "Yerma Willdo",
  },
  { icon: require("../../assets/share_profiles/pp4.png"), text: "Gabe Barr" },
];

const share_buttons = [
  {
    icon: require("../../assets/share_buttons/copy.svg").default,
    text: "Copy Link",
  },
  {
    icon: require("../../assets/share_buttons/snap.svg").default,
    text: "Snapchat",
  },
  {
    icon: require("../../assets/share_buttons/messages.svg").default,
    text: "Messages",
  },
  {
    icon: require("../../assets/share_buttons/instagram.svg").default,
    text: "Instagram",
  },
  {
    icon: require("../../assets/share_buttons/facebook.svg").default,
    text: "Facebook",
  },
  {
    icon: require("../../assets/share_buttons/whatsapp.svg").default,
    text: "WhatsApp",
  },
  {
    icon: require("../../assets/share_buttons/twitter.svg").default,
    text: "Twitter",
  },
  {
    icon: require("../../assets/share_buttons/more.svg").default,
    text: "More",
  },
];

const Select = ({ pic, name }) => {
  return (
    <div className="share_friends">
      <div className="share_picandname">
        <img src={pic} />
        <p>{name}</p>
      </div>

      <input className="share_check" type="checkbox" />
    </div>
  );
};

const ShareButtons = () => {
  return (
    <>
      {share_buttons.map((item) => (
        <motion.div whileTap={{ scale: 0.8 }} className="button_container">
          <img src={item.icon} />
          <p>{item.text}</p>
        </motion.div>
      ))}
    </>
  );
};

export const Share = ({
  album_picture,
  song_name,
  song_info,
  setCurrModal,
}) => {
  return (
    <div className="options">
      <div className="share_top">
        <img src={album_picture} alt="album" />
        <div>
          <p>{song_name}</p>
          <p>{song_info}</p>
        </div>
      </div>
      <div className="options_sel">
        {share_select.map((option, index) => (
          <Select pic={option.icon} name={option.text} />
        ))}
      </div>
      <div className="share_buttons">
        <ShareButtons />
      </div>
      <motion.div whileTap={{ scale: 0.8 }} className="center">
        <input type="button" value="Share" className="sharebutton" />
      </motion.div>
      <motion.div whileTap={{ scale: 0.8 }} className="center">
        <p id="options_close" onClick={() => setCurrModal("")}>
          Close
        </p>
      </motion.div>
    </div>
  );
};
