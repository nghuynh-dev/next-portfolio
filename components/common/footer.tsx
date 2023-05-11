import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Stack, Typography, Icon } from '@mui/material'
import * as React from 'react'

export function Footer() {
  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/nghuynhne' },
    { icon: GitHub, url: 'https://github.com/nghuynh-dev' },
    { icon: LinkedIn, url: 'https://www.linkedin.com/in/nghuynhdev' },
    { icon: Twitter, url: 'https://twitter.com' },
  ]
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" justifyContent="center">
        {socialLinks.map((item, idx) => (
          <Box key={idx} component="a" p={2} href={item.url} target="_blank" rel="noopener noreferrer" color="text">
            <Icon component={item.icon} sx={{ fontSize: 48, color: '#21243D' }}></Icon>
          </Box>
        ))}
      </Stack>

      <Typography>
        Copyright ©{new Date().getFullYear()} All rights reserved
      </Typography>
    </Box>
  )
}
