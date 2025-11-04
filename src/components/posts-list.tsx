
'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';
import ScrollAnimation from './scroll-animation';
import { Post } from '../lib/types';

function PostsListComponent({ posts: allPosts }: { posts: Post[]}) {
  const searchParams = useSearchParams();
  const [posts, setPosts] = useState(allPosts);

  useEffect(() => {
    const query = searchParams.get('q')?.toLowerCase() || '';
    if (query) {
      const filteredPosts = allPosts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
      );
      setPosts(filteredPosts);
    } else {
      setPosts(allPosts);
    }
  }, [searchParams, allPosts]);

  if (posts.length === 0 && (searchParams.get('q')?.toLowerCase() || '')) {
     return (
        <div className="text-center py-16 text-muted-foreground mt-12">
            <h2 className="text-2xl font-semibold mb-2">No posts found</h2>
            <p>Try a different search term.</p>
        </div>
      )
  }

  return (
    <div className="mt-16">
       <h2 className="text-3xl font-bold tracking-tight mb-8 font-headline">More Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {posts.map((post, index) => (
            <ScrollAnimation key={post.id} delay={index * 100}>
            <Card className="hover:shadow-xl transition-all duration-300 dark:bg-card h-full flex flex-col transform hover:-translate-y-1">
                <CardHeader>
                  <Link href={`/posts/${post.slug}`} className="group block">
                      <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden">
                          <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          />
                      </div>
                  </Link>
                  <CardTitle className="text-xl md:text-2xl">
                    <Link href={`/posts/${post.slug}`} className="hover:text-primary transition-colors duration-300">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground pt-2">
                      {new Date(post.publicationDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      })}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed">
                    {post.content.substring(0, 100)}...
                </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                <Badge variant="secondary">Tech</Badge>
                <Link href={`/posts/${post.slug}`} className="flex items-center text-sm font-semibold text-primary hover:underline">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                </CardFooter>
            </Card>
            </ScrollAnimation>
        ))}
        </div>
    </div>
  );
}


export default function PostsList({ posts }: { posts: Post[]}) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PostsListComponent posts={posts} />
        </Suspense>
    )
}
