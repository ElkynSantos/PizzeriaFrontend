import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  LoginForm from '../src/Components/Formulario/Formulario'
import Navbarx from "./Components/Navbar/Navbar"
import TablaVer from './Components/VerPizzas/verPizzas'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbarx></Navbarx>
    <TablaVer></TablaVer>
    </>
  )
}

export default App
