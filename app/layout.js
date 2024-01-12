import { inter } from './fonts.js'
import './globals.css'

export const metadata = {
  title: 'Sheik Dawood',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="bg-stone-100">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
