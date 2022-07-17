import React from 'react'

const ProductCard = (props) => {
  return (
<div class="flex justify-center m-2">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-sky-600 text-xl font-medium mb-2">{props.product}</h5>
      <p class="text-sky-600 text-base mb-4">
        Product description
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard