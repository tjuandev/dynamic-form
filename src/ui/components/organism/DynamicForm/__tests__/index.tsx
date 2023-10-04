import renderWithProviders from 'testHelpers/providers/components'
import { DynamicForm, createFormElement } from '..'
import { screen } from '@testing-library/react'

describe('Dynamic Form', () => {
  it('Should render a input correctly following createFormElement function', () => {
    renderWithProviders(
      <DynamicForm
        fields={[
          createFormElement('input', {
            label: 'Name',
            placeholder: 'Enter your name'
          })
        ]}
        submit={<button type="submit">Submit</button>}
      />
    )
    const inputElement = screen.getByLabelText('Name')
    const buttonElement = screen.getByRole('button', { name: /submit/i })
    expect(inputElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  })
})
