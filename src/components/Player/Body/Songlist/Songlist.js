import {
  Favorite,
  MoreHoriz,
  PlayCircleFilled,
  PlayCircleFilledWhite,
} from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "../../../DataLayer";
import "./Songlist.scss";
import Songrow from "./Songrow/Songrow";
function Songlist() {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="songlist">
      <div className="songlist__likebutton">
        <PlayCircleFilledWhite fontSize="large" className="icon play" />
        <Favorite className="icon favorite" />
        <MoreHoriz className="icon more" />
      </div>
      <div className="songlist__list">
        {discover_weekly?.tracks?.items.map((item) => {
          return <Songrow track={item.track} />;
        })}
      </div>
    </div>
  );
}

export default Songlist;
