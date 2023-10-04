import { FormControl, FormLabel, Input as ChakraInput } from '@chakra-ui/react'
import { type InputProps } from './types'

export const Input = ({ label, ...inputProps }: InputProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <ChakraInput type="email" {...inputProps} />
    </FormControl>
  )
}
