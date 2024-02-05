import { AiFillCloseCircle } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';

function HomeLayout({ children }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //For checking if user has been logged in

    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)

    // for displaying the action of acc roles
    const role=useSelector((state) => state?.auth?.role)
    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width = "auto"
    }
    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;
        changeWidth();
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
                    <ul className="menu p-4 w-48 sm:w-80 bg-base-200 text-base-content relative">
                        <li className='w-fit absolute right-2 z-50'>
                            <button onClick={hideDrawer} >
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        {isLoggedIn && role === 'ADMIN'(
                            <li>
                                <Link to="/Admin/Dashboard">Admin Dashboard</Link>
                            </li>
                        )}
                        <li>
                            <Link to="/courses" >All Courses</Link>
                        </li>
                        <li>
                            <Link to="/" >Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/about" >About</Link>
                        </li>
                        {!isLoggedIn && (
                         <div className="w-full flex justify-center items-center">
                            <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full'>
                                <Link to='/login'>Login</Link>
                            </button>
                            <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                                <Link to='/Signup'>Signup</Link>
                            </button>
                         </div>
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
