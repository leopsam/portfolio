'use client'
import styled from 'styled-components'
import ThemeToggle from '@/components/ThemeToggle'

export function Header() {
  return (
    <header>
      <Nav>
        <Logo href="/">&lt;leonardo.sampaio/&gt;</Logo>
        <Menu>
          <li>
            <Link href="#about">Sobre Mim</Link>
          </li>
          <li>
            <Link href="#projects">Projetos</Link>
          </li>
          <li>
            <Link href="#stacks">Habilidades</Link>
          </li>
          <li>
            <Link href="#training">Formação</Link>
          </li>
          <li>
            <Link href="#experience">Experiência</Link>
          </li>
          <li>
            <Link href="#contact">Contato</Link>
          </li>
          <ThemeToggle />
        </Menu>
      </Nav>
    </header>
  )
}

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
const Link = styled.a`
  text-decoration: none;
  color: #a0a0a0;
`
