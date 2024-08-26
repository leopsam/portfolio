'use client'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const theme = isDarkTheme ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
  }, [isDarkTheme])

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <Button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</Button>
  )
}

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`
