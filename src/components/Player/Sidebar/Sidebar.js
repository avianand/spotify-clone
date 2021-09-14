import React from "react";
import "./Sidebar.scss";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
import { useDataLayerValue } from "../../DataLayer";

function Sidebar(props) {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
        className="sidebar_logo"
      />
      <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />
      <br />
      <hr />
      {/* playlists */}
      {playlists?.items?.map((playlist) => {
        return (
          <>
            <SidebarOption title={playlist.name} />
          </>
        );
      })}
    </div>
  );
}

export default Sidebar;
