'use client'
import styled from 'styled-components'
import ThemeToggle from '@/components/ThemeToggle'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Nav>
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
          {/* 
          <li>
            <StyledLink href="#training">Formação</StyledLink>
          </li>
          <li>
            <StyledLink href="#experience">Experiência</StyledLink>
          </li>*/}
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
  color: #a0a0a0;
  &:hover {
    color: var(--color-theme);
    cursor: pointer;
  }
  &:active {
    color: var(--color-text-secondary);
  }
`
const Nav = styled.nav`
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: var(--color-menu);
`
const Logo = styled.a`
  color: #e9e9e9;
  text-decoration: none;
  font-family: var(--font-bai-jamjuree);
  font-size: 21px;
`
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 500px;
`
