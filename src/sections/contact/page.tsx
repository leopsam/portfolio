'use client'
import React, { useState } from 'react'
import {
  BodyContact,
  TopSections,
  TitlePage,
  Line,
  Form,
  Label,
  Input,
  Textarea,
  Button,
} from './contactStyles'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const phoneNumber = '5511999999999'
  const message = `
  - Nome: ${formData.name}, 
  - Email:${formData.email}, 
  Ola Leonardo, ${formData.message}, 
  `
  const encodedMessage = encodeURIComponent(message)
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    console.log('handleSubmit called')
    console.log('URL:', url)

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
    <BodyContact>
      <TopSections>
        <TitlePage>
          <Line />
          <h1>Contato</h1>
          <Line />
        </TitlePage>
      </TopSections>

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
        <Button type="button" onClick={handleSubmit}>
          Enviar mensagem
        </Button>
      </Form>
    </BodyContact>
  )
}
