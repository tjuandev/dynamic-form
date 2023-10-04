import { Button, Flex, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { DynamicForm, PrettyJson, createFormElement } from 'ui/components'

const Home = () => {
  const [formData, setFormData] = useState({})

  const { handleSubmit, register } = useForm()
  const onSubmit = handleSubmit((data: any) => {
    setFormData(data)
  })

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
              label: 'Name',
              placeholder: 'Enter your name',
              ...register('name')
            }),
            createFormElement('input', {
              label: 'Age',
              placeholder: 'Enter your age',
              type: 'number',
              ...register('age')
            }),
            createFormElement('select', {
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
            <Button colorScheme="blue" type="submit">
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
