import { AiFillCloseCircle } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/Slices/AuthSlice';

function HomeLayout({ children }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //For checking if user has been logged in

    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)

    // for displaying the action of acc roles

    const role = useSelector((state) => state?.auth?.role)

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width = "auto"
    }
    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;
        changeWidth();
    }
    async function handleLogout(e) {
        e.preventDefault();
        const res = await dispatch(logout())
        if (res?.payload?.sucess)
            navigate("/");
    }
    return (
        <div className='min-h-[90vh]'>
            <div className="drawer absolute left-0 z-50 w-fit">
                <input id="my-drawer" type="checkbox" className='drawer-toggle' />
                <div className="drawe-content">
                    <label htmlFor="my-drawer" className='cursor-pointer relative'>
                        <FiMenu onClick={changeWidth} size={"32px"} className="font-bold text-white m-4" />
                    </label>
                </div>

                <div className="drawer-side w-0">
                    <label htmlFor="my-drawer" className='drawer-overlay'>

                    </label>
                    <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
                        <li className='w-fit absolute right-2 z-50'>
                            <button onClick={hideDrawer} >
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        {isLoggedIn && role === 'ADMIN' &&(
                            <li>
                                <Link to="/Admin/Dashboard">Admin Dashboard</Link>
                            </li>
                        )}

                            <li>
                                <Link to="/course/create">Create new Course</Link>
                            </li>

                        <li>
                            <Link to="/courses" >All Courses</Link>
                        </li>
                        <li>
                            <Link to="/contact" >Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/about" >About</Link>
                        </li>
                        {!isLoggedIn && (
                            <li className='absolute bottom-4 w-[90%]' >
                                <div className="w-full flex justify-center items-center">

                                    <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                        <Link to='/signUp'>SignUp</Link>
                                    </button>

                                    <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                        <Link onClick={handleLogout}>Logout</Link>
                                    </button>

                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout
