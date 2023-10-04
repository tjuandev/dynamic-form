import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { setData } from './slice'

export const useDynamicFormState = () => {
  const dispatch = useTypedDispatch()
  const data = useTypedSelector(state => state.dynamicForm.data)

  const setState = {
    setData: (data: FormData) => dispatch(setData(data))
  }

  return { data, ...setState }
}
