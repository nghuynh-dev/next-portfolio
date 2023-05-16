import { MainLayout } from '@/components/layout'
import { getPostList } from '@/utils/post'
import { GetStaticProps } from 'next'

export interface BlogListPageProps {
  blogs: any[]
}

export default function BlogListPage({ blogs }: BlogListPageProps) {
  return <div>
    <h1>Blog list</h1>
    <ul>
      {/* {blogs.map(blog => <li key={blog.id}>{blog.title}</li>)} */}
    </ul>
  </div>
}

BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const data = await res.json()

  const data = await getPostList()

  return {
    props: {
      blogs: data
    }
    // {
    //   blogs: data.map((x: any) => ({
    //     id: x.id,
    //     title: x.title,
    //   }))
    // }
  }
}