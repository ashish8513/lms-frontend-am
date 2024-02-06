import { Route,Routes } from 'react-router-dom'

import './App.css'
import Footer from './Components/Footer'
import HomeLayout from './Layouts/HomeLayout'
import HomePages from './Pages/HomePages'
import AboutUs from './Pages/AboutUs'

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<HomePages />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>

       </Routes>
      {/* <HomeLayout /> */}
    </>
  )
}

export default App
