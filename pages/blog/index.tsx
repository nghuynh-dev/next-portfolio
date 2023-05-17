import { MainLayout } from '@/components/layout';
import { getPostList } from '@/utils/post';
import { GetStaticProps } from 'next';

export interface BlogListPageProps {
  blogs: any[]
}

export default function BlogListPage({ blogs }: BlogListPageProps) {
  console.log(blogs);

  return <div>
    <h1>Blog list</h1>
    <ul>
      {blogs.map(blog => <li key={blog.id}>{blog.title}</li>)}
    </ul>
  </div>
}

BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  const postList = await getPostList()

  return {
    props: {
      blogs: postList
    }
  }
}