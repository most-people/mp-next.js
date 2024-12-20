'use client'
import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: 'linear-gradient(135deg, #2301db, #d307eb)',
          color: '#fff',
        },
      },
    },
  },
})

export default darkTheme
