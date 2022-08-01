import React from 'react'
import CartItem from '../components/CartItem'
import ItemsList from '../components/ItemsList'
import Link
 from 'next/link'
const cart = ( {items, onDelete} ) => {

 
  return (
    <div>
        {items.length > 0 ?
            (
                <div>
                    <div className="font-medium leading-tight text-4xl p-10 mt-0 mb-20 text-gray-700 bg-gray-100 text-center font-Caveat">Your shopping list</div>
                    <ItemsList items={items} onDelete={onDelete} />
                </div>
            ) : (
                <div>
                    <h2 className="font-medium leading-tight text-4xl p-10 mt-0 mb-20 text-gray-700 bg-gray-100 text-center font-Caveat">
                        <div className='flex flex-col items-center'>
                            <div className='mb-20'>
                                Shoping list is empty
                            </div>
                            <Link href="/">
                                    <button
                                    type="button"
                                    className=" w-96 inline-block 
                                                                border-solid border-2 
                                                                px-2 py-2.5 
                                                                bg-white text-sky-900 
                                                                font-medium text-xs leading-tight uppercase rounded shadow-md 
                                                                hover:bg-gray-200 hover:shadow-lg hover:scale-110
                                                                focus:bg-gray-200 focus:shadow-lg 
                                                                focus:outline-none focus:ring-0 
                                                                active:bg-gray-200 active:shadow-lg 
                                                                transition duration-150 ease-in-out
                                                                "
                                    >
                                    Go shopping
                                    </button>
                    </Link>           
                        </div>
                    </h2>


                </div>
        )}
    </div>
    )

}

export default cart