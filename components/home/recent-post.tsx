import { Post } from '@/models';
import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import PostCard from './post-card';

export function RecentPosts() {
  // Call API to get recent post
  const postList: Post[] = [
    {
      id: '1',
      slug: '',
      title: 'Create local environment by Docker',
      publishedDate: '2022-06-18T12:00:00Z',
      tagList: ['Backend', 'DevOps'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam voluptate libero? Ut officia accusamus itaque eaque voluptate dolorem dolorum, aut rerum ea adipisci, dolore, ipsum doloribus voluptas deserunt velit.'
    },
    {
      id: '2',
      slug: '',
      title: 'Awareness on CI/CD flows and concepts',
      publishedDate: '2022-06-18T12:00:00Z',
      tagList: ['Backend', 'DevOps'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam voluptate libero? Ut officia accusamus itaque eaque voluptate dolorem dolorum, aut rerum ea adipisci, dolore, ipsum doloribus voluptas deserunt velit.'
    }
  ];
  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack direction="row" mb={2} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems="center">
          <Typography variant='h5'>Recent Posts</Typography>
          <Link passHref href="/blog" legacyBehavior>
            <MuiLink sx={{ display: { xs: 'none', md: 'inline' } }}>View all</MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{
            xs: 'column',
            md: 'row'
          }}
          spacing={3}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%'
              }
            }
          }}
        >
          {postList.map(post => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}

        </Stack>
      </Container>
    </Box>
  );
}
