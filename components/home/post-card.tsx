import { Post } from '@/models';
import { Stack, Card, CardContent, Divider, Typography } from '@mui/material';
import { format } from 'date-fns';
import * as React from 'react';

export interface IPostCardProps {
  post: Post
}

export default function PostCard({ post }: IPostCardProps) {
  if (!post) return null
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">{post.title}</Typography>

        <Stack my={2} direction="row">

          <Typography variant='body1'>{format(Number(post.publishedDate), 'dd MMM yyyy')}</Typography>

          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

          <Typography variant='body1'>{post.tagList.join(', ')}</Typography>
        </Stack>

        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}
