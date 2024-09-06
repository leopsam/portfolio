import Image from 'next/image'
import photo from './../../../public/images/photo.png'
import { Linkedin, Github, Instagram, Mail } from 'lucide-react'
import {
  Social,
  Icon,
  BodyBanner,
  Container,
  StyledLinkPdf,
} from './bannerStyles'

export default function Banner() {
  return (
    <BodyBanner id="about">
      <Container>
        <h1>Oi, sou o Leonardo</h1>
        <h2>
          <span></span>
        </h2>
        <p>
          Um desenvolvedor apaixonado por tecnologia e inovação. Adoro criar
          soluções que facilitem a vida das pessoas, seja através de aplicações
          web, sistemas ou outras ferramentas digitais. Estou sempre em busca de
          novos desafios e oportunidades para aprender e crescer, tanto
          profissional quanto pessoalmente. Além de desenvolver, gosto de
          explorar novas tecnologias e me manter atualizado com as tendências do
          mercado. Estou focado em entregar trabalhos de alta qualidade, sempre
          com atenção aos detalhes e à experiência do usuário. E, claro, também
          valorizo muito a colaboração em equipe e o compartilhamento de
          conhecimento.
        </p>

        <StyledLinkPdf href="/pdf/cv.pdf" target="_blank" passHref>
          Curriculun Vitae pdf
        </StyledLinkPdf>

        <Social>
          <Icon
            href="https://www.linkedin.com/in/leonardo-pereira-sampaio/"
            target="_blank"
            passHref
          >
            <Linkedin />
          </Icon>
          <Icon href="https://github.com/leopsam" target="_blank" passHref>
            <Github />
          </Icon>
          <Icon
            href="https://www.instagram.com/leonardo2882"
            target="_blank"
            passHref
          >
            <Instagram />
          </Icon>
          <Icon
            href="mailto:leonardo.lps@outlook.com.br"
            target="_blank"
            passHref
          >
            <Mail />
          </Icon>
        </Social>
      </Container>
      <Image src={photo} alt="Foto de Leonardo Sampaio" />
    </BodyBanner>
  )
}
