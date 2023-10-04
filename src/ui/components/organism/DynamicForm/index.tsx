import { Button, Flex, Select } from '@chakra-ui/react'
import { type FieldsTypes, type DynamicFormProps } from './types'
import { createElement, type ComponentType } from 'react'
import { Input } from 'ui/components/molecules'

// NOTE "Any" is used here because to pass component props you should use createFormElement function so you can't pass wrong props
const fieldByType: {
  [key in FieldsTypes]: ComponentType<any>
} = {
  input: Input,
  select: Select
}

const Items = ({ components }: DynamicFormProps) =>
  components.map(({ type, props }) => {
    const Field = fieldByType[type]
    return createElement(Field, props)
  })

export const DynamicForm = ({ components }: DynamicFormProps) => {
  return (
    <Flex justifyContent="center" mt="8" width="100vw">
      <Flex as="form" flexDir="column" gap={4} w="400px">
        <Items components={components} />
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </Flex>
    </Flex>
  )
}

export * from './createFormElement'
