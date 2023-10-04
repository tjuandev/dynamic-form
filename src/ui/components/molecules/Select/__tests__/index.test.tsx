import renderWithProviders from 'testHelpers/providers/components'
import { screen } from '@testing-library/react'
import { Select } from '..'

describe('Select', () => {
  it('Should render a select correctly', () => {
    renderWithProviders(<Select label="Select" name="name" />)
    const inputElement = screen.getByLabelText('Name')
    expect(inputElement).toBeInTheDocument()
  })
})
