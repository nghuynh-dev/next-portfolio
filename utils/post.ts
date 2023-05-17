import { Post } from '@/models'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const BLOG_FOLDER = path.join(process.cwd(), 'blog')

export async function getPostList(): Promise<Post[]> {
  const fileNameList = fs.readdirSync(BLOG_FOLDER)

  const postList: Post[] = []
  fileNameList.forEach((file) => {
    const filePath = path.join(BLOG_FOLDER, file)
    const fileContent = fs.readFileSync(filePath, 'utf8')

    const { data, excerpt, content } = matter(fileContent, {
      excerpt_separator: '<!-- truncate-->',
    })
    postList.push({
      id: file,
      slug: data.slug,
      title: data.title,
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      tagList: data.tags,
      publishedDate: data.date,
      description: excerpt ?? '',
      mdContent: content,
    })
  })

  return postList
}
