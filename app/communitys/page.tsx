import type { Metadata } from "next"
import Navbar from "@/components/layout/navbar"
import { CommunityView } from "@/components/sections/community-view"
import { SITE_NAME } from "@/config/site"

export const metadata: Metadata = {
  title: `ຊຸມຊົນ ແລະ ກິດຈະກຳ | ${SITE_NAME}`,
  description: `ຊຸມຊົນນັກສຶກສາ ແລະ ກິດຈະກຳສ້າງເຄືອຂ່າຍ ຂອງ ${SITE_NAME} — ການເຂົ້າຮ່ວມງານ, ໃບຢັ້ງຢືນ, ແລະ ການພັດທະນາທັກສະ`,
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <CommunityView />
    </main>
  )
}
