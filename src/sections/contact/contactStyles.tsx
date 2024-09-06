'use client'
import styled from 'styled-components'

const BodyContact = styled.div`
  background-color: var(
    --color-menu
  ); /* Coloque a imagem de fundo que você quer */
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
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
const Form = styled.form`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`
const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`
const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: #f9f9f9;

  ::placeholder {
    color: #aaa;
    font-style: italic;
  }
`
const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: #f9f9f9;

  ::placeholder {
    color: #aaa;
    font-style: italic;
  }
`
const Button = styled.a`
  grid-column: span 2; /* Botão ocupa as duas colunas */
  background-color: #333;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: #555;
  }
`

export {
  BodyContact,
  TopSections,
  TitlePage,
  Line,
  Form,
  Label,
  Input,
  Textarea,
  Button,
}
