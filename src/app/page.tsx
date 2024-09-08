import Header from '@/components/Header'
import Project from '@/sections/project/page'
import Banner from '@/sections/banner/page'
import Stacks from '@/sections/stacks/page'
import Contact from '@/sections/contact/page'
import Academic from '@/sections/training-experience/page'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Header />
      <Banner />
      <Project />
      <Stacks />
      <Academic />
      <Contact />
      <Footer />
    </main>
  )
}
