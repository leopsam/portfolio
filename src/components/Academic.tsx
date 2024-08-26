'use client'
import styled from 'styled-components'

export function Academic() {
  return (
    <BodyAcademics id="training">
      <h1>Formação Acadêmica</h1>
      <CardAcademic>
        <HeaderCardAcadenic>
          <h2>Driven Education</h2>
          <h3>Software Engineer, Formação Dev Full Stack Completo</h3>
          <h4>set de 2022 - jul de 2023</h4>
        </HeaderCardAcadenic>
        <ContainerP>
          <p>• Formação intensiva de +1.000h focadas em projetos práticos. </p>

          <p>
            • +25 projetos práticos nas tecnologias: HTML, CSS, Javascript
            (React, Node.js, Typescript e Prisma).{' '}
          </p>

          <p>
            • Fundamentos da engenharia de software: lógica de programação,
            algoritmos, estrutura de dados, orientação a objetos, arquitetura,
            otimização, performance e clean code.{' '}
          </p>

          <p>
            • Bancos de dados relacionais e não relacionais com Postgres, Mongo
            e Redis.{' '}
          </p>

          <p>• Princípios de DevOps com GitHub Actions, Docker e AWS. </p>

          <p>
            • Testes unitários, integração e ponta a ponta com Jest, SuperTest e
            Cypress.{' '}
          </p>

          <p>
            • Trabalhos em equipe usando metodologias ágeis (Scrum), Git, Slack,
            Trello, Zoom, colaborando, dando e recebendo feedbacks{' '}
          </p>

          <p>
            • Desenvolvimento de competências comportamentais e habilidades
            profissionais (soft skills). • Formação intensiva de +1.000h focadas
            em projetos práticos.{' '}
          </p>

          <h5>
            Competências: vercel · Desenvolvimento de back-end · Redis · CSS ·
            PeopleSoft · TypeScript · Prisma · Programação orientada a objetos
            (POO) · SQL · Desenvolvimento full stack · MongoDB · Competências
            interpessoais · Programação (computação) · JavaScript · Express.js ·
            Docker · PostgreSQL · NestJS · HTML5 · Node.js
          </h5>
        </ContainerP>

        <a href="/">Site Driven Education</a>
      </CardAcademic>
    </BodyAcademics>
  )
}
const ContainerP = styled.div`
  margin: 10px 0;
  p {
    font-size: 16px;
  }
  h5 {
    margin-top: 10px;
    font-size: 14px;
  }
`
const BodyAcademics = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 20px 0px 30px 0px;
  }
`
const CardAcademic = styled.div`
  height: 350px;
  width: 90vw;
  display: flex;
  flex-direction: column;
`
const HeaderCardAcadenic = styled.div`
  h2 {
    font-family: var(--font-bai-jamjuree);
    font-size: 21px;
  }
  h3 {
    font-size: 16px;
  }
  h4 {
    font-size: 12px;
    color: var(--color-text-secondary);
  }
`
