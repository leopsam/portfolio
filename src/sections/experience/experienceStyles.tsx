'use client'
import styled from 'styled-components'

const BodyExperience = styled.div`
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
    text-align: center;
  }
`
const Line = styled.hr`
  width: 50%;
  border: none;
  border-top: 1px solid;
  margin: 1rem 50px;
`
const BodyCardsExperience = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const CardExperience = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 90%;
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
`
const TitleExperience = styled.div`
  display: flex;
  justify-content: start;
  h2 {
    font-family: var(--font-bai-jamjuree);
    font-size: 20px;
    width: 85%;
  }
`
const HeaderExperience = styled.div`
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

export {
  BodyExperience,
  TopSections,
  TitlePage,
  Line,
  BodyCardsExperience,
  CardExperience,
  TitleExperience,
  HeaderExperience,
  ContainerP,
}
