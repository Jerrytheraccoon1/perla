import './globals.css'
export const metadata = { title: 'Perla Flowers | بيرلا للزهور' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  )
}
