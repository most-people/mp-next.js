'use client'
import { SnackbarProvider } from 'notistack'

export default function App({ children }: Readonly<{ children: React.ReactNode }>) {
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
