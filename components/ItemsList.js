import React from 'react'
import CartItem from './CartItem'

const submitOrder=()=>{
    event.preventDefault()
    console.log (items)
 }

const ItemsList = ({items, onDelete}) => {
  return (
    <div className="flex flex-col grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full px-3 lg:px-6">
        <form onSubmit={submitOrder}>
            {items.map((item)=> (
                <CartItem key = {item.id} item={item} onDelete={onDelete}/>
            ))}
            <button type="submit" 
            className="
                self-center
                w-96
                px-6
                py-2.5
                bg-gray-100
                text-gray-700
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-gray-200 hover:shadow-lg
                focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-gray-200 active:shadow-lg
                transition
                duration-150
                ease-in-out">Submit Order</button>
        </form>
    </div>
  )
}

export default ItemsList