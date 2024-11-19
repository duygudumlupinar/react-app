import React from "react";
import * as MaterialDesign from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <span>
          <h3>My Account</h3>
          <button className="footerText">Sign In</button>
          <button className="footerText">Order Status</button>
        </span>
        <span>
          <h3>About Us</h3>
          <button className="footerText">Our Story</button>
          <button className="footerText">Careers</button>
          <button className="footerText">Terms & Policy</button>
        </span>
        <span>
          <h3>Help</h3>
          <button className="footerText">Help Center</button>
          <button className="footerText">Shipping & Returns</button>
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
        <h6>
          <MaterialDesign.MdCopyright /> Pages&Pines Inc. All Rights Reserved
        </h6>
      </div>
    </>
  );
};

export default Footer;
