import { createBrowserRouter } from 'react-router-dom'
import Home from 'ui/pages/Home'

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        path: '/'
      }
    ]
  }
])
export default router
