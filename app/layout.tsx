import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import ScrollToTop from '@/components/layout/scroll-to-top'
import './globals.css'
import ContactFooter from '@/components/layout/contact-footer'
import { JsonLd } from '@/components/seo/json-ld'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const notoSansLao = localFont({
  src: [
    {
      path: './fonts/NotoSansLao-Variable.ttf',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-noto-sans-lao',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bct.edu.la'),
  title: {
    default: 'BCT College — IT Education in Vientiane, Laos',
    template: '%s | BCT College',
  },
  description:
    'BCT College is a leading higher education institution in Vientiane, Laos, offering 3-year diploma programs in IT Programming, English for IT & Business, and Political Science. Build your future in technology with industry-aligned curriculum and hands-on training.',
  keywords: [
    'BCT College',
    'BCT College Laos',
    'IT education Laos',
    'computer science Vientiane',
    'programming Laos',
    'software engineering Vientiane',
    'higher education Laos',
    'college Vientiane',
    'study IT in Laos',
    'learn programming Laos',
    'English course Laos',
    'IT diploma Laos',
    'Vientiane college',
    'Laos IT school',
    'technology education Southeast Asia',
    'web development Laos',
    'computer college Laos',
    'apply college Laos',
  ],
  authors: [{ name: 'BCT College', url: 'https://bct.edu.la' }],
  creator: 'BCT College for IT Education',
  publisher: 'BCT College',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://bct.edu.la',
    languages: {
      'lo-LA': 'https://bct.edu.la',
    },
  },
  openGraph: {
    title: 'BCT College — IT Education in Vientiane, Laos',
    description: 'Build your future in technology with BCT College, Laos. 3-year diploma programs in IT Programming, English, and Political Science. Enroll now.',
    type: 'website',
    locale: 'lo_LA',
    url: 'https://bct.edu.la',
    siteName: 'BCT College',
    images: [
      {
        url: '/images/bct-main-bg.png',
        width: 1200,
        height: 630,
        alt: 'BCT College — IT Education in Vientiane, Laos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BCT College — IT Education in Vientiane, Laos',
    description: 'Build your future in technology with BCT College, Laos. 3-year diploma programs in IT, English, and Political Science.',
    images: ['/images/bct-main-bg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'education',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lo" className="scroll-smooth">
      <body className={`${notoSansLao.variable} ${montserrat.variable}  font-sans antialiased`}>
        <JsonLd />
        {children}
        <ScrollToTop />
        <Analytics />
        <ContactFooter />
      </body>
    </html>
  )
}
