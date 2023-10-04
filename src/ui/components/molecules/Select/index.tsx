import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  FormErrorMessage
} from '@chakra-ui/react'
import { type SelectProps } from './types'
import { forwardRef } from 'react'

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, ...selectProps }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        <FormLabel>{label}</FormLabel>
        <ChakraSelect {...selectProps} ref={ref}>
          {options?.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </ChakraSelect>
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    )
  }
)
