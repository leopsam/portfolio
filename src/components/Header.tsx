'use client'
import styled from 'styled-components'
import ThemeToggle from '@/components/ThemeToggle'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

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
        <Menu>
          <li>
            <StyledLink href="#about">Sobre Mim</StyledLink>
          </li>
          <li>
            <StyledLink href="#projects">Projetos</StyledLink>
          </li>
          <li>
            <StyledLink href="#stacks">Habilidades</StyledLink>
          </li>
          <li>
            <StyledLink href="#training_experience">Formação</StyledLink>
          </li>
          <li>
            <StyledLink href="#contact">Contato</StyledLink>
          </li>
          <ThemeToggle />
        </Menu>
      </Nav>
    </header>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-gray);
  &:hover {
    color: var(--color-theme);
    cursor: pointer;
  }
  &:active {
    color: var(--color-text-secondary);
  }
`
const Nav = styled.nav<{ $scrolled: boolean }>`
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 110px;
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${({ $scrolled }) =>
    $scrolled ? 'var(--color-black)' : 'transparent'};
  transition: background-color 0.3s ease;
`
const Logo = styled.a`
  color: var(--color-white);
  text-decoration: none;
  font-family: var(--font-bai-jamjuree);
  font-size: 21px;
`
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 40%;
`
