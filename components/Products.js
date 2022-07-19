import React from 'react'
import ProductList from './ProductList'

const Products = ({products}) => {
  return (
    <div>
        <div className='flex flex-col items-center bg-white'>



            <ProductList products = {products}/>
        </div>
        
    </div>
  )
}

export default Products
