import React from "react";

interface props {
  products: string[];
}

const ProductsArea = ({ products }: props) => {
  return (
    <ul className="categoryRow">
      {products.map((product, index) => (
        <li key={index}>
          <button className="categoryButton">{product}</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductsArea;
