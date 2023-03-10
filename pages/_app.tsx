import { AppPropsWithLayout } from '@/models'
import '@/styles/globals.css'
import { EmptyLayout } from './../components/layout/empty'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
