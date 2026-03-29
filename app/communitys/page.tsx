import type { Metadata } from "next"
import Navbar from "@/components/layout/navbar"
import { CommunityView } from "@/components/sections/community-view"
import { SITE_NAME } from "@/config/site"

export const metadata: Metadata = {
  title: 'Community & Activities',
  description:
    'BCT College student community and networking events — participation, certificates, and skill development activities.',
  openGraph: {
    title: 'Community & Activities | BCT College',
    description: 'Student community and networking events at BCT College.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bct.edu.la/communitys',
  },
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <CommunityView />
    </main>
  )
}
