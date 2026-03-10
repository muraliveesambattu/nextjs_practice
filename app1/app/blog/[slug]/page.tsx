'use client';

import { useParams } from "next/navigation";

export default function BlogPostPage() {

  const params = useParams();
  const slug = params.slug as string;
  console.log("BlogPostPage slug:", slug);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          {slug?.replace(/-/g, " ")}
        </h1>

        <p className="text-gray-700 mb-4">
          This is a detailed view of the blog post with the slug:
          <strong> {slug}</strong>.
        </p>
      </div>
    </div>
  );
}