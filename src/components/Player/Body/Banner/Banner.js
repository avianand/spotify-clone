import { DonutSmall } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "../../../DataLayer";
import "./Banner.scss";
function Banner() {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="banner">
      <img src={discover_weekly?.images[0]?.url} alt="" />
      <div className="banner__info">
        <strong>PLAYLIST</strong>
        <h1>{discover_weekly?.name}</h1>
        <p>{discover_weekly?.description}</p>
        <div className="banner__extra_info">
          <b>{discover_weekly?.owner?.display_name}</b>
          <span>•</span>
          <p>{discover_weekly?.followers?.total} Likes</p>
          <span>•</span>
          <p>{discover_weekly?.tracks?.total} Songs</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
