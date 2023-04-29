import Navbar from './components/Navbar'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './config/router'
import UserProvider from './contexts/userContext'


function App () {

  return(
  <UserProvider>
      <div className="App bg-gradient-to-tr from-rose-800 via-purple-700 to-violet-700">
          <Navbar />
          <RouterProvider router={router} />
      </div>
  </UserProvider>
  )
  }


export default App
