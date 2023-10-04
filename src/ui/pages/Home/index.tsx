import { Button } from '@chakra-ui/react'
import { DynamicForm, createFormElement } from 'ui/components'

const Home = () => {
  return (
    <DynamicForm
      fields={[
        createFormElement('input', {
          label: 'Name',
          name: 'name',
          placeholder: 'Enter your name'
        }),
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
      submit={
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      }
    />
  )
}

export default Home
