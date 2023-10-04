import { Flex } from '@chakra-ui/react'
import {
  type FieldsTypes,
  type DynamicFormProps,
  type FieldsMapProps
} from './types'
import { createElement, type ComponentType } from 'react'

import { Input, Select } from 'ui/components/molecules'

// NOTE "Any" is used here because to pass component props you should use createFormElement function so you can't pass wrong props
const fieldByType: {
  [key in FieldsTypes]: ComponentType<any>
} = {
  input: Input,
  select: Select
}

const FieldsMap = ({ fields }: FieldsMapProps) =>
  fields.map(({ type, props }) => {
    const Field = fieldByType[type]
    return createElement(Field, { key: props.name, ...props })
  })

export const DynamicForm = ({ fields, submit, onSubmit }: DynamicFormProps) => {
  return (
    <Flex justifyContent="center" mt="8" width="100vw">
      <Flex as="form" flexDir="column" gap={4} onSubmit={onSubmit} w="400px">
        <FieldsMap fields={fields} />
        {submit}
      </Flex>
    </Flex>
  )
}

export * from './createFormElement'
