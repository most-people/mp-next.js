'use client'
import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: '"Serif"',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '21px',
          height: '42px',
        },
        contained: {
          background: 'linear-gradient(135deg, #2301db, #d307eb)',
          color: '#fff',
        },
      },
    },
  },
})

export default darkTheme
