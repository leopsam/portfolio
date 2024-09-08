'use client'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
        setIsDarkTheme(storedTheme === 'dark')
        document.documentElement.setAttribute('data-theme', storedTheme)
      }
    }
  }, [])

  useEffect(() => {
    const theme = isDarkTheme ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }, [isDarkTheme])

  const toggleTheme = () => {
    setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme)
  }

  return (
    <Rail onClick={toggleTheme} aria-pressed={isDarkTheme}>
      <Indicator $variant={isDarkTheme ? 'dark' : 'light'}>
        <Icon>{isDarkTheme ? <Moon /> : <Sun />}</Icon>
      </Indicator>
    </Rail>
  )
}

const Rail = styled.button`
  width: 50px;
  height: 23px;
  background-color: var(--color-background);
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  border: none;
  padding: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: background-color 0.3s ease;
  @media (max-width: 768px) {
    background-color: black;
  }
`

const Indicator = styled.div<{ $variant?: string }>`
  width: 23px;
  height: 23px;
  background-color: ${({ $variant }) =>
    $variant === 'dark' ? 'black' : 'gray'};
  position: absolute;
  top: 0;
  left: ${({ $variant }) => ($variant === 'dark' ? '27px' : '0')};
  transition: left 0.3s ease;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.div`
  width: 19px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
`
