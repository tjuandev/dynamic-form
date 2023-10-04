import renderWithProviders from 'testHelpers/providers/components'
import { DynamicForm } from '..'
import { screen } from '@testing-library/react'

describe('Dynamic Form', () => {
  it('Should render a input correctly', () => {
    renderWithProviders(
      <DynamicForm components={[{ label: 'Name', type: 'input' }]} />
    )
    const inputElement = screen.getByLabelText('Name')
    expect(inputElement).toBeInTheDocument()
  })
})
