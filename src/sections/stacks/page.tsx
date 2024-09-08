import {
  TopSections,
  TitlePage,
  Line,
  BodyStacks,
  ContainerStacks,
  Stack,
} from './stacksStyles'
import html from './../../../public/icones/icons8-html-480.svg'
import aws from './../../../public/icones/icons8-amazon-web-services-480.svg'
import css from './../../../public/icones/icons8-css-480.svg'
import figma from './../../../public/icones/icons8-figma-480.svg'
import javascript from './../../../public/icones/icons8-javascript-480.svg'
import nodejs from './../../../public/icones/icons8-nodejs-480.svg'
import prisma from './../../../public/icones/icons8-prisma-orma-480.svg'
import typescript from './../../../public/icones/icons8-texto-datilografado-480.svg'
import angular from './../../../public/icones/icons8-angular.svg'
import bootstrap from './../../../public/icones/icons8-bootstrap.svg'
import carregou from './../../../public/icones/icons8-carregou.svg'
import docker from './../../../public/icones/icons8-docker.svg'
import graficoql from './../../../public/icones/icons8-gráficoql.svg'
import mongo from './../../../public/icones/icons8-mongo-db-96.png'
import mysql from './../../../public/icones/icons8-mysql.svg'
import react from './../../../public/icones/icons8-nativo-de-reagir-480.svg'
import nextjs from './../../../public/icones/icons8-nextjs.svg'
import postgres from './../../../public/icones/icons8-postgres.svg'
import git from './../../../public/icones/icons8-git.svg'
import github from './../../../public/icones/icons8-github.svg'
import nginx from './../../../public/icones/icons8-nginx.svg'
import npm from './../../../public/icones/icons8-npm.svg'
import tailwindcss from './../../../public/icones/icons8-tailwindcss.svg'
import vite from './../../../public/icones/icons8-vite.svg'
import cicd from './../../../public/icones/cicd.png'
import express from './../../../public/icones/express.png'
import jest from './../../../public/icones/jest.png'
import jquery from './../../../public/icones/jquery.png'
import microservicos from './../../../public/icones/microservicos.png'
import sqlite from './../../../public/icones/Sqlite-square-icon.svg.png'
import Vue from './../../../public/icones/icons8-visualizar-js.svg'

import Image from 'next/image'

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
        <Stack>
          <Image src={html} alt="imagem html" />
          <h2>HTML</h2>
        </Stack>
        <Stack>
          <Image src={css} alt="imagem css" />
          <h2>CSS</h2>
        </Stack>
        <Stack>
          <Image src={javascript} alt="imagem javascript" />
          <h2>JavaScript</h2>
        </Stack>
        <Stack>
          <Image src={typescript} alt="imagem typescript" />
          <h2>TypeScript</h2>
        </Stack>
        <Stack>
          <Image src={nodejs} alt="imagem nodejs" />
          <h2>NodeJs</h2>
        </Stack>
        <Stack>
          <Image src={prisma} alt="imagem prisma" />
          <h2>Prisma</h2>
        </Stack>
        <Stack>
          <Image src={figma} alt="imagem figma" />
          <h2>Figma</h2>
        </Stack>
        <Stack>
          <Image src={jest} alt="imagem jest" />
          <h2>Jest</h2>
        </Stack>
        <Stack>
          <Image src={react} alt="imagem react" />
          <h2>React</h2>
        </Stack>
        <Stack>
          <Image src={express} alt="imagem express" />
          <h2>Express</h2>
        </Stack>
        <Stack>
          <Image src={mongo} alt="imagem mongo" />
          <h2>MongoDB</h2>
        </Stack>
        <Stack>
          <Image src={postgres} alt="imagem postgres" />
          <h2>Postgres</h2>
        </Stack>
        <Stack>
          <Image src={docker} alt="imagem docker" />
          <h2>Docker</h2>
        </Stack>
        <Stack>
          <Image src={aws} alt="imagem aws" />
          <h2>AWS</h2>
        </Stack>
        <Stack>
          <Image src={cicd} alt="imagem cicd" />
          <h2>CI/CD</h2>
        </Stack>
        <Stack>
          <Image src={carregou} alt="imagem carregou" />
          <h2>NestJs</h2>
        </Stack>
        <Stack>
          <Image src={microservicos} alt="imagem microservicos" />
          <h2>Microserviços</h2>
        </Stack>
        <Stack>
          <Image src={jquery} alt="imagem jquery" />
          <h2>Jquery</h2>
        </Stack>
        <Stack>
          <Image src={bootstrap} alt="imagem bootstrap" />
          <h2>Bootstrap</h2>
        </Stack>
        <Stack>
          <Image src={angular} alt="imagem angular" />
          <h2>Angular</h2>
        </Stack>
        <Stack>
          <Image src={mysql} alt="imagem mysql" />
          <h2>Mysql</h2>
        </Stack>
        <Stack>
          <Image src={vite} alt="imagem vite" />
          <h2>Vite</h2>
        </Stack>
        <Stack>
          <Image src={Vue} alt="imagem Vue" />
          <h2>Vue.js</h2>
        </Stack>
        <Stack>
          <Image src={git} alt="imagem git" />
          <h2>Git</h2>
        </Stack>
        <Stack>
          <Image src={github} alt="imagem github" />
          <h2>GitHub</h2>
        </Stack>
        <Stack>
          <Image src={npm} alt="imagem npm" />
          <h2>npm</h2>
        </Stack>
        <Stack>
          <Image src={nginx} alt="imagem nginx" />
          <h2>Nginx</h2>
        </Stack>
        <Stack>
          <Image src={tailwindcss} alt="imagem tailwindcss" />
          <h2>Tailwindcss</h2>
        </Stack>
        <Stack>
          <Image src={graficoql} alt="imagem graficoql" />
          <h2>GraphQL</h2>
        </Stack>
        <Stack>
          <Image src={nextjs} alt="imagem nextjs" />
          <h2>NextJs</h2>
        </Stack>
        <Stack>
          <Image src={sqlite} alt="imagem sqlite" />
          <h2>SQLite</h2>
        </Stack>
      </ContainerStacks>
    </BodyStacks>
  )
}
