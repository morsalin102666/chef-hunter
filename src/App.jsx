import { Outlet } from 'react-router-dom'
import './App.css'
import Navebar from './component/Navebar/Navebar'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <>
      <Navebar></Navebar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
