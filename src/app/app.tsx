'use client'
import { NotificationsProvider } from '@toolpad/core/useNotifications'

export default function App({ children }: Readonly<{ children: React.ReactNode }>) {
  return <NotificationsProvider>{children}</NotificationsProvider>
}
