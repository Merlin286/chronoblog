
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../lib/types';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import ScrollAnimation from './scroll-animation';

interface FeaturedPostProps {
  post: Post;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <ScrollAnimation>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center group/featured">
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform group-hover/featured:-translate-y-1 group-hover/featured:shadow-2xl">
            <Link href={`/posts/${post.slug}`} className="group relative block w-full h-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    priority
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </Link>
        </div>
        <div>
            <p className="text-sm text-muted-foreground mb-2">
                Latest Post &bull; {new Date(post.publicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-headline">
                <Link href={`/posts/${post.slug}`} className="hover:text-primary transition-colors duration-300">
                    {post.title}
                </Link>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {post.content.substring(0, 200)}...
            </p>
            <Button asChild size="lg">
                <Link href={`/posts/${post.slug}`}>
                    Continue Reading <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </div>
        </div>
    </ScrollAnimation>
  );
}
