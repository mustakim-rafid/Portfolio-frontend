import React from 'react'

const SingleBlogPage = async ({ params }: {
    params: Promise< { uniquetitle: string } >
}) => {
    console.log((await params).uniquetitle)
  return (
    <div>SingleBlogPage</div>
  )
}

export default SingleBlogPage