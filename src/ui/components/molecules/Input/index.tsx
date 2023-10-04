import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  FormErrorMessage
} from '@chakra-ui/react'
import { type InputProps } from './types'
import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...inputProps }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        <FormLabel>{label}</FormLabel>
        <ChakraInput {...inputProps} ref={ref} />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    )
  }
)
