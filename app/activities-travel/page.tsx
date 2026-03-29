import type { Metadata } from "next"
import Navbar from "@/components/layout/navbar"
import { ActivitiesTravelView } from "@/components/sections/activities-travel-view"
import { SITE_NAME } from "@/config/site"

export const metadata: Metadata = {
  title: 'Activities & Field Trips',
  description:
    'BCT College student activities and educational field trips — events, excursions, and hands-on learning experiences outside the classroom.',
  openGraph: {
    title: 'Activities & Field Trips | BCT College',
    description: 'Follow student activities and field trips at BCT College.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bct.edu.la/activities-travel',
  },
}

export default function ActivitiesTravelPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <ActivitiesTravelView />
    </main>
  )
}
