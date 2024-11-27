import React, { Fragment, useState } from "react";
import * as MaterialDesign from "react-icons/md";
import logo from "@/resources/Logo.png";

// Takes the method to be called as property.
interface props {
  handleSearchClick: () => void;
}

const Menu = ({ handleSearchClick }: props) => {
  const [openMenu, setOpenMenu] = useState(false);

  // Toggles the dropdown menu on each click.
  const ShowDropDownMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="menuDiv">
      <span>
        <button className="menuItems" onClick={ShowDropDownMenu}>
          <MaterialDesign.MdMenu size={40} />
        </button>
        {openMenu && (
          <div className="dropdownMenu">
            <button className="dropdownText">Categories</button>
            <button className="dropdownText">About Us</button>
            <button className="dropdownText">Help</button>
            <button className="dropdownText">My Account</button>
          </div>
        )}
      </span>
      <span>
        <img className="logoImg" src={logo}></img>
      </span>
      <span className="dropdown">
        <button className="menuItems">Categories</button>
        <div className="dropdownContent">
          <button className="dropdownText">Fantasy</button>
          <button className="dropdownText">Romance</button>
          <button className="dropdownText">Non-Fiction</button>
          <button className="dropdownText">Mystery</button>
        </div>
      </span>
      <span className="dropdown">
        <button className="menuItems">About Us</button>
        <div className="dropdownContent">
          <button className="dropdownText">Our Story</button>
          <button className="dropdownText">Careers</button>
          <button className="dropdownText">Terms & Policy</button>
        </div>
      </span>
      <span className="dropdown">
        <button className="menuItems">Help</button>
        <div className="dropdownContent">
          <button className="dropdownText">Help Center</button>
          <button className="dropdownText">Shipping & Returns</button>
        </div>
      </span>
      <span className="dropdown">
        <button className="menuItems">My Account</button>
        <div className="dropdownContent">
          <button className="dropdownText">Sign In</button>
          <button className="dropdownText">Order Status</button>
        </div>
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
