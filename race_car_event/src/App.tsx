import Navbar from './components/Navbar'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './config/router'

function App() {

  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
