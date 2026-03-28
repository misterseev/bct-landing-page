"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, ArrowLeft } from "lucide-react"
import { AnimatedDotPattern } from "@/components/animated-dot-pattern"

const easeOut = [0.25, 0.4, 0.25, 1] as const
const viewportCard = { once: true, margin: "-40px" as const }

interface CommunityItem {
  id: string
  image: string
  tag: string
  tagColor: string
  title: string
  description: string[]
}

const COMMUNITY_ITEMS: CommunityItem[] = [
  {
    id: "c1",
    image: "/images/communitys/community-aws-cloud-day-lao.jpg",
    tag: "Cloud & Technology",
    tagColor: "bg-[rgba(14,165,233,0.12)] text-sky-700 border border-[rgba(14,165,233,0.25)]",
    title: "AWS Cloud Day Lao — ຮ່ວມງານເທັກໂນໂລຊີລະດັບສາກົນ",
    description: [
      "ນັກສຶກສາ ວິທະຍາໄລ ບີຊີທີ ໄດ້ຮ່ວມງານ AWS Cloud Day Lao ຊຶ່ງເປັນໜຶ່ງໃນງານດ້ານເທັກໂນໂລຊີທີ່ສຳຄັນທີ່ສຸດໃນ ສປປ ລາວ ທີ່ຈັດຂຶ້ນໂດຍ LAILAOLAB ICT Solution CO., LTD ງານດັ່ງກ່າວໄດ້ເປີດໂອກາດໃຫ້ຜູ້ເຂົ້າຮ່ວມໄດ້ຮຽນຮູ້ກ່ຽວກັບ Cloud Computing, Artificial Intelligence ແລະ ການນຳໃຊ້ AWS ໃນທຸລະກິດ.",
      "ການເຂົ້າຮ່ວມງານດັ່ງກ່າວ ບໍ່ພຽງແຕ່ຊ່ວຍໃຫ້ນັກສຶກສາໄດ້ຮັບຄວາມຮູ້ທາງດ້ານເທັກໂນໂລຊີທີ່ທັນສະໄໝ, ແຕ່ຍັງສ້າງໂອກາດ Networking ກັບຜູ້ຊ່ຽວຊານດ້ານ IT ຈາກທົ່ວປະເທດ ແລະ ຕ່າງປະເທດ.",
      "ສະຖາບັນ ບີຊີທີ ໃຫ້ຄວາມສຳຄັນກັບການເຂົ້າຮ່ວມງານລະດັບສາກົນ ເພື່ອຊ່ວຍໃຫ້ນັກສຶກສາໄດ້ສຳຜັດກັບ ecosystem ດ້ານ Cloud ທີ່ກຳລັງເຕີບໂຕໃນ ສປປ ລາວ.",
    ],
  },
  {
    id: "c2",
    image: "/images/communitys/community-work-skill-2025.jpg",
    tag: "ທັກສະວິຊາຊີບ",
    tagColor: "bg-[rgba(34,197,94,0.12)] text-green-700 border border-[rgba(34,197,94,0.25)]",
    title: "Work Skills ASEAN Manila2025 — ເວທີພັດທະນາທັກສະວຽກງານ",
    description: [
      "ໂຄງການ Work Skill 2025 ເປັນການອົບຮົມທັກສະທີ່ຈຳເປັນສຳລັບການເຮັດວຽກໃນຍຸກດິຈິຕອລ ທີ່ ສະຖາບັນ ບີຊີທີ ຈັດຂຶ້ນສຳລັບນັກສຶກສາ ແລະ ຜູ້ສຳເລັດການສຶກສາ. ກິດຈະກຳນີ້ຄອບຄຸມທັກສະດ້ານ Soft Skills, ການສື່ສານ, ການເຮັດວຽກເປັນທີມ ແລະ ການຄຸ້ມຄອງໂຄງການ.",
      "ນັກສຶກສາທີ່ເຂົ້າຮ່ວມໄດ້ຮັບການຝຶກຊ້ອມຜ່ານ Workshop ຮູບແບບ interactive ທີ່ຊ່ວຍໃຫ້ສາມາດນຳໃຊ້ທັກສະໄດ້ຢ່າງເປັນຮູບປະທຳ. ການຝຶກຊ້ອມດ້ວຍ scenario ຈາກສະຖານການຈິງ ຊ່ວຍໃຫ້ນັກສຶກສາມີຄວາມໝັ້ນໃຈໃນການເລີ່ມວຽກ.",
      "ຄວາມຕ້ອງການຂອງຕະຫຼາດແຮງງານໃນ ສປປ ລາວ ກຳລັງປ່ຽນແປງຢ່າງໄວວາ. ການສ້າງທັກສະທີ່ຫຼາກຫຼາຍຈຶ່ງເປັນສ່ວນສຳຄັນໃນຫຼັກສູດຂອງ ບີຊີທີ ເພື່ອໃຫ້ນັກສຶກສາພ້ອມຮັບໂອກາດ.",
    ],
  },
  {
    id: "c3",
    image: "/images/communitys/community-council-meeting.jpg",
    tag: "ສະພານັກສຶກສາ",
    tagColor: "bg-brand-dim text-brand border border-[rgba(242,13,73,0.2)]",
    title: "ກອງປະຊຸມສະພານັກສຶກສາ — ສ້າງຜູ້ນຳຮຸ່ນໃໝ່",
    description: [
      "ສະພານັກສຶກສາ ວິທະຍາໄລ ບີຊີທີ ຈັດກອງປະຊຸມເປັນປະຈຳເພື່ອໃຫ້ນັກສຶກສາໄດ້ເຂົ້າຮ່ວມໃນການຕັດສິນໃຈ ແລະ ການວາງແຜນກິດຈະກຳຕ່າງໆຂອງສະຖາບັນ. ການຂຶ້ນດຳລົງຕຳແໜ່ງໃນສະພາຊ່ວຍພັດທະນາທັກສະຜູ້ນຳໃຫ້ກັບນັກສຶກສາ.",
      "ໃນກອງປະຊຸມ ຜູ້ຕາງໜ້ານັກສຶກສາແຕ່ລະຊັ້ນປີ ສາມາດນຳສະເໜີຄຳຄິດ ຄຳເຫັນ ແລະ ຂໍ້ສະເໜີ ເພື່ອພັດທະນາສະພາບແວດລ້ອມການຮຽນ-ການສອນ. ທຸກຄຳຄິດເຫັນຈະໄດ້ຮັບການພິຈາລະນາຢ່າງຈິງຈັງ.",
      "ຂະບວນການດັ່ງກ່າວ ນອກຈາກຈະໄດ້ຮຽນຮູ້ທັກສະ Leadership ແລ້ວ ຍັງສ້າງຄວາມສາມັກຄີ ແລະ ຈິດສຳນຶກຮ່ວມເປັນເຈົ້າຂອງໃຫ້ກັບນັກສຶກສາທຸກຄົນ.",
    ],
  },
  {
    id: "c4",
    image: "/images/communitys/seevang-certificate-bct.jpg",
    tag: "ໃບຍ້ອງຍໍ",
    tagColor: "bg-[rgba(217,119,6,0.12)] text-amber-700 border border-[rgba(217,119,6,0.25)]",
    title: "ງານແຂ່ງຂັນ ພັດທະນາທັກສະ ໃນດ້ານ Web Development ທີ່ ວິທະຍາໄລ ເຕັກນິກແຂວງວຽງຈັນ ປີ 2024",
    description: [
      "ໜຶ່ງໃນໂມງທີ່ໜ້າພູມໃຈທີ່ສຸດຂອງ ວິທະຍາໄລ ບີຊີທີ ຄືການທີ່ນັກສຶກສາສຳເລັດ ແລະ ຂົ້ວອັນດັບ 01 ການພັດທະນາ Web site ເຊິ່ງໄດ້ຮັບໃບຍ້ອງຍໍ ຈາກ ວິທະຍາໄລ ເຕັກນິກແຂວງວຽງຈັນ ເປັນສັນຍາລັກຂອງຄວາມພະຍາຍາມ ແລະ ຄວາມມຸ່ງໝັ້ນໃນການຮຽນ.",
      "ໃນງານມອບໃບຍ້ອງຍໍ ບີຊີທີ ໄດ້ຮ່ວມງານກັບ MisterSee VANG ຜູ້ທີ່ເປັນຕາງໜ້ານັກສຶກສາ ແລະ ເປັນສັນຍາລັກໃນການສ້າງແຮງບັນດານໃຈໃຫ້ກັບຄົນໜຸ່ມລາວ ໃນການຮຽນດ້ານ IT. ສະຖາບັນ ບີຊີທີ ເຊື່ອໝັ້ນວ່າໃບຍ້ອງຍໍ ຄືສ່ວນໜຶ່ງຂອງການເດີນທາງ ບໍ່ແມ່ນຈຸດສິ້ນສຸດ" 
    ],
  },
  {
    id: "c6",
    image: "/images/communitys/communiti-deploma-2023.jpg",
    tag: "ສຳເລັດການສຶກສາ",
    tagColor: "bg-[rgba(217,119,6,0.12)] text-amber-700 border border-[rgba(217,119,6,0.25)]",
    title: "ພິທີມອບໃບຢັ້ງຢືນ 2023 — ວັນທີ່ໜ້າຈົດຈຳ",
    description: [
      "ພິທີມອບໃບຢັ້ງຢືນ 2023 ເປັນວັນທີ່ໜ້າຕື່ນເຕັ້ນ ແລະ ໜ້ານາພູມໃຈ ທັງສຳລັບນັກສຶກສາ, ຄອບຄົວ ແລະ ທີມງານ ວິທະຍາໄລ ບີຊີທີ. ພາຍໃຕ້ດວງທາດຜ່ອງໃສ, ນັກສຶກສາໄດ້ຮ່ວມເຊລີບເຣດຜົນສຳເລັດຂອງຕົນ.",
      "ໃນການສຳເລັດຮຸ່ນ 2023 ນີ້ ນັກສຶກສາໄດ້ຮຽນຮູ້ຜ່ານປະສົບການຈິງ ທັງ Project, Internship ແລະ ຄ້ວາຄ້ອນໃນຫ້ອງຮຽນ. ຄວາມຮູ້ ແລະ ທັກສະທີ່ສ່ຽວໄດ້ຈາກ 3 ປີ ແມ່ນພ້ອມທີ່ຈະໄດ້ຮັບໃຊ້ຕະຫຼາດແຮງງານ.",
      "ສຳລັບ ວິທະຍາໄລ ບີຊີທີ, ທຸກຄັ້ງທີ່ນັກສຶກສາສຳເລັດການສຶກສາ ຄືຄວາມສຳເລັດຮ່ວມກັນ. ສະຖາບັນຍັງຄົງຕິດຕາມ ສ້າງໂອກາດ ແລະ ສ່ວນຮ່ວມໃຫ້ Alumni ທຸກຄົນ.",
    ],
  },
]

