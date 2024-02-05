import { Route,Routes } from 'react-router-dom'

import './App.css'
import Footer from './Components/Footer'
import HomeLayout from './Layouts/HomeLayout'
import HomePages from './Pages/HomePages'

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<HomePages />}></Route>

       </Routes>
      {/* <HomeLayout /> */}
    </>
  )
}

export default App
