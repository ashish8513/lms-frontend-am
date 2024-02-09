import { Route, Routes } from 'react-router-dom'

import './App.css'
import Footer from './Components/Footer'
import HomeLayout from './Layouts/HomeLayout'
import HomePages from './Pages/HomePages'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import SignUp from './Pages/SignUp'
import LoginPage from './Pages/LoginPage'
import CourseList from './Pages/Course/CourseList'
import Contact from './Pages/Contact'
import Denied from './Pages/Denied'
import CourseDescription from './Pages/Course/CourseDescription'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/courses" element={ <CourseList />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/denied" element={ <Denied />} />
        <Route path="/course/description" element={ <CourseDescription />} />

        <Route path="/Login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <HomeLayout /> */}
    </>
  )
}

export default App
