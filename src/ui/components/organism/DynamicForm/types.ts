import { type ReactNode } from 'react'
import { type InputProps } from 'ui/components/molecules/Input/types'
import { type SelectProps } from 'ui/components/molecules/Select/types'

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
  onSubmit: () => void
  submit: ReactNode
}

export type FieldsMapProps = Pick<DynamicFormProps, 'fields'>