function CommunityCard({ item, index }: { item: CommunityItem; index: number }) {
  const imageOnRight = index % 2 === 1
  const imageFloatClass = imageOnRight
    ? "max-md:float-none md:float-right md:ml-6 md:mb-3"
    : "max-md:float-none md:float-left md:mr-6 md:mb-3"

  return (
    <motion.article
      className="flow-root py-6 md:py-8 lg:py-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportCard}
      transition={{ duration: 0.6, ease: easeOut, delay: index * 0.06 }}
    >
      <div
        className={`relative mb-4 h-56 w-full shrink-0 overflow-hidden bg-[#EEF2F6] md:h-80 md:w-[min(560px,48%)] ${imageFloatClass}`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 560px"
          priority={index < 2}
        />
      </div>

      <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${item.tagColor}`}>
        {item.tag}
      </span>

      <h3 className="mt-3 text-xl font-bold text-navy md:text-2xl text-balance">{item.title}</h3>

      <div className="mt-3 space-y-3 text-slate leading-relaxed text-base md:text-[17px]">
        {item.description.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </motion.article>
  )
}

export function CommunityView() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <motion.header
        className="relative overflow-hidden border-b border-[#E2E8F0] bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <AnimatedDotPattern gap={20} dotOpacity={0.18} durationSec={12} />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.08 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-brand transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              ກັບໜ້າຫຼັກ
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
            <motion.div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.12 }}
            >
              <Users className="h-7 w-7" aria-hidden />
            </motion.div>

            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.15 }}
            >
              <p className="text-brand font-semibold text-sm tracking-wide mb-2">ຊີວິດນັກສຶກສາ</p>
              <h1 className="font-black text-3xl md:text-4xl text-navy text-balance leading-tight">
                ຊຸມຊົນ ແລະ ເຄືອຂ່າຍ ບີຊີທີ
              </h1>
              <p className="mt-4 text-slate text-base md:text-lg leading-relaxed">
                ກ້າວທີ່ຢູ່ນອກຫ້ອງຮຽນ — ການເຂົ້າຮ່ວມງານ, ການສ້າງເຄືອຂ່າຍ ແລະ ກິດຈະກຳທີ່ຊ່ວຍຂະຫຍາຍໂລກທັດສະນະ
                ຂອງນັກສຶກສາ <span className="font-semibold text-navy-mid">ວິທະຍາໄລ ບີຊີທີ</span> ໃຫ້ກ້າວໄປໄກກວ່າ.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="sr-only">ລາຍການກິດຈະກຳຊຸມຊົນ</h2>
        <ul className="flex flex-col list-none p-0 m-0 divide-y divide-[#E2E8F0]">
          {COMMUNITY_ITEMS.map((item, index) => (
            <li key={item.id}>
              <CommunityCard item={item} index={index} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
