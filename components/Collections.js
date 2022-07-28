import React from "react";
import CollectionsList from "./CollectionsList";

const Collections = ({ collections }) => {
  return (
    <div>
      <div className="flex flex-col items-center bg-white my-20">
        <CollectionsList collections={collections} />
      </div>
    </div>
  );
};

export default Collections;
