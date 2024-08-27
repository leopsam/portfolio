'use client'
import styled from 'styled-components'
import Image from 'next/image'
import site from './../../public/images/image.png'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal' // Linha adicionada

export function Project() {
  useEffect(() => {
    // Configuração do ScrollReveal
    ScrollReveal().reveal('.reveal', {
      origin: 'bottom', // Define a origem da animação
      distance: '50px', // Distância que o elemento vai se mover
      duration: 2000, // Duração da animação
      easing: 'ease-out', // Tipo de easing da animação
      opacity: 0, // Opacidade inicial
      reset: true, // Se a animação deve ser repetida toda vez que o elemento entra na visualização
    })
  }, [])
  return (
    <BodyProject id="projects" className="reveal">
      <h1>Projetos</h1>
      <BodyCardsProject className="reveal">
        <CardProject>
          <Image src={site} width={40} height={40} alt="" />
          <ContainerDescription>
            <h2>Titulo do projeto</h2>
            <p>
              Descrição do projeto maneiro que vamos olhar depois para ficar
              melhor do github, vou olhar todos eles Descrição do projeto
              maneiro que vamos olhar depois para ficar melhor do github, vou
              olhar todos eles Descrição do projeto maneiro que vamos olhar
              depois para ficar melhor do github, vou olhar todos eles melhor do
              github, vou olhar todos eles melhor do github, vou olhar todos
              eles...
            </p>
            <ContainerSkill>
              <h3>Habilidades: React, JavaScript, SASS, html</h3>
            </ContainerSkill>
            <ContainerLink>
              <a href="/">Acesse o site</a>
              <a href="/">Repositorio</a>
            </ContainerLink>
          </ContainerDescription>
        </CardProject>
        <CardProject>
          <Image src={site} width={40} height={40} alt="" />
          <ContainerDescription>
            <h2>Titulo do projeto</h2>
            <p>
              Descrição do projeto maneiro que vamos olhar depois para ficar
              melhor do github, vou olhar todos eles Descrição do projeto
              maneiro que vamos olhar depois para ficar melhor do github, vou
              olhar todos eles Descrição do projeto maneiro que vamos olhar
              depois para ficar melhor do github, vou olhar todos eles melhor do
              github, vou olhar todos eles melhor do github, vou olhar todos
              eles...
            </p>
            <ContainerSkill>
              <h3>Habilidades: React, JavaScript, SASS, html</h3>
            </ContainerSkill>
            <ContainerLink>
              <a href="/">Acesse o site</a>
              <a href="/">Repositorio</a>
            </ContainerLink>
          </ContainerDescription>
        </CardProject>
        <CardProject>
          <Image src={site} width={40} height={40} alt="" />
          <ContainerDescription>
            <h2>Titulo do projeto</h2>
            <p>
              Descrição do projeto maneiro que vamos olhar depois para ficar
              melhor do github, vou olhar todos eles Descrição do projeto
              maneiro que vamos olhar depois para ficar melhor do github, vou
              olhar todos eles Descrição do projeto maneiro que vamos olhar
              depois para ficar melhor do github, vou olhar todos eles melhor do
              github, vou olhar todos eles melhor do github, vou olhar todos
              eles...
            </p>
            <ContainerSkill>
              <h3>Habilidades: React, JavaScript, SASS, html</h3>
            </ContainerSkill>
            <ContainerLink>
              <a href="/">Acesse o site</a>
              <a href="/">Repositorio</a>
            </ContainerLink>
          </ContainerDescription>
        </CardProject>
      </BodyCardsProject>
    </BodyProject>
  )
}
const BodyProject = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 20px 0px 30px 0px;
  }
`
const BodyCardsProject = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
`
const ContainerLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
const ContainerSkill = styled.div`
  width: 100%;
  display: flex;
  h3 {
    font-size: 12px;
  }
`
const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: 300px;
  box-sizing: border-box;
  padding: 20px;
`
const CardProject = styled.div`
  background-color: var(--color-background);
  border-radius: 15px;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.35);
  overflow: hidden;
  height: 490px;
  width: 290px;
  margin: 10px;
  img {
    width: 100%;
    height: 180px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  h2 {
    font-family: var(--font-bai-jamjuree);
    font-size: 21px;
  }
  p {
    line-height: 1.5;
    font-size: 12px;
    color: var(--color-text-secondary);
  }
  a {
    text-decoration: none;
    color: var(--color-text-secondary);
  }
`
