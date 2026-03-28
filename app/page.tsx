import Navbar from "@/components/layout/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Vision from "@/components/sections/vision"
import Programs from "@/components/sections/programs"
import Schedule from "@/components/sections/schedule"
import WhyBCT from "@/components/sections/why-bct"
import Admissions from "@/components/sections/admissions"
// import ContactFooter from "@/components/layout/contact-footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Programs />
      <Schedule />
      <WhyBCT />
      <Admissions />
    </main>
  )
}
