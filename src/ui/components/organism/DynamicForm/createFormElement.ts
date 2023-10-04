import {
  type FormElementProps,
  type FieldsTypes,
  type FormField
} from './types'

export const createFormElement = <Field extends FieldsTypes>(
  type: Field,
  props: FormElementProps<Field>
): FormField<Field> => {
  return { props, type }
}
