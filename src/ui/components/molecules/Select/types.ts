import { type SelectProps as ChakraSelectProps } from '@chakra-ui/react'

export interface SelectProps extends ChakraSelectProps {
  label: string
  name: string
  error?: string
  options?: Array<{ label: string; value: string }>
}
