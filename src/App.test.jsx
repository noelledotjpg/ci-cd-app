import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renderiza o título "Get started"', () => {
    render(<App />)
    expect(screen.getByText('Get started')).toBeInTheDocument()
  })

  it('incrementa o contador ao clicar no botão', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })
})
