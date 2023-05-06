import { HeroSection } from '@/components/home'
import RecentPosts from '@/components/home/recent-post'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPosts />
    </Box>
  )
}
Home.Layout = MainLayout

export default Home
