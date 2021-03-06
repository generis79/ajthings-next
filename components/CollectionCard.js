import React from "react";
import Link from 'next/link'

const CollectionCard = ({ collection }) => {
  //console.log({product})
  return (
    <div className="flex justify-center m-2">
      <div className="rounded-lg  bg-white max-w-sm">
        <Link href={collection.frontmatter.collection_path}>
        <a  data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            className="rounded-t-lg"
            src={collection.frontmatter.cover_image}
            alt=""
          />
        </a>
        </Link>
        <div className="p-6">
          <h5 className="text-sky-900 text-xl font-medium mb-2">
            {collection.frontmatter.name}
          </h5>
          <Link href={collection.frontmatter.collection_path}>
            <button
              type="button"
              className=" inline-block 
                                          border-solid border-2 
                                          px-2 py-2.5 
                                          bg-white text-sky-900 
                                          font-medium text-xs leading-tight uppercase rounded shadow-md 
                                          hover:bg-gray-200 hover:shadow-lg hover:scale-110
                                          focus:bg-gray-200 focus:shadow-lg 
                                          focus:outline-none focus:ring-0 
                                          active:bg-gray-200 active:shadow-lg 
                                          transition duration-150 ease-in-out
                                          "
            >
              Shop Collection
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
