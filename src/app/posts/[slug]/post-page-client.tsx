
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Comments from '../../../components/comments';
import { Separator } from '../../../components/ui/separator';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, ArrowRight, Bot, Loader2 } from 'lucide-react';
import ScrollAnimation from '../../../components/scroll-animation';
import { Card, CardContent } from '../../../components/ui/card';
import { useState } from 'react';
import { summarizePost } from '../../../ai/flows/summarize-post-flow';
import { cn } from '../../../lib/utils';
import type { Post } from '../../../lib/types';


type PostPageClientProps = {
  post: Post;
  slug: string;
  formattedDate: string;
  prevPost: Post | null;
  nextPost: Post | null;
};

export default function PostPageClient({ post, slug, formattedDate, prevPost, nextPost }: PostPageClientProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = async () => {
    if (!post) return;
    setIsSummarizing(true);
    setError(null);
    setSummary(null);
    try {
      const result = await summarizePost({ content: post.content });
      setSummary(result.summary);
    } catch (e) {
      setError('Failed to generate summary. Please try again.');
      console.error(e);
    } finally {
      setIsSummarizing(false);
    }
  };


  return (
    <>
      <header className="py-8 px-4 md:px-6 bg-muted relative">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">{post.title}</h1>
            <p className="text-muted-foreground text-lg">
              Published on {formattedDate}
            </p>
          </ScrollAnimation>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-12">
        <article className="max-w-4xl mx-auto">
          <ScrollAnimation delay={200}>
            <div className="relative aspect-video w-full mb-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </ScrollAnimation>
          
          <div className="flex justify-end mb-6">
            <Button onClick={handleSummarize} disabled={isSummarizing} variant="outline">
              {isSummarizing ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Bot className="mr-2 h-4 w-4" />
              )}
              Summarize with AI
            </Button>
          </div>

          { (isSummarizing || summary || error) && (
             <ScrollAnimation className="mb-8">
              <Card className={cn(
                  "bg-muted/50 border-dashed shadow-none transition-all",
                  {"border-destructive/50": error}
                )}>
                  <CardContent className="p-6">
                    {isSummarizing && (
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <Loader2 className="h-6 w-6 animate-spin" />
                        <p>Generating summary...</p>
                      </div>
                    )}
                    {error && <p className="text-destructive">{error}</p>}
                    {summary && (
                      <div>
                        <h3 className="font-headline text-xl font-bold mb-2 flex items-center gap-2">
                          <Bot className="h-5 w-5" />
                          AI Summary
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">{summary}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
             </ScrollAnimation>
            )
          }

          <ScrollAnimation delay={400}>
            <div className="prose prose-lg max-w-none dark:prose-invert font-body leading-relaxed text-foreground/90">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">{paragraph}</p>
              ))}
            </div>
          </ScrollAnimation>

          <Separator className="my-12" />

          <ScrollAnimation delay={600}>
            <Comments postId={post.id} />
          </ScrollAnimation>

          <Separator className="my-12" />

          <ScrollAnimation delay={800}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {prevPost ? (
                <Button asChild variant="outline" className="w-full sm:w-auto h-auto py-3">
                  <Link href={`/posts/${prevPost.slug}`} className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    <div className='text-left overflow-hidden'>
                      <p className="text-xs text-muted-foreground">Previous</p>
                      <p className="font-semibold truncate">{prevPost.title}</p>
                    </div>
                  </Link>
                </Button>
              ) : <div className="hidden sm:block sm:w-1/2"></div>}
              {nextPost ? (
                <Button asChild variant="outline" className="w-full sm:w-auto h-auto py-3">
                  <Link href={`/posts/${nextPost.slug}`} className="flex items-center gap-2 justify-end">
                     <div className='text-right overflow-hidden'>
                      <p className="text-xs text-muted-foreground">Next</p>
                      <p className="font-semibold truncate">{nextPost.title}</p>
                    </div>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              ) : <div className="hidden sm:block sm:w-1/2"></div>}
            </div>
          </ScrollAnimation>
        </article>
      </main>
    </>
  );
}
