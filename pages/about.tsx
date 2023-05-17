import { MainLayout } from '@/components/layout'
import { Box, Typography } from '@mui/material'

export interface AboutPageProps { }

export default function AboutPage(props: AboutPageProps) {
  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary">
        ABOUT PAGE
      </Typography>
    </Box>
  )
}
AboutPage.Layout = MainLayout
