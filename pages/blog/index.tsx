import { PostItem } from '@/components/blog';
import { MainLayout } from '@/components/layout';
import { getPostList } from '@/utils/post';
import { Box, Container, Divider, Link } from '@mui/material';
import { GetStaticProps } from 'next';
// import Link from 'next/link';


export interface BlogListPageProps {
  posts: any[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  console.log(posts);

  return <Box>
    <Container>
      <h1>Blog</h1>

      <Box component="ul" sx={{ listStyleType: 'none', p: 0, textDecoration: 'none' }}>
        {posts.map(post =>
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <PostItem post={post} />
            </Link>

            <Divider sx={{ my: 3 }} />
          </li>
        )}
      </Box>
    </Container>
  </Box>
}

BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  const postList = await getPostList()

  return {
    props: {
      posts: postList
    }
  }
}