import { type SelectProps } from '@chakra-ui/react'
import { type ReactNode } from 'react'
import { type InputProps } from 'ui/components/molecules/Input/types'

export type FieldsTypes = 'input' | 'select'

export type FormElementProps<Field extends FieldsTypes> = Field extends 'input'
  ? InputProps
  : SelectProps

export type FormField<Field extends FieldsTypes> = {
  props: FormElementProps<Field>
  type: Field
}

export interface DynamicFormProps {
  fields: Array<FormField<FieldsTypes>>
  submit: ReactNode
}

export type FieldsMapProps = Pick<DynamicFormProps, 'fields'>
