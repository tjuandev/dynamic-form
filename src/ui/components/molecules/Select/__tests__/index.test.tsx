import renderWithProviders from 'testHelpers/providers/components'
import { screen } from '@testing-library/react'
import { Select } from '..'

describe('Select', () => {
  it('Should render a select correctly', () => {
    renderWithProviders(<Select label="Select" name="select" />)
    const selectInput = screen.getByRole('combobox', {
      name: /select/i
    })
    expect(selectInput).toBeInTheDocument()
  })

  it('Should render a select with options correctly', () => {
    renderWithProviders(
      <Select
        label="Select"
        name="select"
        options={[
          {
            label: 'Option 1',
            value: 'option1'
          },
          {
            label: 'Option 2',
            value: 'option2'
          }
        ]}
      />
    )

    const option1 = screen.getByRole('option', {
      name: /option 1/i
    })
    const option2 = screen.getByRole('option', {
      name: /option 2/i
    })

    expect(option1).toBeInTheDocument()
    expect(option2).toBeInTheDocument()
  })

  it('Should render an error message correctly', () => {
    renderWithProviders(
      <Select
        error="This is an error"
        label="Select"
        name="select"
        options={[
          {
            label: 'Option 1',
            value: 'option1'
          },
          {
            label: 'Option 2',
            value: 'option2'
          }
        ]}
      />
    )

    const errorMessage = screen.getByText(/this is an error/i)
    expect(errorMessage).toBeInTheDocument()
  })
})
