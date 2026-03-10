'use client'

import React, { useEffect, useState } from 'react'

interface PageProps {
  params: Promise<{ slug: string }>
}

const page: React.FC<PageProps> = ({ params }) => {
  const [post, setPost] = useState<any>({})
  const { slug } = React.use(params);
  useEffect(() => {
    const allPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    console.log(allPosts);
    const singlepost: any = allPosts.find((p: any) => {
      return p.title.toLowerCase().split(" ").join("-") == slug
    });
    console.log(singlepost);
    setPost(singlepost)
  }, [])

  return (
    <div>
      {post && <div>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
      </div>}
    </div>
  )
}

export default page