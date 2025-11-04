
import PostsList from '../components/posts-list';
import { getPosts } from '../lib/placeholder-data';
import FeaturedPost from '../components/featured-post';

export default function Home() {
  const allPosts = getPosts();
  const featuredPost = allPosts[0];
  const otherPosts = allPosts.slice(1);

  return (
    <div>
      <header className="py-12 px-4 md:px-6 text-center bg-muted">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 font-headline">ChronoBlog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Journeys through time, technology, and the tales they tell.
        </p>
      </header>
      <div className="container mx-auto px-4 md:px-6 py-12">
          {featuredPost && <FeaturedPost post={featuredPost} />}
          {otherPosts.length > 0 && <PostsList posts={otherPosts} />}
      </div>
    </div>
  );
}
