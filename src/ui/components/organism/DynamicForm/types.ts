import { type SelectProps } from '@chakra-ui/react'
import { type InputProps } from 'ui/components/molecules/Input/types'

export type FieldsTypes = 'input' | 'select'

export type FormElementProps<Field extends FieldsTypes> = Field extends 'input'
  ? InputProps
  : SelectProps

export type FormComponent<Field extends FieldsTypes> = {
  props: FormElementProps<Field>
  type: Field
}

export interface DynamicFormProps {
  components: Array<FormComponent<FieldsTypes>>
}
