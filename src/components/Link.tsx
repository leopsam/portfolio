import styled from 'styled-components'
import NextLink from 'next/link'

type LinkProps = {
  children: string
  href: string
}

export function Link({ children, href }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <LinkMenu href={href}>{children}</LinkMenu>
    </NextLink>
  )
}

const LinkMenu = styled.a`
  text-decoration: none;
  color: #a0a0a0;
`
