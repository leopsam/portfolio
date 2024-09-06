import { GraduationCap } from 'lucide-react'
import {
  BodyAcademics,
  TopSections,
  TitlePage,
  Line,
  BodyCardsAcademics,
  CardAcademic,
  TitleCardAcademic,
  HeaderCardAcadenic,
  ContainerP,
  StyledLink,
} from './academicStyles'

export default function Academic() {
  return (
    <BodyAcademics id="training">
      <TopSections>
        <TitlePage>
          <Line />
          <h1>Formação Acadêmica</h1>
          <Line />
        </TitlePage>
      </TopSections>
      <BodyCardsAcademics>
        {/* Driven */}
        <CardAcademic>
          <HeaderCardAcadenic>
            <TitleCardAcademic>
              <GraduationCap />
              <h2>&nbsp;Driven Education</h2>
            </TitleCardAcademic>
            <h3>Software Engineer, Formação Dev Full Stack Completo</h3>
            <h4>set de 2022 - jul de 2023</h4>
          </HeaderCardAcadenic>
          <StyledLink
            href="https://www.driven.com.br/"
            target="_blank"
            passHref
          >
            Acesse o site
          </StyledLink>
          <ContainerP>
            <p>
              Formação intensiva de +1.000h focadas em projetos práticos. +25
              projetos práticos nas tecnologias: HTML, CSS, Javascript (React,
              Node.js, Typescript e Prisma). Fundamentos da engenharia de
              software: lógica de programação, algoritmos, estrutura de dados,
              orientação a objetos, arquitetura, otimização, performance e clean
              code. Bancos de dados relacionais e não relacionais com Postgres,
              Mongo e Redis. Princípios de DevOps com GitHub Actions, Docker e
              AWS. Testes unitários, integração e ponta a ponta com Jest,
              SuperTest e Cypress. Trabalhos em equipe usando metodologias ágeis
              (Scrum), Git, Slack, Trello, Zoom, colaborando, dando e recebendo
              feedbacks. Desenvolvimento de competências comportamentais e
              habilidades profissionais (soft skills). Formação intensiva de
              +1.000h focadas em projetos práticos.
            </p>
            <h5>
              Competências: vercel · Desenvolvimento de back-end · Redis · CSS ·
              PeopleSoft · TypeScript · Prisma · Programação orientada a objetos
              (POO) · SQL · Desenvolvimento full stack · MongoDB · Competências
              interpessoais · Programação (computação) · JavaScript · Express.js
              · Docker · PostgreSQL · NestJS · HTML5 · Node.js
            </h5>
          </ContainerP>
        </CardAcademic>

        {/* Faveni */}
        <CardAcademic>
          <HeaderCardAcadenic>
            <TitleCardAcademic>
              <GraduationCap />
              <h2>&nbsp;Faculdade Venda Nova do Imigrante – FAVENI</h2>
            </TitleCardAcademic>
            <h3>Pós-graduação Lato Sensu, Segurança da Informação</h3>
            <h4>mar de 2021 - set de 2022</h4>
          </HeaderCardAcadenic>
          <StyledLink href="https://faveni.edu.br/" target="_blank" passHref>
            Acesse o site
          </StyledLink>
          <ContainerP>
            <p>
              A segurança da informação está diretamente relacionada com
              proteção de um conjunto de informações, no sentido de preservar o
              valor que possuem para um indivíduo ou uma organização. São
              propriedades básicas da segurança da informação:
              confidencialidade, integridade, disponibilidade, autenticidade e
              legalidade.
            </p>
            <h5>
              Competências: Gestão de Segurança da Informação · Proteção de
              Dados e Privacidade · Criptografia · Análise de Vulnerabilidades e
              Gestão de Incidentes · Segurança de Redes · Governança, Risco e
              Conformidade (GRC) · Segurança de Aplicações e Desenvolvimento
              Seguro · Forense Digital · Gestão de Continuidade de Negócios e
              Recuperação de Desastres · Educação e Conscientização em
              Segurança.
            </h5>
          </ContainerP>
        </CardAcademic>

        {/* Alura */}
        <CardAcademic>
          <HeaderCardAcadenic>
            <TitleCardAcademic>
              <GraduationCap />
              <h2>&nbsp;Alura</h2>
            </TitleCardAcademic>
            <h3>
              Curso Técnico Integrado, Programação de Computadores - Geral
            </h3>
            <h4>mai de 2022 - mai de 2025</h4>
          </HeaderCardAcadenic>
          <StyledLink href="https://www.alura.com.br/" target="_blank" passHref>
            Acesse o site
          </StyledLink>
          <ContainerP>
            <p>
              A Alura é um ambiente completo para você estudar os mais variados
              temas relacionados à tecnologia, com um acervo de linguagem de
              progamação vasta.
            </p>
            <h5>
              Competências: Styled-components · vercel · Bootstrap · Next.js ·
              Desenvolvimento de back-end · Redis · CSS · · TypeScript · Prisma
              · Programação orientada a objetos (POO) · SQL · MongoDB ·
              Programação (computação) · JavaScript · Express.js · PostgreSQL ·
              HTML5 · Node.js
            </h5>
          </ContainerP>
        </CardAcademic>

        {/* Puc */}
        <CardAcademic>
          <HeaderCardAcadenic>
            <TitleCardAcademic>
              <GraduationCap />
              <h2>&nbsp;Pontifícia Universidade Católica de Minas Gerais</h2>
            </TitleCardAcademic>
            <h3>Pós-graduação Lato Sensu, Engenharia de Software</h3>
            <h4>fev de 2016 - mai de 2017</h4>
          </HeaderCardAcadenic>
          <StyledLink href="https://www.pucminas.br/" target="_blank" passHref>
            Acesse o site
          </StyledLink>
          <ContainerP>
            <p>
              Pós-Graduação Incompleta Tecnologia da Informação, TI. Titulo:
              Engenharia de Software . Universidade Católica de Minas Gerais,
              PUC Minas Virtual, Brasil. --Incompleto--
            </p>
          </ContainerP>
        </CardAcademic>

        {/* Uniabeu */}
        <CardAcademic>
          <HeaderCardAcadenic>
            <TitleCardAcademic>
              <GraduationCap />
              <h2>
                &nbsp;Associação Brasileira de Ensino Universitário Abeu –
                UNIABEU
              </h2>
            </TitleCardAcademic>
            <h3>
              Graduação, Técnico em Análise e Desenvolvimento de Sistema, TADS
            </h3>
            <h4>fev de 2013 - jun de 2016</h4>
          </HeaderCardAcadenic>
          <StyledLink href="https://uniabeu.edu.br/" target="_blank" passHref>
            Acesse o site
          </StyledLink>
          <ContainerP>
            <p>
              O analista e desenvolvedor de sistemas é o profissional
              responsável por desenvolver, projetar, analisar, implementar e
              realizar a manutenção de sistemas de informação de diversos
              setores. Sistemas de informação são aqueles responsáveis por
              gerir, organizar e manipular informações e dados pertinentes a um
              setor específico ou mesmo a uma empresa inteira.
            </p>
            <h5>
              Competências: Desenvolvimento de Software · Análise de Sistemas ·
              Banco de Dados · Testes e Qualidade de Software · Segurança de
              Redes · Segurança da Informação · Gestão de Projetos de TI ·
              Infraestrutura e Redes de Computadores · Interface de Usuário (UI)
              e Experiência de Usuário (UX) · Manutenção e Suporte a Sistemas ·
              Inovação e Adaptação Tecnológica.
            </h5>
          </ContainerP>
        </CardAcademic>
      </BodyCardsAcademics>
    </BodyAcademics>
  )
}
