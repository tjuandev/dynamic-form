# Dynamic Form with TypeScript

A flexible and type-safe dynamic form generator built with React and TypeScript.

[screen-capture.webm](https://github.com/tjuandev/dynamic-form/assets/67200208/db4bcca5-2fae-4308-9de5-e94093b93967)


## 🌟 Features

- **Strongly-typed**: Utilize TypeScript's capabilities. Ensure form field correctness with the `createFormElement` helper.
- **Multiple Field Types**: Supports input and select fields right out of the box.
- **Extensible**: Add more field types with ease.
- **Efficient Rendering**: Leveraging React's `createElement` for optimal performance.
- **Lib Agnostic**: Choose any form library you prefer.
- **Out-of-the-Box Validation**: Use validators like zod, yup, and more.
- **RTL Support**: Comes with React Testing Library support.
- **Persisted Data with Redux**: Retains form data using redux-persist.

## 📦 Installation

- **Required Node Version**: v19.8.1
- **Recommended Package Manager**: yarn

```bash
yarn install
```

## 🏃 Important Commands
#### Run the Project:

```bash
yarn dev 
```
#### Test the Project:

```bash
yarn test
```

#### Test coverage:

```bash
yarn test:c
```



## 🚀 Usage

Remember to always use `createFormElement` so you can have type safety.

```typescript
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

```
