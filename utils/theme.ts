import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { Heebo } from 'next/font/google'

export const heebo = Heebo({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      main: '#00ABCC',
      light: '#EDF7FA',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: heebo.style.fontFamily,
    // fontFamily: 'Heebo, sans-serif',
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          maxWidth: '860px',
          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'black',
          '&:hover, &.active': {
            color: '#FF6464',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: 'white',
          },
        },
      ],
    },
  },
})

export default theme
