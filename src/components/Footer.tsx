import React from "react";
import * as MaterialDesign from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <span>
          <h3>My Account</h3>
          <p className="footerText">Sign In</p>
          <p className="footerText">Order Status</p>
        </span>
        <span>
          <h3>About Us</h3>
          <p className="footerText">Our Story</p>
          <p className="footerText">Careers</p>
          <p className="footerText">Terms & Policy</p>
        </span>
        <span>
          <h3>Help</h3>
          <p className="footerText">Help Center</p>
          <p className="footerText">Shipping & Returns</p>
        </span>
        <div>
          <h3>Follow us on Social Media</h3>
          <button className="icon">
            <MaterialDesign.MdFacebook size={40} />
          </button>
          <button className="icon">
            <MaterialDesign.MdCameraAlt size={40} />
          </button>
          <button className="icon">
            <MaterialDesign.MdMailOutline size={40} />
          </button>
        </div>
      </div>
      <div className="footerText">
        <h6>c Pages&Pines Inc. All Rights Reserved</h6>
      </div>
    </>
  );
};

export default Footer;
