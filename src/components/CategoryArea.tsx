import React from "react";
import * as MaterialDesign from "react-icons/md";

// Takes the catgories as an array
interface props {
  categories: string[];
}

// The area that displays all the categories as options
const CategoryArea = ({ categories }: props) => {
  return (
    <ul className="categoryRowAlt">
      {categories.map((category, index) => (
        <li key={index}>
          <button className="categoryButton">
            {category}
            <p className="categoryButtonText">
              Shop Now <MaterialDesign.MdArrowForward />
            </p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryArea;
