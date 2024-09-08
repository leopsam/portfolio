'use client'
import Link from 'next/link'
import styled from 'styled-components'

const BodyBanner = styled.div`
  background-image: url('./images/banner.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  * {
    position: relative;
    z-index: 2;
  }
  img {
    height: 80vh;
    width: 35vw;
    object-fit: cover;
    overflow: visible;
    filter: drop-shadow(0px 20px 35px rgba(0, 0, 0, 0.5));
  }
`
const Container = styled.div`
  color: var(--color-white);
  width: calc(90% / 2);
  padding: 10px;
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
    margin: 20px 0 30px;
    line-height: 1.6;
    color: var(--color-gray);
  }
`
const StyledLinkPdf = styled(Link)`
  padding: 20px;
  border-radius: 40px;
  color: var(--color-white);
  font-size: 14px;
  text-decoration: none;
  background-color: var(--color-theme);
  &:hover {
    background-color: var(--color-text-secondary);
    cursor: pointer;
  }
  &:active {
    background-color: var(--color-theme);
    color: var(--color-black);
  }
`
const Social = styled.div`
  margin-top: 20px;
  height: 60px;
  width: 550px;
  color: var(--color-white);
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
  color: var(--color-white);
  &:hover {
    color: var(--color-theme);
    cursor: pointer;
  }
  &:active {
    color: var(--color-text-secondary);
  }
`

export { BodyBanner, Container, StyledLinkPdf, Social, Icon }
