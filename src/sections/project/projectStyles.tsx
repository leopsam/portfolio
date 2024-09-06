'use client'
import styled from 'styled-components'
import Link from 'next/link'

const BodyProject = styled.div`
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
  p {
    width: 80vw;
    text-align: center;
    font-size: 14px;
    margin-top: 20px;
    line-height: 1.6;
    color: var(--color-text-secondary);
  }
`
const TitlePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  h1 {
    font-family: var(--font-bai-jamjuree);
  }
`
const Line = styled.hr`
  width: 50%;
  border: none;
  border-top: 1px solid;
  margin: 1rem 50px;
`
const BodyCardsProject = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const CardProject = styled.div`
  background-color: var(--color-background);
  border-radius: 15px;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.389);
  overflow: hidden;
  height: 410px;
  width: 290px;
  margin: 30px 10px;
  img {
    width: 100%;
    height: 180px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`
const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 220px;
  box-sizing: border-box;
  padding: 20px;
  h2 {
    font-family: var(--font-bai-jamjuree);
    font-size: 21px;
  }
  p {
    line-height: 1.5;
    font-size: 12px;
    color: var(--color-text-secondary);
  }
`
const ContainerSkill = styled.div`
  width: 100%;
  display: flex;
  h3 {
    font-size: 12px;
  }
`
const ContainerLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
const Icon = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
  color: var(--color-text-secondary);
  &:hover {
    color: var(--color-theme);
    cursor: pointer;
  }
  &:active {
    color: var(--color-text-secondary);
  }
`

export {
  BodyProject,
  TopSections,
  TitlePage,
  Line,
  BodyCardsProject,
  CardProject,
  ContainerDescription,
  ContainerSkill,
  ContainerLink,
  Icon,
}
