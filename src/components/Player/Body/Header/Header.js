import { Avatar } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import React from "react";
import { useDataLayerValue } from "../../../DataLayer";
import "./Header.scss";
function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <Search className="icon" />
        <input placeholder="Search for Artists, Songs or Lyrics" type="text" />
      </div>
      <div className="header__right">
        <Avatar
          className="avatar"
          src={user?.images[0]?.url}
          alt={user?.display_name}
        />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
