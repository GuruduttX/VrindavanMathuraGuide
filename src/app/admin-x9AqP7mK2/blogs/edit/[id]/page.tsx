import React from 'react'

const BlogEditor = async ({params} : {params : Promise<{id : string}>} ) => {
    const {id} = await params

  return (
    <div className='text-white'>BlogEditor with the slug {id}</div>
  )
}

export default BlogEditor