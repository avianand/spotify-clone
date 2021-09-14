import React from "react";

function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebar_option">
      {Icon ? (
        <>
          <Icon className="sidebar_option__icon" />
          <h4>{title}</h4>
        </>
      ) : (
        <p>{title}</p>
      )}
    </div>
  );
}

export default SidebarOption;
