'use client'
import Link from 'next/link'
import styled from 'styled-components'

const BodyAcademics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95%;
  height: 100%;
`
const CardAcademic = styled.div`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  max-height: 85px;
  padding: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.521);
  border-radius: 15px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  transition: max-height 0.8s ease-in-out;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border: 20px solid transparent;
    border-top: 20px solid var(--color-theme);
    border-right: 20px solid var(--color-theme);
  }
  &:hover {
    max-height: 100vh;
    cursor: pointer;
    background-color: #81818181;
  }
`
const TitleCardAcademic = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  h2 {
    font-family: var(--font-bai-jamjuree);
    font-size: 20px;
    width: 95%;
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
  margin: 15px 0;
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
  margin: 18px 0 5px;
  border-radius: 40px;
  color: var(--color-white);
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
    color: var(--color-black);
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
