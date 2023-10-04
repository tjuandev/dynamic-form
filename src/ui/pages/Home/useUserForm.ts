import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })

  const [formData, setFormData] = useState({})

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
