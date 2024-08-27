'use client'
import { useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import photo from './../../public/images/photo.png'
import ScrollReveal from 'scrollreveal'
import { Moon } from 'lucide-react'

export function Banner() {
  useEffect(() => {
    ScrollReveal().reveal('.reveal-container', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      delay: 400,
      reset: true,
    })

    ScrollReveal().reveal('.reveal-image', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      delay: 900,
      reset: true,
    })
  }, [])

  return (
    <BodyBanner id="about">
      <Container className="reveal-container">
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
        <Button>Curriculun Vitae pdf</Button>
        <Social>
          <Icon>
            <Moon />
          </Icon>
          <Icon>
            <Moon />
          </Icon>
        </Social>
      </Container>
      <Image
        src={photo}
        alt="Foto de Leonardo Sampaio"
        className="reveal-image"
      />
    </BodyBanner>
  )
}
const Icon = styled.div`
  width: 50px;
  height: 50px;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-primary);
  background-color: red;
`

const Social = styled.div`
  margin: 10px 0;
  height: 60px;
  width: 550px;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-theme);
`
const Button = styled.button`
  margin: 10px 0;
  height: 40px;
  width: 150px;
  border: none;
  color: #ffffff;
  border-radius: 40px;
  background-color: var(--color-theme);
`
const BodyBanner = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  box-shadow: 0px 10px 10px 0 rgba(0, 0, 0, 0.35);
  img {
    height: 80vh;
    width: 35vw;
    object-fit: cover;
    overflow: visible;
    filter: drop-shadow(0px 20px 35px rgba(0, 0, 0, 0.5));
  }
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
  span {
    position: relative;
  }
  span::before {
    content: '';
    color: var(--color-theme);
    animation: words 20s infinite;
  }
  span::after {
    content: '';
    position: absolute;
    height: 100%;
    border-left: 2px solid var(--color-theme);
    right: -10px;
    animation:
      cursor 0.7s infinite,
      typing 20s steps(15) infinite;
    width: calc(100% + 15px);
    background-color: var(--color-background);
    transition: background-color 0.5s ease;
  }
  @keyframes typing {
    10%,
    15%,
    30%,
    35%,
    50%,
    55%,
    70%,
    75%,
    90%,
    95% {
      width: 0;
    }
    5%,
    20%,
    25%,
    40%,
    45%,
    60%,
    65%,
    80%,
    85% {
      width: calc(100% + 15px);
    }
  }

  @keyframes cursor {
    0% {
      border-left: 2px solid var(--color-background);
    }
  }

  @keyframes words {
    0%,
    20% {
      content: '<Programador />';
    }
    21%,
    40% {
      content: '<Pai />';
    }
    41%,
    60% {
      content: '<Marido />';
    }
    61%,
    80% {
      content: '<Gamer />';
    }
    81%,
    100% {
      content: '<Desenvolvedor Full Stack />';
    }
  }
  p {
    font-size: 14px;
    margin-top: 20px;
    line-height: 1.6;
    color: var(--color-text-secondary);
  }
`
