import { BlogCard } from '@/components/module/blog/BlogCard'
import { IBlog } from '@/types'
import { Metadata } from 'next'
import React from 'react'

const metadata: Metadata = {
  title: "MAC | Blogs"
}

const BlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog?isFeatured=true`, {
    next: {
      tags: ["blogs"]
    }
  })
  const {data} = await res.json()

  return (
    <div className='min-h-[calc(100vh-101px)] grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-14 mx-auto p-10 lg:px-20'>
      {
        data.map((blog: IBlog) => (
          <BlogCard key={blog.id} BlogContent={blog} />
        ))
      }
    </div>
  )
}

export default BlogsPage