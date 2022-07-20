import React from 'react'
import CollectionCard from './CollectionCard'

const CollectionsList = ({collections}) => {
  //console.log(collections)
  return (
    <div>
    <div className='flex flex-auto flex-wrap grow shrink justify-center my-5'>
        {collections.map((collection, index) => (
          <CollectionCard key ={index} collection={collection}/>
        ))}
    </div>
    </div>
  )
}

export default CollectionsList

