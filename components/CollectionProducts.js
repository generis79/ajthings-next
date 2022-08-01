import React from "react";
import ProductsList from "./ProductsList";

const CollectionProducts = ({ products, onAdd }) => {
  return (
    <div>
      <div className="flex flex-col items-center bg-white my-20">
        <ProductsList products={products} onAdd={onAdd}/>
      </div>
    </div>
  );
};

export default CollectionProducts;

