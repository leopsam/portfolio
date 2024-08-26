'use client'
import styled from 'styled-components'
import Image from 'next/image'
import perfil from './../../public/images/perfil.jpg'

export function Banner() {
  return (
    <BodyBanner id="about">
      <Container>
        <h1>Oi, sou o Leonardo</h1>
        <h2>Desenvolvedor</h2>
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
      </Container>
      <ContainerImage>
        <Image src={perfil} width={140} height={140} alt="" />
      </ContainerImage>
    </BodyBanner>
  )
}

const BodyBanner = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  box-shadow: 0px 10px 10px 0 rgba(0, 0, 0, 0.35);
`
const Container = styled.div`
  width: calc(100% / 2);
  padding: 50px;
  h1 {
    font-size: 48px;
    line-height: 1.2;
  }
  h2 {
    color: var(--color-theme);
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    font-size: 14px;
    margin-top: 20px;
    line-height: 1.6;
    color: var(--color-text-secondary);
  }
`
const ContainerImage = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, var(--color-theme), var(--color-theme));
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 50%;
    width: 220px;
    height: 220px;
    object-fit: cover;
  }
`
