'use client'
import styled from 'styled-components'
import ThemeToggle from '@/components/ThemeToggle'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header>
      <Nav $scrolled={scrolled}>
        <Logo href="/">&lt;leonardo.sampaio/&gt;</Logo>
        <HamburgerButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div />
          <div />
          <div />
        </HamburgerButton>
        <Menu $isOpen={isOpen}>
          <li>
            <StyledLink href="#about" onClick={() => setIsOpen(!isOpen)}>
              Sobre Mim
            </StyledLink>
          </li>
          <li>
            <StyledLink href="#projects" onClick={() => setIsOpen(!isOpen)}>
              Projetos
            </StyledLink>
          </li>
          <li>
            <StyledLink href="#stacks" onClick={() => setIsOpen(!isOpen)}>
              Habilidades
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="#training_experience"
              onClick={() => setIsOpen(!isOpen)}
            >
              Formação
            </StyledLink>
          </li>
          <li>
            <StyledLink href="#contact" onClick={() => setIsOpen(!isOpen)}>
              Contato
            </StyledLink>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </Menu>
      </Nav>
    </header>
  )
}

const Nav = styled.nav<{ $scrolled: boolean }>`
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${({ $scrolled }) =>
    $scrolled ? 'var(--color-black)' : 'transparent'};
  transition: background-color 0.3s ease;
  @media (max-width: 768px) {
    padding: 0 20px;
    background-color: var(--color-black);
  }
`
const Logo = styled.a`
  color: var(--color-white);
  text-decoration: none;
  font-family: var(--font-bai-jamjuree);
  font-size: 21px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`
const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 24px;
    height: 2px;
    background-color: var(--color-white);
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
      transform: ${({ $isOpen }) =>
        $isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    &:nth-child(3) {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
const Menu = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 60%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    background-color: var(--color-background);
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transform: ${({ $isOpen }) =>
      $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    li {
      padding: 1rem 2rem;
    }
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-gray);
  @media (max-width: 768px) {
    transition: color 0.3s linear;
  }
  &:hover {
    color: var(--color-theme);
    cursor: pointer;
    height: 10vh;
  }
  &:active {
    color: var(--color-text-secondary);
  }
`
