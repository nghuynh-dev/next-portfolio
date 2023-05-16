import path from 'path'
import fs from 'fs'

const BLOG_FOLDER = path.join(process.cwd(), 'blog')

export async function getPostList() {
  const fileNameList = fs.readdirSync(BLOG_FOLDER)

  fileNameList.forEach((file) => {
    const filePath = path.join(BLOG_FOLDER, file)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    console.log(fileContent)
  })

  return []
}
