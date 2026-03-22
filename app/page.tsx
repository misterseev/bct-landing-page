import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Vision from "@/components/vision"
import Programs from "@/components/programs"
import Schedule from "@/components/schedule"
import WhyBCT from "@/components/why-bct"
import Admissions from "@/components/admissions"
// import ContactFooter from "@/components/contact-footer"

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
