'use client'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

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
    <Rail onClick={toggleTheme}>
      <Indicator variant={theme === 'light' ? 'dark' : 'light'}>
        <Icon>{theme === 'light' ? <Sun /> : <Moon />}</Icon>
      </Indicator>
    </Rail>
  )
}
interface IndicatorProps {
  variant?: 'dark' | 'light'
}

const Rail = styled.div`
  width: 50px;
  height: 23px;
  background-color: var(--color-background);
  border-radius: 50px;
  position: relative;
  cursor: pointer;
`
const Indicator = styled.div<IndicatorProps>`
  width: 23px;
  height: 23px;
  background-color: ${props => (props.variant === 'dark' ? 'black' : 'gray')};
  left: ${props => (props.variant === 'dark' ? 27 : 0)}px;
  transition: 0.5s;
  border-radius: 50%;
  transform: scale(0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`
const Icon = styled.div`
  width: 19px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`
