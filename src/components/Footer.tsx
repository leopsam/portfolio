'use client'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Leonardo Sampaio. Todos os direitos reservados.</p>
    </FooterContainer>
  )
}
const FooterContainer = styled.footer`
  background-color: var(--color-black);
  color: var(--color-white);
  padding: 20px;
  p {
    text-align: center;
    font-size: 14px;
  }
`
