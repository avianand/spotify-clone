import { Slider } from "@material-ui/core";
import {
  AspectRatio,
  Devices,
  Favorite,
  PlayCircleFilled,
  PlayCircleOutline,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
  VolumeMute,
  VolumeOff,
} from "@material-ui/icons";
import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__left__albumart"
          src="https://upload.wikimedia.org/wikipedia/en/7/77/Maroon_5_-_Overexposed.png"
          alt="Maroon 5"
        />

        <div className="footer__left__songinfo">
          <h4>Maps</h4>
          <p>Maroon 5</p>
        </div>
        <Favorite className="icon" fontSize="small" />
        <AspectRatio className="icon" fontSize="small" />
      </div>
      <div className="footer__center">
        <Shuffle className="icon green" />
        <SkipPrevious className="icon" />
        <PlayCircleFilled className="icon play" fontSize="large" />
        <SkipNext className="icon" />
        <Repeat className="icon green" />
      </div>
      <div className="footer__right">
        <PlaylistPlay className="icon" />
        <Devices className="icon" />

        {true ? (
          <VolumeDown className="icon" />
        ) : (
          <VolumeOff className="icon" />
        )}
        <Slider className="icon slider" />
      </div>
    </div>
  );
}

export default Footer;
