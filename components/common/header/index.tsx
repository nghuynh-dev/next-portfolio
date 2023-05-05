import { Box } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'
import HeaderMobile from './header-mobile'
import HeaderDesktop from './header-desktop'

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
    // <Box component="header" py={2} textAlign="center">
    //   <Link href="/">Home</Link>
    //   <Link href="/blog">Blog</Link>
    //   <Link href="/works">Works</Link>
    // </Box>
  )
}
