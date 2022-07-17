import React from 'react'

const ProductCard = (props) => {
  return (
<div className="flex justify-center m-2">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-sky-600 text-xl font-medium mb-2">{props.product}</h5>
      <p className="text-sky-600 text-base mb-4">
        Product description
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard