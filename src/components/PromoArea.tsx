import React from "react";
import Button from "./Button";
import myImage from "../resources/bookcover.jpeg";

interface props {
  book: string;
}

const PromoArea = ({ book }: props) => {
  return (
    <div className={"promoRow"}>
      <div>
        <img className="promoImg" src={myImage}></img>
      </div>
      <div className="descriptionText">
        <p className="promoText">{book}</p>
        <Button onClick={() => console.log("")}>Add To Wishlist</Button>
      </div>
    </div>
  );
};

export default PromoArea;
