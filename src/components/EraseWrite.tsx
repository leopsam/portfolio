'use client'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const texts = [
  '<Programador />',
  '<Pai />',
  '<Marido />',
  '<Filho />',
  '<Gamer />',
  '<Desenvolvedor Full Stack />',
]

export default function EraseWrite() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [speed, setSpeed] = useState(150)

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setDeleting(true)
      setSpeed(100)
      return
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex(prev => (prev + 1) % texts.length)
      setSpeed(150)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (deleting ? -1 : 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, speed])

  return <TypingSpan>{texts[index].substring(0, subIndex)}</TypingSpan>
}

const TypingSpan = styled.span`
  font-size: 24px;
  font-weight: bold;
  border-right: 2px solid var(--color-theme);
  padding-right: 5px;
  white-space: nowrap;
  overflow: hidden;
`
