import {
  FormControl,
  FormLabel,
  Select as ChakraSelect
} from '@chakra-ui/react'
import { type SelectProps } from './types'

export const Select = ({ label, options, ...inputProps }: SelectProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <ChakraSelect {...inputProps}>
        {options?.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </ChakraSelect>
    </FormControl>
  )
}
