import React from "react";
import * as MaterialDesign from "react-icons/md";

interface props {
  categories: string[];
}

const CategoryArea = ({ categories }: props) => {
  return (
    <ul className="categoryRowAlt">
      {categories.map((category, index) => (
        <li key={index}>
          <button className="categoryButton">
            {category}
            <p>
              Shop Now <MaterialDesign.MdArrowForward />
            </p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryArea;
