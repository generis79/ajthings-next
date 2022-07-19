import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  //console.log(products)
  return (
    <div>
    <div className='flex flex-auto flex-wrap grow shrink justify-center my-5'>
        {products.map((product, index) => (
          <ProductCard key ={index} product={product}/>
        ))}
    </div>
    </div>
  )
}

export default ProductList

