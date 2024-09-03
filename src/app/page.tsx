import { Academic } from '@/Pages/Academic'
import { Banner } from '@/Pages/Banner'
import { Header } from '@/Pages/Header'
import { Project } from '@/Pages/Project'
import { Stacks } from '@/Pages/Stacks'

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Project />
      <Stacks />
      <Academic />
    </main>
  )
}
