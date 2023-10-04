import { ChakraProvider } from '@chakra-ui/react'
import type { MainProviderProps } from './types'
import { Provider } from 'react-redux'
import { store } from 'store/configStore'

const MainProvider = ({ children }: MainProviderProps) => (
  <Provider store={store}>
    <ChakraProvider>{children}</ChakraProvider>
  </Provider>
)

export default MainProvider
