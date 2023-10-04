import renderWithProviders from 'testHelpers/providers/components'
import { screen } from '@testing-library/react'
import { Input } from '..'

describe('Input', () => {
  it('Should render a input correctly', () => {
    renderWithProviders(<Input label="Name" name="name" type="email" />)
    const inputElement = screen.getByLabelText('Name')
    expect(inputElement).toBeInTheDocument()
  })

  it('Should render an error message correctly', () => {
    renderWithProviders(
      <Input error="This is an error" label="Name" name="name" type="email" />
    )
    const errorMessage = screen.getByText('This is an error')
    expect(errorMessage).toBeInTheDocument()
  })
})
