'use client'
import Link from 'next/link'
import styled from 'styled-components'

const BodyBanner = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
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
    margin: 20px 0 30px;
    line-height: 1.6;
    color: var(--color-text-secondary);
  }
`
const StyledLinkPdf = styled(Link)`
  padding: 20px;
  border-radius: 40px;
  color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  background-color: var(--color-theme);
  &:hover {
    background-color: var(--color-text-secondary);
    cursor: pointer;
  }
  &:active {
    background-color: var(--color-theme);
    color: black;
  }
`
const Social = styled.div`
  margin-top: 20px;
  height: 60px;
  width: 550px;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Icon = styled(Link)`
  width: 50px;
  height: 50px;
  font-size: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--color-text-primary);
  &:hover {
    color: var(--color-theme);
    cursor: pointer;
  }
  &:active {
    color: var(--color-text-secondary);
  }
`

export { BodyBanner, Container, StyledLinkPdf, Social, Icon }
