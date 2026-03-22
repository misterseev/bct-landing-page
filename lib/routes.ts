/** ຊື່ສະຖາບັນສຳລັບໃຊ້ໃນ metadata ແລະ ສ່ວນຫົວ (ພາສາລາວສຸພາບ) */
export const SITE_NAME = "ວິທະຍາໄລ ບີຊີທີ ເພື່ອການສຶກສາດ້ານໄອທີ" as const
export const SITE_NAME_SHORT = "ວິທະຍາໄລ ບີຊີທີ" as const

/**
 * ການກຳນົດເສັ້ນທາງແອັບ — ໃຊ້ຮ່ວມກັນທົ່ວໂປຣເຈັກ
 *
 * ## ລິ້ງໄປ section ໃນໜ້າຫຼັກ (/)
 * ຕ້ອງໃຊ້ **path absolute** ຮູບແບບ `/<#fragment>` (ເຊັ່ນ `/#about`)
 * ບໍ່ໃຊ້ແຕ່ `#about` ຢ່າງດຽວ — ບໍ່ດັ່ງນັ້ນເມື່ອຢູ່ `/notifications` ລິ້ງຈະກາຍເປັນ
 * `/notifications#about` ແລະ ບໍ່ກັບໄປໜ້າຫຼັກ.
 *
 * ອ້າງອີງແນວຄິດຄ້າຍ RFC 3986: fragment ຄູ່ກັບ path ທີ່ຊັດເຈນ (same-origin, absolute path).
 */
export const ROUTES = {
  home: "/",
  notifications: "/notifications",
  /** ກິດຈະກຳ ແລະ ທ່ອງທ່ຽວ — ຮູບຈາກ /images/events ແລະ /images/travels */
  activitiesTravel: "/activities-travel",
} as const

/**
 * Section ຢູ່ໜ້າຫຼັກ — ຕ້ອງກົງກັບ `id` ຂອງ `<section>` ໃນ components
 * (about, classrooms, schedule, why-bct, admissions, contact).
 * ລາຍການ news / news-list / careers / media ລໍຖ້າເພີ່ມ id ໃນໜ້າຫຼັກຕາມຕ້ອງການ.
 */
export const HOME = {
  about: "/#about",
  classrooms: "/#classrooms",
  schedule: "/#schedule",
  contact: "/#contact",
  whyBct: "/#why-bct",
  admissions: "/#admissions",
  news: "/#news",
  newsList: "/#news-list",
  careers: "/#careers",
  media: "/#media",
} as const
