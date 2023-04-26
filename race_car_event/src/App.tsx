import Navbar from './components/Navbar'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './config/router'
import { userContext } from './contexts/userContext'

function App() {
  

  return (
    <userContext.Provider value={{user: {name: "test"}}}>
    <div className="App bg-gradient-to-tr from-rose-800 via-purple-700 to-violet-700">
      <Navbar />
      <RouterProvider router={router} />
    </div>
    </userContext.Provider>
  )
}

export default App
