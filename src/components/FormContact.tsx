'use client'
import React, { useState } from 'react'
import styled from 'styled-components'

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const message = `
  - Nome: ${formData.name}, 
  - Email: ${formData.email}, 
  Ola Leonardo, ${formData.message}.
  `
  const phoneNumber = '5521979272015'
  const encodedMessage = encodeURIComponent(message)
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    window.open(url, '_blank')
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="message">Message:</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>
      <Button type="submit">Enviar mensagem</Button>
    </Form>
  )
}

const Form = styled.form`
  padding: 40px;
  border-radius: 8px;
  width: 400px;
`
const Label = styled.label`
  display: block;
  font-size: 14px;
  color: var(--color-white);
  margin-bottom: 8px;
`
const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: var(--color-white);

  ::placeholder {
    color: var(--color-gray);
    font-style: italic;
  }
`
const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: var(--color-white);
  resize: none;

  ::placeholder {
    color: var(--color-gray);
    font-style: italic;
  }
`
const Button = styled.button`
  background-color: #333333;
  color: var(--color-white);
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #555555;
  }
`
