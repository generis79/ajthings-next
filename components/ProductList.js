import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div>
    <div className='flex flex-auto flex-wrap mx-24 my-5'>
        <ProductCard product="product1"/>
        <ProductCard product="product2"/>        
        <ProductCard product="product3"/>
        <ProductCard product="product4"/>
        <ProductCard product="product5"/>
        <ProductCard product="product6"/>
    </div>
    </div>
  )
}

export default ProductList