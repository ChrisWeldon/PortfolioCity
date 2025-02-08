import './globals.css'
import localFont from 'next/font/local'

export const metadata = {
  title: 'chriswevans.com',
  description: "Chris' super cool website."
}

const poiretOne = localFont({
  src: [
    {
      path: 'fonts/PoiretOne-Regular.ttf',
      weight: '400'
    },
  ],
  variable: '--font-poiretone'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poiretOne.variable} font-sans`}>
      <body className='max-h-screen background-fade font-sans'>{children}</body>
    </html>
  )
}
