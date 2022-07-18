import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div>
    <div className='flex flex-auto flex-wrap grow shrink justify-center my-5'>
        <ProductCard product="Leather key chains"/>
        <ProductCard product="Acrylic key chains"/>        
        <ProductCard product="Scrunchies"/>
        <ProductCard product="Stickers"/>
        <ProductCard product="Clay beads bracelets"/>
        <ProductCard product="Wristles"/>
    </div>
    </div>
  )
}

export default ProductList