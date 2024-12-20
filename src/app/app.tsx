'use client'
import { SnackbarProvider } from 'notistack'
import AOS from 'aos'
import { useEffect } from 'react'

export default function App({ children }: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      autoHideDuration={3000}
    >
      {children}
    </SnackbarProvider>
  )
}
