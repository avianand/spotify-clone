import React from "react";
import Banner from "./Banner/Banner";
import "./Body.scss";
import Header from "./Header/Header";
import Songlist from "./Songlist/Songlist";
function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <Banner />
      <br />
      <hr />
      <Songlist />
    </div>
  );
}

export default Body;
