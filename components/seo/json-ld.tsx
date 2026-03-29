export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'BCT College for IT Education',
    alternateName: ['BCT College', 'BCT College Laos', 'ວິທະຍາໄລ ບີຊີທີ', 'ວິທະຍາໄລ ບີຊີທີ ເພື່ອການສຶກສາດ້ານໄອທີ'],
    url: 'https://bct.mistersee.shop',
    logo: 'https://bct.mistersee.shop/images/main-logo.png',
    image: 'https://bct.mistersee.shop/images/bct-main-bg.png',
    description:
      'BCT College is a leading higher education institution in Vientiane, Laos, offering 3-year diploma programs in IT Programming, English for IT & Business, and Political Science.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vientiane',
      addressCountry: 'LA',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Laos',
    },
    sameAs: [],
    hasOfferingCatalog: {
      '@type': 'OfferCatalog',
      name: 'Programs Offered',
      itemListElement: [
        {
          '@type': 'Course',
          name: 'IT - Programming',
          description: 'Computer Science & Software Engineering — 3-year higher diploma program',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'BCT College',
          },
          educationalLevel: 'Higher Diploma',
          timeRequired: 'P3Y',
          inLanguage: ['lo', 'en'],
        },
        {
          '@type': 'Course',
          name: 'English for IT & Business',
          description: '3-year English language diploma program for IT and business professionals',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'BCT College',
          },
          educationalLevel: 'Higher Diploma',
          timeRequired: 'P3Y',
          inLanguage: ['lo', 'en'],
        },
        {
          '@type': 'Course',
          name: 'Political Science — Social Sciences',
          description: '3-year higher diploma program in political science and social studies',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'BCT College',
          },
          educationalLevel: 'Higher Diploma',
          timeRequired: 'P3Y',
          inLanguage: 'lo',
        },
      ],
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BCT College',
    alternateName: 'ວິທະຍາໄລ ບີຊີທີ',
    url: 'https://bct.mistersee.shop',
    inLanguage: ['lo', 'en'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
