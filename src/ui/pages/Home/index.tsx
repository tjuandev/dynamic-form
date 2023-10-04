import { Button, Flex, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { DynamicForm, PrettyJson, createFormElement } from 'ui/components'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  age: z
    .string({
      required_error: 'Age is required'
    })
    .nonempty({
      message: 'Age should not be empty'
    }),
  gender: z
    .string({
      required_error: 'Gender is required'
    })
    .nonempty(),
  name: z
    .string({
      required_error: 'Name is required'
    })
    .nonempty()
})

type FormSchema = z.infer<typeof formSchema>

const Home = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })

  const [formData, setFormData] = useState({})

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
