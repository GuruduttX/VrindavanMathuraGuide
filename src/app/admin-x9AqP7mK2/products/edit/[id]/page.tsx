import React from 'react'

const ProductEditor = async ({params} : {params : Promise<{id : string }>}) => {

    const {id} = await params;

  return (
    <div className='text-white'>ProductEditor with the slug is {id}</div>
  )
}

export default ProductEditor