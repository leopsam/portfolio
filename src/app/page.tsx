import { Academic } from '@/components/Academic'
import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import { Project } from '@/components/Project'
import { Stacks } from '@/components/Stacks'

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
