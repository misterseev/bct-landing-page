import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import ScrollToTop from '@/components/scroll-to-top'
import './globals.css'
import ContactFooter from '@/components/contact-footer'

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
  title: {
    default: 'ວິທະຍາໄລ ບີຊີທີ ເພື່ອການສຶກສາດ້ານໄອທີ',
    template: '%s | ວິທະຍາໄລ ບີຊີທີ',
  },
  description:
    'ວິທະຍາໄລ ບີຊີທີ ຮັບສະໝັກຮຽນຫຼັກສູດຊັ້ນສູງສາຂາເທັກໂນໂລຊີຂໍ້ມູນ 3 ປີ ຢູ່ນະຄອນຫຼວງວຽງຈັນ ສປປ ລາວ — ພັດທະນາທັກສະວິຊາການໄອທີ ພາສາອັງກິດ ແລະ ຄວາມຮູ້ສັງຄົມ ໃຫ້ສອດຄ່ອງກັບຕະຫຼາດແຮງງານ.',
  keywords: [
    'ວິທະຍາໄລ ບີຊີທີ',
    'ການສຶກສາໄອທີ',
    'ລາວ',
    'ຊັ້ນສູງ',
    'ຄອມພິວເຕີ',
    'ວິທະຍາໄລອາຊີວະສຶກສາ',
  ],
  openGraph: {
    title: 'ວິທະຍາໄລ ບີຊີທີ ເພື່ອການສຶກສາດ້ານໄອທີ',
    description: 'ສ້າງອະນາຄົດດ້ານເທັກໂນໂລຊີກັບວິທະຍາໄລ ບີຊີທີ ສປປ ລາວ',
    type: 'website',
    locale: 'lo_LA',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lo" className="scroll-smooth">
      <body className={`${notoSansLao.variable} ${montserrat.variable}  font-sans antialiased`}>
        {children}
        <ScrollToTop />
        <Analytics />
        <ContactFooter />
      </body>
    </html>
  )
}
