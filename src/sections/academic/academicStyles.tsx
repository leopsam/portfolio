'use client'
import Link from 'next/link'
import styled from 'styled-components'

const BodyAcademics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TopSections = styled.div`
  margin: 80px 25px 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const TitlePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  h1 {
    font-family: var(--font-bai-jamjuree);
    width: 600px;
    text-align: center;
  }
`
const Line = styled.hr`
  width: 50%;
  border: none;
  border-top: 1px solid;
  margin: 1rem 50px;
`
const BodyCardsAcademics = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  width: 95%;
`
const CardAcademic = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 10px;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.389);
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border: 20px solid transparent;
    border-top: 20px solid var(--color-theme);
    border-right: 20px solid var(--color-theme);
  }
  &:nth-child(1) {
    grid-row: 1/3;
  }
  &:nth-child(2) {
    grid-row: 1/2;
  }
  &:nth-child(3) {
    grid-row: 2/3;
  }
  &:nth-child(4) {
    grid-row: 2/3;
  }
  &:nth-child(5) {
    grid-row: 1/2;
  }
`
const TitleCardAcademic = styled.div`
  display: flex;
  justify-content: start;
  h2 {
    font-family: var(--font-bai-jamjuree);
    font-size: 20px;
    width: 85%;
  }
`
const HeaderCardAcadenic = styled.div`
  h3 {
    font-size: 16px;
  }
  h4 {
    font-size: 12px;
    color: var(--color-text-secondary);
  }
`
const ContainerP = styled.div`
  overflow: hidden;
  margin: 10px 0;
  position: relative;
  p {
    font-size: 14px;
    color: var(--color-text-secondary);
  }
  h5 {
    margin-top: 10px;
    font-size: 14px;
  }
`
const StyledLink = styled(Link)`
  padding: 5px;
  margin: 10px 0 5px;
  border-radius: 40px;
  color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  background-color: var(--color-theme);
  width: 120px;
  text-align: center;
  &:hover {
    background-color: var(--color-text-secondary);
    cursor: pointer;
  }
  &:active {
    background-color: var(--color-theme);
    color: black;
  }
`

export {
  BodyAcademics,
  TopSections,
  TitlePage,
  Line,
  BodyCardsAcademics,
  CardAcademic,
  TitleCardAcademic,
  HeaderCardAcadenic,
  ContainerP,
  StyledLink,
}
