import { BriefcaseBusiness } from 'lucide-react'
import {
  BodyExperience,
  TopSections,
  TitlePage,
  Line,
  BodyCardsExperience,
  CardExperience,
  TitleExperience,
  HeaderExperience,
  ContainerP,
} from './experienceStyles'

export default function Experience() {
  return (
    <BodyExperience id="experience">
      <TopSections>
        <TitlePage>
          <Line />
          <h1>Experiência</h1>
          <Line />
        </TitlePage>
      </TopSections>
      <BodyCardsExperience>
        <CardExperience>
          <HeaderExperience>
            <TitleExperience>
              <BriefcaseBusiness />
              <h2>&nbsp;Desenvolvedor full stack (Driven.t)</h2>
            </TitleExperience>
            <h3>Projetos Driven · Freelance</h3>
            <h4>abr de 2023 - mai de 2023 · 2 meses</h4>
          </HeaderExperience>
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
            </p>
          </ContainerP>
        </CardExperience>

        <CardExperience>
          <HeaderExperience>
            <TitleExperience>
              <BriefcaseBusiness />
              <h2>&nbsp;Desenvolvedor full stack (LagGames)</h2>
            </TitleExperience>
            <h3>Projetos Driven · Freelance</h3>
            <h4>jan de 2023 - fev de 2023 · 2 meses</h4>
          </HeaderExperience>
          <ContainerP>
            <p>
              Desenvolvi o projeto LagGames num time com outros 2
              desenvolvedores, seguindo a metodologia ágil como dailys e scrum
            </p>
          </ContainerP>
        </CardExperience>

        <CardExperience>
          <HeaderExperience>
            <TitleExperience>
              <BriefcaseBusiness />
              <h2>
                &nbsp;Prestador de serviços para o Grupo Saint Gobain, pela
                Vigban
              </h2>
            </TitleExperience>
            <h3>Saint-Gobain Brasil · Tempo integral</h3>
            <h4>jan de 2020 - nov de 2022 · 2 anos 11 meses</h4>
          </HeaderExperience>
          <ContainerP>
            <p>
              Na empresa Saint Gobain, trabalhei como responsável por
              requisições no sistema SAP. Mantive contato com fornecedores e
              adquiri habilidades em gerenciamento de estoque e cadeia de
              suprimentos. Desenvolvi conhecimento em SAP e aprimorei
              habilidades de organização e comunicação.
            </p>
          </ContainerP>
        </CardExperience>

        <CardExperience>
          <HeaderExperience>
            <TitleExperience>
              <BriefcaseBusiness />
              <h2>&nbsp;Instructor de cursos</h2>
            </TitleExperience>
            <h3>Cedaspy</h3>
            <h4>fev de 2018 - nov de 2019 · 1 ano 10 meses</h4>
          </HeaderExperience>
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
        </CardExperience>

        <CardExperience>
          <HeaderExperience>
            <TitleExperience>
              <BriefcaseBusiness />
              <h2>&nbsp;Estagiário</h2>
            </TitleExperience>
            <h3>NUDE Agency</h3>
            <h4>jun de 2013 - jul de 2013 · 2 meses</h4>
          </HeaderExperience>
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
        </CardExperience>
      </BodyCardsExperience>
    </BodyExperience>
  )
}
