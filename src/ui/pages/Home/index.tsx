import { Button, Flex, Box } from '@chakra-ui/react'

import { DynamicForm, PrettyJson, createFormElement } from 'ui/components'
import { useUserForm } from './useUserForm'

const Home = () => {
  const { errors, formData, onSubmit, register } = useUserForm()

  return (
    <Flex
      alignItems="center"
      gap={8}
      h="100vh"
      justifyContent="center"
      w="100vw"
    >
      <Box h="fit-content" w="400px">
        <DynamicForm
          fields={[
            createFormElement('input', {
              error: errors.name?.message,
              label: 'Name',
              placeholder: 'Enter your name',
              ...register('name')
            }),
            createFormElement('input', {
              error: errors.age?.message,
              label: 'Age',
              placeholder: 'Enter your age',
              type: 'number',
              ...register('age')
            }),
            createFormElement('select', {
              error: errors.gender?.message,
              label: 'Gender',
              options: [
                {
                  label: 'Male',
                  value: 'male'
                },
                {
                  label: 'Female',
                  value: 'female'
                },
                {
                  label: 'Other',
                  value: 'other'
                }
              ],
              placeholder: 'Select an option',
              ...register('gender')
            })
          ]}
          onSubmit={onSubmit}
          submit={
            <Button colorScheme="teal" type="submit">
              Submit
            </Button>
          }
        />
      </Box>
      <Box w="400px">
        <PrettyJson data={formData} />
      </Box>
    </Flex>
  )
}

export default Home
