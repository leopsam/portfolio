import data from './stacksData.json'
import Image from 'next/image'
import {
  TopSections,
  TitlePage,
  Line,
  BodyStacks,
  ContainerStacks,
  Stack,
} from './stacksStyles'

export default function Stacks() {
  return (
    <BodyStacks id="stacks">
      <TopSections>
        <TitlePage>
          <Line />
          <h1>Stacks</h1>
          <Line />
        </TitlePage>
        <p>
          Nesta seção, você encontrará as principais tecnologias e ferramentas
          que utilizo no meu desenvolvimento diário. Tenho experiência em
          back-end e front-end, trabalhando com linguagens de programação
          modernas, frameworks populares e bibliotecas que otimizam a criação de
          soluções eficientes e escaláveis. Cada stack que escolho é voltada
          para entregar produtos de alta qualidade, focando na performance, na
          experiência do usuário e na facilidade de manutenção.
        </p>
      </TopSections>
      <ContainerStacks>
        {data.map((stack, index) => (
          <Stack key={index}>
            <Image
              src={`https://res.cloudinary.com/dqgjhgn3s/image/upload/v1725760239/${stack.src}.png`}
              alt={stack.alt}
              width={30}
              height={30}
            />
            <h2>{stack.title}</h2>
          </Stack>
        ))}
      </ContainerStacks>
    </BodyStacks>
  )
}
