import renderWithProviders from 'testHelpers/providers/components'
import { DynamicForm, createFormElement } from '..'
import { screen } from '@testing-library/react'

describe('Dynamic Form', () => {
  it('Should render a input correctly', () => {
    renderWithProviders(
      <DynamicForm
        fields={[
          createFormElement('input', {
            label: 'Name',
            name: 'name',
            placeholder: 'Enter your name'
          })
        ]}
        onSubmit={() => {}}
        submit={<button type="submit">Submit</button>}
      />
    )
    const inputElement = screen.getByLabelText('Name')
    expect(inputElement).toBeInTheDocument()
  })

  it(`Should render a select field correctly with it's options`, () => {
    renderWithProviders(
      <DynamicForm
        fields={[
          createFormElement('select', {
            label: 'Select',
            name: 'select',
            options: [
              {
                label: 'Option 1',
                value: 'option1'
              }
            ],
            placeholder: 'Select an option'
          })
        ]}
        onSubmit={() => {}}
        submit={<button type="submit">Submit</button>}
      />
    )

    const selectElement = screen.getByLabelText('Select')
    const selectOption = screen.getByRole('option', { name: /option 1/i })
    expect(selectElement).toBeInTheDocument()
    expect(selectOption).toBeInTheDocument()
  })
})
