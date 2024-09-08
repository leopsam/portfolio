import { GraduationCap, BriefcaseBusiness } from 'lucide-react'
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
} from './trainingExperienceStyles'

export default function TrainingExperience() {
  return (
    <BodyAcademics id="training_experience">
      <TopSections>
        <TitlePage>
          <Line />
          <h1>Formação Acadêmica & Experiência</h1>
          <Line />
        </TitlePage>
      </TopSections>
      <BodyCardsAcademics>
        {/* Driven */}
        <CardAcademic>
          <HeaderCardAcadenic>
            <TitleCardAcademic>
              <h2>
                {' '}
                <GraduationCap />
                &nbsp;Driven Education
              </h2>
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
              <h2>
                <GraduationCap />
                &nbsp;Faculdade Venda Nova do Imigrante – FAVENI
              </h2>
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
              <h2>
                <GraduationCap />
                &nbsp;Alura
              </h2>
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
              <h2>
                <GraduationCap />
                &nbsp;Pontifícia Universidade Católica de Minas Gerais
              </h2>
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
              <h2>
                <GraduationCap />
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

        {/* Driven.t */}
        <CardAcademic>
          <HeaderCardAcadenic>
            <TitleCardAcademic>
              <h2>
                <BriefcaseBusiness />
                &nbsp;Desenvolvedor full stack (Driven.t)
              </h2>
            </TitleCardAcademic>
            <h3>Projetos Driven · Freelance</h3>
            <h4>abr de 2023 - mai de 2023 · 2 meses</h4>
          </HeaderCardAcadenic>
          <ContainerP>
            <p>
              O Driven.t é um poderoso gerenciador de eventos para eventos
              únicos. Ele permite que os usuários se cadastrem, escolham o tipo
              de ingresso (presencial ou online) e efetuem o pagamento. Para
              ingressos presenciais, os usuários também podem selecionar
              acomodação em hotéis cadastrados. O sistema oferece uma seleção de
              atividades disponíveis durante o evento, com restrições de horário
              e capacidade. Ele garante uma experiência conveniente e intuitiva
              para os usuários, facilitando o gerenciamento completo do evento.
              Desenvolvi o projeto Driven.t durante 3 sprints num time com 4
              desenvolvedores, seguindo a metodologia ágil como dailys e scrum;
              Desenvolvi um sistema intuitivo de seleção de tipos de ingresso,
              onde o usuário escolhe entre presencial com ou sem hotel, ou
              online, com seus respectivos preços; Desenvolvi o cadastro de
              cartão de crédito, utilizando a biblioteca react-credit-cards e
              styled-components para os estilos dos inputs; Desenvolvi a tela de
              resumo do hotel e quarto escolhido; Desenvolvi a função que
              permite o usuário se inscrever na tarefa caso exista vagas
              disponíveis, e se não existir vagas apresenta a mensagem de
              Esgotado; Tecnologias utilizadas: React, Node.js, Axios, Material
              UI, Express, Jest, Typescript, Javascript, styled-components,
              react-router-dom, dayjs, Prisma, bcrypt, Redis, PostgreSQL e
              jsonwebtoken; Repositório Back-end:
              https://github.com/Drivent-Projeto/drivent-backend Repositório
              Front-end: https://github.com/Drivent-Projeto/drivent-frontend
            </p>
          </ContainerP>
        </CardAcademic>

        {/* LagGames */}
        <CardAcademic>
          <HeaderCardAcadenic>
            <TitleCardAcademic>
              <h2>
                <BriefcaseBusiness />
                &nbsp;Desenvolvedor full stack (LagGames)
              </h2>
            </TitleCardAcademic>
            <h3>Projetos Driven · Freelance</h3>
            <h4>jan de 2023 - fev de 2023 · 2 meses</h4>
          </HeaderCardAcadenic>
          <ContainerP>
            <p>
              Desenvolvi o projeto LagGames num time com outros 2
              desenvolvedores, seguindo a metodologia ágil como dailys e scrum
              Desenvolvi um sistema intuitivo de e-commerce onde pode ser
              comprar jogos digitais, Utilizei o Trello para me organizar e
              criar tarefas atômicas, com essa abordagem, pude ter uma visão
              clara de todas as etapas do projeto e garantir que cada tarefa
              fosse concluída de forma eficiente, Tecnologias utilizadas: React,
              Node.js, Express, Javascript, styled-components, react-router-dom,
              bcrypt e MongoDB Repositório Back-end:
              https://github.com/gsdutra/projeto15-laggames-back Repositório
              Front-end: https://github.com/gsdutra/projeto15-laggames-front
            </p>
          </ContainerP>
        </CardAcademic>

        {/* Vigban */}
        <CardAcademic>
          <HeaderCardAcadenic>
            <TitleCardAcademic>
              <h2>
                <BriefcaseBusiness />
                &nbsp;Prestador de serviços para o Grupo Saint Gobain, pela
                Vigban
              </h2>
            </TitleCardAcademic>
            <h3>Saint-Gobain Brasil · Tempo integral</h3>
            <h4>jan de 2020 - nov de 2022 · 2 anos 11 meses</h4>
          </HeaderCardAcadenic>
          <ContainerP>
            <p>
              Na empresa Saint Gobain, trabalhei como responsável por
              requisições no sistema SAP. Mantive contato com fornecedores e
              adquiri habilidades em gerenciamento de estoque e cadeia de
              suprimentos. Desenvolvi conhecimento em SAP e aprimorei
              habilidades de organização e comunicação.
            </p>
          </ContainerP>
        </CardAcademic>

        {/* Cedaspy */}
        <CardAcademic>
          <HeaderCardAcadenic>
            <TitleCardAcademic>
              <h2>
                <BriefcaseBusiness />
                &nbsp;Instructor de cursos
              </h2>
            </TitleCardAcademic>
            <h3>Cedaspy</h3>
            <h4>fev de 2018 - nov de 2019 · 1 ano 10 meses</h4>
          </HeaderCardAcadenic>
          <ContainerP>
            <p>
              Na empresa Cedaspy, atuei como professor de informática,
              responsável pela arquitetura de rede e soluções do sistema
              integrado. Também assumi o papel de coordenador interino,
              coordenando equipes e garantindo o bom funcionamento das
              operações. Durante minha experiência, ministrei aulas abrangendo
              desenvolvimento de documentos, design gráfico, plataforma web,
              desenvolvimento de jogos e sites. Desenvolvi habilidades em
              ensino, gerenciamento de tecnologia e liderança.
            </p>
          </ContainerP>
        </CardAcademic>

        {/* NUDE */}
        <CardAcademic>
          <HeaderCardAcadenic>
            <TitleCardAcademic>
              <h2>
                <BriefcaseBusiness />
                &nbsp;Estagiário
              </h2>
            </TitleCardAcademic>
            <h3>NUDE Agency</h3>
            <h4>jun de 2013 - jul de 2013 · 2 meses</h4>
          </HeaderCardAcadenic>
          <ContainerP>
            <p>
              Na empresa CNI (Centro de Formação Profissional), tive a
              oportunidade de trabalhar como estagiário, cobrindo as férias de
              um professor. Durante esse período, ministrei aulas em diversas
              disciplinas, incluindo Montagem e Manutenção, Pacote Office,
              Windows, Internet, Digitação, HTML e IPD (Introdução ao
              Processamento de Dados).
            </p>
          </ContainerP>
        </CardAcademic>
      </BodyCardsAcademics>
    </BodyAcademics>
  )
}
