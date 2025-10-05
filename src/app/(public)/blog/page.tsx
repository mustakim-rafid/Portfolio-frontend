import { BlogCard } from '@/components/module/blog/BlogCard'
import { IBlog } from '@/types'
import React from 'react'

const BlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog?isFeatured=true`, {
    cache: "no-store"
  })
  const {data} = await res.json()

  return (
    <div>
      {
        data.map((blog: IBlog) => (
          <BlogCard key={blog.id} BlogContent={blog} />
        ))
      }
    </div>
  )
}

export default BlogsPage