'use client'
import styled from 'styled-components'

const BodyStacks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-section);
  padding-bottom: 70px;
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
const ContainerStacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80vw;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`
const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  font-size: 25px;
  img {
    width: 30px;
    height: 30px;
  }
  h2 {
    margin: 5px;
    font-family: var(--font-bai-jamjuree);
    font-size: 16px;
  }
`

export { TopSections, TitlePage, Line, BodyStacks, ContainerStacks, Stack }
