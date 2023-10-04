import { RouterProvider } from 'react-router-dom'
import router from 'ui/routes'
import MainProvider from 'ui/providers/mainProvider'

const App = () => (
  <MainProvider>
    <RouterProvider router={router} />
  </MainProvider>
)

export default App
