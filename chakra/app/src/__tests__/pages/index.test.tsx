import React from 'react'
import { act, cleanup, render, screen } from '@testing-library/react'
import Home from '../../pages'

/* 実施するテストケース

- Rendering
  - Header Text (App Name)
*/

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    }
  },
}))

beforeEach(() => {
  cleanup()
})

afterEach(() => {
  cleanup()
})

describe('Unit', () => {
  it('Rendering header text', () => {
    act(() => {
      render(<Home />)
    })
    const heading = screen.getByText(/todos/i)
    expect(heading).toBeInTheDocument()

    const headerBox = screen.getByTestId('header-box')
    expect(headerBox).toHaveClass('css-xasi6s')
  })
})
