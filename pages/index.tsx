import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1>welcome</h1>
    </>
  )
}
Home.Layout = MainLayout

export default Home
