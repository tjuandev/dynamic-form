import {
  type FormElementProps,
  type FieldsTypes,
  type FormComponent
} from './types'

export const createFormElement = <Field extends FieldsTypes>(
  type: Field,
  props: FormElementProps<Field>
): FormComponent<Field> => {
  return { props, type }
}
