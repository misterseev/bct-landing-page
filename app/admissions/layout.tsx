import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admissions — Apply Now for New Students',
  description:
    'Apply to BCT College — 3-year diploma programs in IT Programming, English for IT & Business, and Political Science. Year-round enrollment in Vientiane, Laos.',
  openGraph: {
    title: 'Admissions | BCT College',
    description:
      'Start your new journey — Apply for IT Programming, English, and Political Science programs at BCT College, Vientiane, Laos.',
    type: 'website',
    images: [{ url: '/images/bct-main-bg.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admissions | BCT College',
    description:
      'Start your new journey — Apply for IT, English, and Political Science programs at BCT College, Laos.',
  },
  alternates: {
    canonical: 'https://bct.edu.la/admissions',
  },
}

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
