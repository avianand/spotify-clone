import { PlayArrow } from "@material-ui/icons";
import React from "react";
import "./Songrow.scss";

function Songrow({ track }) {
  return (
    <div className="songrow">
      <PlayArrow className="play" />
      <img src={track.album.images[0].url} alt={track.album.name} />
      <div className="songrow__info">
        <h4>{track.name}</h4>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} •{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default Songrow;
