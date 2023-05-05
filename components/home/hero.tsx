import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import avatar from '../../images/avatar.jpg'

export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={{xs: 3.5, md: 5}}>
              Hi, I am Huynh, <br /> Creative Technologies
            </Typography>
            <Typography mb={{xs: 3.5, md: 5}}>
              Lorem test ipsum dolor sit amet consectetur adipisicing elit. Soluta, similique. Sint
              obcaecati in eveniet possimus sunt id totam laudantium est iste accusamus quae
              corporis cumque, necessitatibus molestias impedit quaerat maxime!
            </Typography>
            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>

          <Box
            sx={{
              height: '240px',
              boxShadow: '-5px 13px',
              color: 'secondary.light',
              borderRadius: '50%',
            }}
          >
            <Image
              src={avatar}
              alt="avatar"
              width={240}
              height={240}
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
