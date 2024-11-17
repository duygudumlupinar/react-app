import React from "react";

interface props {
  categories: string[];
}

const CategoryArea = ({ categories }: props) => {
  return (
    <ul className="categoryRowAlt">
      {categories.map((category, index) => (
        <li key={index}>
          <button className="categoryButton">{category}</button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryArea;
