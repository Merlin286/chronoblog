
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostNavigation } from '../../../lib/placeholder-data';
import type { Metadata } from 'next';
import PostPageClient from './post-page-client';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const awaitedParams = await params;
  const slug = awaitedParams.slug;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} | ChronoBlog`,
    description: post.content.substring(0, 160) + '...',
  };
}


export default async function PostPage({ params }: PostPageProps) {
  const awaitedParams = await params;
  const slug = awaitedParams.slug;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { prevPost, nextPost } = getPostNavigation(slug);
  const formattedDate = new Date(post.publicationDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <PostPageClient post={post} slug={slug} prevPost={prevPost} nextPost={nextPost} formattedDate={formattedDate} />;
}
