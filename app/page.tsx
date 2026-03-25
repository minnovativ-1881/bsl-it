import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import BlogPreview from '@/components/BlogPreview'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <HowItWorks />
      <Testimonials />
      <About />
      <BlogPreview />
      <FinalCTA />
      <Footer />
    </main>
  )
}
