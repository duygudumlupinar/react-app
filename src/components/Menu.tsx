import React from "react";
import * as MaterialDesign from "react-icons/md";
import logo from "../resources/Logo.png";

interface props {
  handleSearchClick: () => void;
}

const Menu = ({ handleSearchClick }: props) => {
  return (
    <div className="menuDiv">
      <span>
        <button className="icon">
          <MaterialDesign.MdMenu size={40} />
        </button>
        <img className="logoImg" src={logo}></img>
      </span>
      <span>
        <button className="menuItems">Categories</button>
      </span>
      <span>
        <button className="menuItems">About Us</button>
      </span>
      <span>
        <button className="menuItems">Help</button>
      </span>
      <span>
        <button className="menuItems">My Account</button>
      </span>
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
