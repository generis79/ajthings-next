import React from "react";
import CollectionsList from "./CollectionsList";

const Collections = ({ collections }) => {
  return (
    <div>
      <div className="flex flex-col items-center bg-white">
        <CollectionsList collections={collections} />
      </div>
    </div>
  );
};

export default Collections;
