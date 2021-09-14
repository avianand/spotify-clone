import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./Player.scss";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";

function Player({ spotify }) {
  return (
    <>
      <div className="player">
        <div className="player__body">
          <Sidebar />
          <Body spotify={spotify} />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Player;
