import { MainLayout } from '@/components/layout';
import { getPostList } from '@/utils/post';
import { GetStaticProps } from 'next';

export interface BlogListPageProps {
  posts: any[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  console.log(posts);

  return <div>
    <h1>Blog list</h1>
    <ul>
      {posts && posts.map(blog => <li key={blog.id}>{blog.title}</li>)}
    </ul>
  </div>
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