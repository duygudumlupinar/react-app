import React from "react";
import * as MaterialDesign from "react-icons/md";

interface props {
  handleSearchClick: () => void;
}

const Menu = ({ handleSearchClick }: props) => {
  return (
    <div className="menuDiv">
      <button className="icon">
        <MaterialDesign.MdMenu size={40} />
      </button>
      <span className="searchBar">
        <input type="text" className="text" placeholder="Search..."></input>
        <button className="icon" onClick={handleSearchClick}>
          <MaterialDesign.MdSearch size={30} />
        </button>
      </span>
    </div>
  );
};

export default Menu;
