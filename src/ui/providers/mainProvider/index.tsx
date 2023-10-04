import { ChakraProvider } from '@chakra-ui/react'
import type { MainProviderProps } from './types'

const MainProvider = ({ children }: MainProviderProps) => (
  <ChakraProvider>{children}</ChakraProvider>
)

export default MainProvider
