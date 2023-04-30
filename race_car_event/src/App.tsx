import Navbar from './components/Navbar'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './config/router'
import UserProvider from './contexts/userContext'


function App () {

  return(
      <div className="App bg-gradient-to-tr from-rose-800 via-purple-700 to-violet-700">
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
      </div>
  )
}

export default App
