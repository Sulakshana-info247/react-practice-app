import React from "react";
import MenuList from "./MenuList";

const SideMenus = ({ menus = [] }) => {
  return (
    <div className="treeview-container">
      <MenuList list={menus} />
    </div>
  );
};

export default SideMenus;
