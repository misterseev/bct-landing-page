import type { Metadata } from "next"
import Navbar from "@/components/layout/navbar"
import { ActivitiesTravelView } from "@/components/sections/activities-travel-view"
import { SITE_NAME } from "@/config/site"

export const metadata: Metadata = {
  title: `ກິດຈະກຳ ແລະ ທ່ອງທ່ຽວ | ${SITE_NAME}`,
  description:
    `ຮູບພາບກິດຈະກຳ ແລະ ການທັດສະນະສຶກສາ ທ່ອງທ່ຽວຂອງນັກສຶກສາ ${SITE_NAME} — ຈັດງານ ແລະ ປະສົບການຮຽນຮູ້ນອກສະຖານທີ່`,
  openGraph: {
    title: `ກິດຈະກຳ ແລະ ທ່ອງທ່ຽວ | ${SITE_NAME}`,
    description: `ຕິດຕາມກິດຈະກຳ ແລະ ທ່ອງທ່ຽວຂອງ ${SITE_NAME}`,
    type: "website",
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
