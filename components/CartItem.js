import React from 'react'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'
const CartItem = ({item, onDelete}) => {

  return (
    <div className="flex justify-between m-2">
        <div className="rounded-lg  bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                className="rounded-t-lg h-24 w-36"
                src={item.cover_image}
                alt=""
                />
            </a>
        </div>
        <div className="p-6 grow">
            <h5 className="text-sky-900 text-xl font-medium mb-2">
            Name: {item.name}
            </h5>
            <h6 className="text-sky-900 text-xl font-medium mb-2">
            Price: {item.newPrice}
            </h6>

        </div>
        <div className='self-center'>
            <FaTimes  
                style={{color:'red', cursor: 'pointer'}} 
                onClick={() => onDelete(item.id)}/>
        </div>

  </div>
  )
}

export default CartItem