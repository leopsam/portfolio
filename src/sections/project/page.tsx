import Image from 'next/image'
import siteone from './../../../public/images/banner.jpg'
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
          <CardProject>
            <Image src={siteone} alt="Imagem ilustrativa do projeto" />
            <ContainerDescription>
              <h2>Titulo do projeto</h2>
              <p>
                Descrição do projeto maneiro que vamos olhar depois para ficar
                melhor do github, vou olhar todos eles Descrição do projeto
                maneiro que vamos olhar depois para ficar melhor do github vou.
              </p>
              <ContainerSkill>
                <h3>Habilidades: React, JavaScript, SASS, html</h3>
              </ContainerSkill>
              <ContainerLink>
                <Icon href="/">
                  <Github /> Repositório
                </Icon>
                <Icon href="/">
                  <MonitorSmartphone /> {` `}Deploy
                </Icon>
              </ContainerLink>
            </ContainerDescription>
          </CardProject>
        </BodyCardsProject>
      </BodyProject>
    </main>
  )
}
