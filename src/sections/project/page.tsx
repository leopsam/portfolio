import Image from 'next/image'
import data from './projectData.json'
import { Github, MonitorSmartphone } from 'lucide-react'
import {
  BodyProject,
  TopSections,
  TitlePage,
  Line,
  BodyCardsProject,
  CardProject,
  ContainerDescription,
  ContainerSkill,
  ContainerLink,
  Icon,
} from './projectStyles'

export default function Project() {
  return (
    <main>
      <BodyProject id="projects">
        <TopSections>
          <TitlePage>
            <Line />
            <h1>Projetos</h1>
            <Line />
          </TitlePage>
          <p>
            Bem-vindo à seção de projetos do meu portfólio! Aqui você encontrará
            uma vasta gama de projetos que abrangem diferentes áreas e
            tecnologias. Meu portfólio é um reflexo da minha jornada como
            desenvolvedor, onde exploro e aplico uma variedade de habilidades e
            tecnologias para criar soluções inovadoras e impactantes. Os
            projetos apresentados aqui são diversos em termos de complexidade e
            propósito. Desde aplicações front-end visualmente impressionantes e
            intuitivas, até soluções back-end robustas e escaláveis, cada
            projeto oferece uma visão única das minhas habilidades e
            criatividade. Além disso, há uma gama de projetos full-stack que
            demonstram minha capacidade de construir sistemas completos,
            integrando tanto a parte do cliente quanto do servidor.
          </p>
        </TopSections>
        <BodyCardsProject>
          {data.map((project, index) => (
            <CardProject key={index}>
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={800}
                height={600}
              />
              <ContainerDescription>
                <h2>{project.description.title}</h2>
                <p>{project.description.text}</p>
                <ContainerSkill>
                  <h3>Habilidades: {project.skills}</h3>
                </ContainerSkill>
                <ContainerLink>
                  <Icon href={project.links.repository.href}>
                    <Github /> Repositório
                  </Icon>
                  <Icon href={project.links.deploy.href}>
                    <MonitorSmartphone /> Deploy
                  </Icon>
                </ContainerLink>
              </ContainerDescription>
            </CardProject>
          ))}
        </BodyCardsProject>
      </BodyProject>
    </main>
  )
}
