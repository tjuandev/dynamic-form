import { Button, Flex, Box } from '@chakra-ui/react'

import { DynamicForm, PrettyJson, createFormElement } from 'ui/components'
import { useUserForm } from './useUserForm'

const Home = () => {
  const { errors, formData, onSubmit, register } = useUserForm()

  return (
    <Flex
      alignItems="center"
      flexDirection={['column-reverse', 'column-reverse', 'row']}
      gap={8}
      justifyContent="center"
      minH="100vh"
      p={4}
      w="100vw"
    >
      <Box h="fit-content" maxW="400px" w="100%">
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
            <Button colorScheme="orange" type="submit">
              Submit
            </Button>
          }
        />
      </Box>
      <Box maxW="400px" w="100%">
        <PrettyJson data={formData} />
      </Box>
    </Flex>
  )
}

export default Home
