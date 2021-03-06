import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({products, onAdd}) => {
  //console.log(collections)
  return (
    <div>
    <div className='flex flex-auto flex-wrap grow shrink justify-center my-5'>
        {products.map((product, index) => (
          <ProductCard key ={index} product={product} onAdd={onAdd}/>
        ))}
    </div>
    </div>
  )
}

export default ProductsList

