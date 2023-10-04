import { FormControl, FormLabel, Input as ChakraInput } from '@chakra-ui/react'
import { type InputProps } from './types'
import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...inputProps }, ref) => {
    return (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <ChakraInput {...inputProps} ref={ref} />
      </FormControl>
    )
  }
)
