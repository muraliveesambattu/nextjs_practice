'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';


interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
}

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock blog posts data
        const mockPosts: BlogPost[] = [
            {
                id: 1,
                title: 'Getting Started with Next.js',
                excerpt: 'Learn the basics of Next.js and how to build modern web applications.',
                date: '2024-01-15',
                author: 'John Doe',
            },
            {
                id: 2,
                title: 'React Hooks Explained',
                excerpt: 'Deep dive into React hooks and how to use them effectively.',
                date: '2024-01-10',
                author: 'Jane Smith',
            },
            {
                id: 3,
                title: 'TypeScript Best Practices',
                excerpt: 'Essential tips for writing type-safe TypeScript code.',
                date: '2024-01-05',
                author: 'Bob Johnson',
            },
        ];

        setPosts(mockPosts);
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Blog</h1>
                <div className="space-y-6">
                    {posts.map((post) => {
                        const slug = post.title.toLowerCase().replace(/\s+/g, '-');
                        return <article key={post.id} className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                            <Link href={{
                                pathname: `/blog/${slug}`,
                                query: { post: JSON.stringify(post) }
                            }}>
                                {post.title}
                            </Link>

                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>{post.author}</span>
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                        </article>
                    })}
                </div>
            </div>
        </div>
    );
}