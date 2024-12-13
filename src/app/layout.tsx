import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
// 文档 https://mui.com/material-ui/integrations/nextjs/
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

import './global.scss'

// 引入 Orbitron 字体
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'], // 根据需要选择字体粗细
})

export const metadata: Metadata = {
  title: 'Edge Runners',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={orbitron.className}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
