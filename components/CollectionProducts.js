import React from "react";
import ProductsList from "./ProductsList";

const CollectionProducts = ({ products }) => {
  return (
    <div>
      <div className="flex flex-col items-center bg-white my-20">
        <ProductsList products={products} />
      </div>
    </div>
  );
};

export default CollectionProducts;

