import {
  FormControl,
  FormLabel,
  Select as ChakraSelect
} from '@chakra-ui/react'
import { type SelectProps } from './types'
import { forwardRef } from 'react'

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, ...selectProps }, ref) => {
    return (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <ChakraSelect {...selectProps} ref={ref}>
          {options?.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </ChakraSelect>
      </FormControl>
    )
  }
)
