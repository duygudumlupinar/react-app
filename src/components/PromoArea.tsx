import React from "react";
import Button from "./Button";
import myImage from "../resources/bookcover.jpeg";

interface props {
  title: string;
  author: string;
  description: string;
}

const PromoArea = ({ title, author, description }: props) => {
  return (
    <div className={"promoRow"}>
      <div>
        <img className="promoImg" src={myImage}></img>
      </div>
      <div className="descriptionText">
        <p className="promoText">{description}</p>
        <Button onClick={() => console.log("")}>Add To Wishlist</Button>
      </div>
    </div>
  );
};

export default PromoArea;
