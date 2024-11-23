import React from "react";
import * as MaterialDesign from "react-icons/md";
import logo from "../resources/Logo.png";

interface props {
  handleSearchClick: () => void;
}

const ShowDropDownMenu = () => {
  document.getElementById("dropDownMenu")!.classList.toggle("show");
};

const Menu = ({ handleSearchClick }: props) => {
  return (
    <div className="menuDiv">
      <span className="dropdown">
        <button className="icon">
          <MaterialDesign.MdMenu size={40} />
        </button>
        <div id="dropDownMenu">a</div>
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
