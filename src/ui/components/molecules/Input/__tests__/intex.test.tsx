import renderWithProviders from 'testHelpers/providers/components'
import { screen } from '@testing-library/react'
import { Input } from '..'

describe('Input', () => {
  it('Should render a input correctly', () => {
    renderWithProviders(<Input label="Name" type="email" />)
    const inputElement = screen.getByLabelText('Name')
    expect(inputElement).toBeInTheDocument()
  })
})
