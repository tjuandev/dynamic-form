import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDynamicFormState } from 'store/dynamicForm'

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

export const useUserForm = () => {
  const { data: formData, setData: setFormData } = useDynamicFormState()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormSchema>({
    defaultValues: formData,
    resolver: zodResolver(formSchema)
  })

  const onSubmit = handleSubmit((data: any) => {
    setFormData(data)
  })

  return {
    errors,
    formData,
    onSubmit,
    register
  }
}
