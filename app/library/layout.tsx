import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Library',
  description:
    'BCT College Library — Search and borrow textbooks, IT books, and general reading materials for students.',
  openGraph: {
    title: 'Library | BCT College',
    description: 'Search and borrow books from the BCT College Library.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bct.edu.la/library',
  },
}

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  return children
}
