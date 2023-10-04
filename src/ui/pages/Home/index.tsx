import { Button } from '@chakra-ui/react'
import { DynamicForm, createFormElement } from 'ui/components'

const Home = () => {
  return (
    <DynamicForm
      fields={[
        createFormElement('input', {
          label: 'Name',
          placeholder: 'Enter your name'
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
