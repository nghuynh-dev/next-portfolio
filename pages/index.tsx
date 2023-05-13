import { Seo } from '@/components/common'
import { FeaturedWorks, HeroSection, RecentPosts } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo data={{
        title: 'Huynh Nguyen Portfolio - Creative Work Showcase',
        description: 'Discover the impressive creative work of Huynh Nguyen in graphic design, illustration, web development, and more. Contact me to bring your project to life.',
        url: 'https://huynhnguyen.vercel.app/',
        thumbnailUrl: 'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png',
      }} />
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </Box>
  )
}
Home.Layout = MainLayout

export default Home
