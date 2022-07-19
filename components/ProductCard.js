import React from 'react'

const ProductCard = ({product}) => {
  //console.log({product})
  return (
<div className="flex justify-center m-2">
  <div className="rounded-lg  bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src={product.frontmatter.cover_image} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-sky-900 text-xl font-medium mb-2">{product.frontmatter.name}</h5>
      <button type="button" className=" inline-block 
                                        border-solid border-2 
                                        px-2 py-2.5 
                                        bg-white text-sky-900 
                                        font-medium text-xs leading-tight uppercase rounded shadow-md 
                                        hover:bg-gray-200 hover:shadow-lg hover:scale-110
                                        focus:bg-gray-200 focus:shadow-lg 
                                        focus:outline-none focus:ring-0 
                                        active:bg-gray-200 active:shadow-lg 
                                        transition duration-150 ease-in-out
                                        ">Shop Collection</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard