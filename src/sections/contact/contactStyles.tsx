'use client'
import styled from 'styled-components'

const BodyContact = styled.div`
  background-color: var(--color-black);
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  @media (max-width: 1028px) {
    height: 100%;
  }
  @media (max-width: 768px) {
    height: 100%;
  }
`
const ContainerItens = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 100%;
  align-items: center;
  color: var(--color-white);
  @media (max-width: 768px) {
    padding: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
`
const TopSections = styled.div`
  margin: 10px;
  width: 400px;
  max-width: 600px;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
  }
  p {
    font-size: 14px;
    margin: 5px 0;
    line-height: 1.6;
    color: var(--color-gray);
  }
`
const Line = styled.hr`
  width: 50%;
  border: none;
  border-top: 1px solid;
  margin: 1rem 0px;
`

export { BodyContact, ContainerItens, TopSections, Line }
