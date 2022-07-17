import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='flex flex-col m-2 w-96 h-64 shadow-lg shadow-sky-300 justify-center grow shrink'>
        <div className='m-auto'>
        {props.product}
        </div>
    </div>
  )
}

export default ProductCard