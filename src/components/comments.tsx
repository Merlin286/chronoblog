"use client";

import { useState, useMemo } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getCommentsByPostId } from '../lib/placeholder-data';
import type { Comment } from '../lib/types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useToast } from '../hooks/use-toast';
import { Send, MessageSquareReply } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const commentSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type CommentFormData = z.infer<typeof commentSchema>;

interface CommentFormProps {
  onSubmit: (data: CommentFormData) => void;
  isSubmitting: boolean;
  submitButtonText?: string;
}

function CommentForm({ onSubmit, isSubmitting, submitButtonText = "Post Comment" }: CommentFormProps) {
  const form = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: '',
      message: '',
    },
  });

  const handleFormSubmit: SubmitHandler<CommentFormData> = (data) => {
    onSubmit(data);
    form.reset();
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Comment</FormLabel>
              <FormControl>
                <Textarea placeholder="Share your thoughts..." {...field} rows={4} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Send className="mr-2 h-4 w-4" />
          {submitButtonText}
        </Button>
      </form>
    </Form>
  );
}

interface CommentItemProps {
  comment: Comment;
  allComments: Comment[];
  onReplySubmit: (data: CommentFormData, parentId: string) => void;
  isSubmitting: boolean;
  replyingTo: string | null;
  setReplyingTo: (id: string | null) => void;
}

function CommentItem({ comment, allComments, onReplySubmit, isSubmitting, replyingTo, setReplyingTo }: CommentItemProps) {
  const childComments = allComments.filter(c => c.parentId === comment.id);
  const isReplying = replyingTo === comment.id;

  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarFallback>{comment.author.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <p className="font-semibold">{comment.author}</p>
          <p className="text-xs text-muted-foreground">
            {new Date(comment.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </p>
        </div>
        <p className="text-foreground/80 mt-1">{comment.content}</p>
        <Button variant="ghost" size="sm" className="mt-2 text-muted-foreground" onClick={() => setReplyingTo(isReplying ? null : comment.id)}>
          <MessageSquareReply className="mr-2 h-4 w-4" />
          Reply
        </Button>
        <AnimatePresence>
        {isReplying && (
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <CommentForm
              onSubmit={(data) => onReplySubmit(data, comment.id)}
              isSubmitting={isSubmitting}
              submitButtonText="Post Reply"
            />
          </motion.div>
        )}
        </AnimatePresence>
        {childComments.length > 0 && (
          <div className="mt-6 space-y-6 pl-6 border-l-2">
            {childComments.map(child => (
              <CommentItem 
                key={child.id} 
                comment={child} 
                allComments={allComments}
                onReplySubmit={onReplySubmit}
                isSubmitting={isSubmitting}
                replyingTo={replyingTo}
                setReplyingTo={setReplyingTo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

interface CommentsProps {
  postId: string;
}

export default function Comments({ postId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>(() => getCommentsByPostId(postId));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const { toast } = useToast();

  const topLevelComments = useMemo(() => comments.filter(c => !c.parentId), [comments]);

  const handleCommentSubmit = (data: CommentFormData, parentId: string | null = null) => {
    setIsSubmitting(true);
    const newComment: Comment = {
      id: `c${Date.now()}`,
      postId,
      author: data.name,
      content: data.message,
      timestamp: new Date().toISOString(),
      parentId,
    };
    
    // Simulate API call
    setTimeout(() => {
      setComments(prev => [...prev, newComment]);
      setIsSubmitting(false);
      if (replyingTo) setReplyingTo(null);
      toast({
        title: parentId ? "Reply submitted!" : "Comment submitted!",
        description: "Thank you for your contribution.",
      });
    }, 500)
  };

  return (
    <Card className="bg-muted/50 border-none shadow-inner">
      <CardHeader>
        <CardTitle>Comments ({comments.length})</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-6">
          {topLevelComments.map((comment) => (
             <CommentItem 
              key={comment.id}
              comment={comment}
              allComments={comments}
              onReplySubmit={(data, parentId) => handleCommentSubmit(data, parentId)}
              isSubmitting={isSubmitting}
              replyingTo={replyingTo}
              setReplyingTo={setReplyingTo}
            />
          ))}
          {comments.length === 0 && (
            <p className="text-muted-foreground text-center py-4">Be the first to comment!</p>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 border-t pt-8">Leave a Reply</h3>
          <CommentForm
            onSubmit={(data) => handleCommentSubmit(data)}
            isSubmitting={isSubmitting}
          />
        </div>
      </CardContent>
    </Card>
  );
}
