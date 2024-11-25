import React from "react";
import Button from "./Button";
import myImage from "../resources/bookcover.jpeg";

// Takes all the information about the book to be promoted
// as properties.
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
        <p className="promoText">
          {title}
          <br></br>
          {author}
        </p>
        <Button onClick={() => console.log("")}>Add To Wishlist</Button>
      </div>
    </div>
  );
};

export default PromoArea;
