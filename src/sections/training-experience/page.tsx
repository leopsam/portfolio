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

import data from './trainingExperienceData.json'

const icons = {
  GraduationCap,
  BriefcaseBusiness,
}

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
        {data.map(item => {
          const Icon = icons[item.icon as keyof typeof icons]
          return (
            <CardAcademic key={item.id}>
              <HeaderCardAcadenic>
                <TitleCardAcademic>
                  <h2>
                    {' '}
                    <Icon />
                    &nbsp;{item.name}
                  </h2>
                </TitleCardAcademic>
                <h3>
                  {item.type === 'education'
                    ? `Formação ${item.type}`
                    : item.type}
                </h3>
                <h4>{item.period}</h4>
              </HeaderCardAcadenic>
              {!item.link ? null : (
                <StyledLink
                  href={item.link ?? '/default-url'}
                  target="_blank"
                  passHref
                >
                  Acesse o site
                </StyledLink>
              )}
              <ContainerP>
                <p>{item.description}</p>
                {!item.competencies ? null : (
                  <h5>Competências: {item.competencies}</h5>
                )}
              </ContainerP>
            </CardAcademic>
          )
        })}
      </BodyCardsAcademics>
    </BodyAcademics>
  )
}
