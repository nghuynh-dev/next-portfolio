import { Post } from '@/models';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
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

        <Box my={2} sx={{ display: 'flex' }}>

          <Typography>{format(Number(post.publishedDate), 'dd MMM yyyy')}</Typography>

          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

          <Typography>{post.tagList.join(', ')}</Typography>
        </Box>

        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}
